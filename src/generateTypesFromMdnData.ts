import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { filter, forEach, map, reduce } from 'lodash/fp';
import mdnCssTypes from 'mdn-data/css/types.json';
import ts, { TypeAliasDeclaration } from 'typescript';

import { LENGTH_GENERIC_ARGUMENT, LENGTH_TYPE_NAME } from './constants';
import { generateTypesNodes } from './generateTypeNodes';
import {
  INestedComponentArray,
  IParsedSyntaxes,
  RawToken,
  SyntaxLookupFn,
} from './types';
import { convertRawTokensToComponents } from './utils/convertRawTokensToComponents';
import { findDataTypeInTree } from './utils/findDataTypeInTree';
import { generateCombinedKeywords } from './utils/generateCombinedKeywords';
import { generateTypeCombinations } from './utils/generateTypeCombinations';
import { generateDefaultStringTypeDeclaration } from './utils/generateTypeReferenceDeclarations';
import { groupTokensByCombinatorPredence } from './utils/groupTokensByCombinatorPredence';
import { inlineDataTypes } from './utils/inlineDataTypes';
import { parenthesesToFunction } from './utils/parenthesesToFunction';
import { removeCircularAndUnsupportedGrammar } from './utils/removeCircularAndUnsupportedGrammar';
import { removeInvalidDataTypeReferences } from './utils/removeInvalidDataTypeReferences';
import { syntaxCanBeCollapsed } from './utils/syntaxCanBeCollapsed';
import { syntaxContainsDataTypes } from './utils/syntaxContainsDataTypes';
import { tokensContainUnsupportedSyntax } from './utils/tokensContainUnsupportedSyntax';
import { typeNameWithSuffix } from './utils/typeNameWithSuffix';

const globalDataTypes = Object.keys(mdnCssTypes);

const appendSuffixToDataTypes = (tokens: RawToken[], suffix: string) => {
  forEach(token => {
    if (token.type !== ICssTokenType.DATA_TYPE) {
      return;
    }
    if (token.value.includes("'")) {
      token.value = token.value.replace("'>", `-${suffix.toLowerCase()}'>`);
    }

    token.value = parenthesesToFunction(token.value);
  }, tokens);
};

// function isPlusMultiplier(token: RawToken) {
//   return (
//     token.type === ICssTokenType.MULTIPLIER &&
//     token.data &&
//     token.data.subType === ICssMultiplierTokenType.PLUS
//   );
// }
// function isAsteriskMultiplier(token: RawToken) {
//   return (
//     token.type === ICssTokenType.MULTIPLIER &&
//     token.data &&
//     token.data.subType === ICssMultiplierTokenType.ASTERISK
//   );
// }

// /**
//  * Converts infinite multipliers like `+` and `*` to opinionated, finite `{}` versions.
//  * Opinionated, because they will have a cap at 10 repetitions
//  * @param tokens
//  * @param suffix
//  */
// function convertInfiniteMultiplersToFinite(tokens: RawToken[]) {
//   tokens.forEach(token => {
//     const isPlus = isPlusMultiplier(token);
//     const isAsterisk = isAsteriskMultiplier(token);
//     if (isPlus || isAsterisk) {
//       token.data!.subType = ICssMultiplierTokenType.CURLY_BRACES;
//       token.value = isPlus ? `{1,9}` : '{0,9}';
//     }
//   });
// }

const generateTypesForKey = (
  key: string,
  suffix: string,
  value: INestedComponentArray,
) => {
  const usesLength = findDataTypeInTree(value, LENGTH_TYPE_NAME.toLowerCase());
  return ts.createTypeAliasDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    typeNameWithSuffix(parenthesesToFunction(key), suffix),
    usesLength
      ? [
          ts.createTypeParameterDeclaration(
            LENGTH_GENERIC_ARGUMENT,
            undefined,
            ts.createTypeReferenceNode(LENGTH_TYPE_NAME, []),
          ),
        ]
      : [],
    generateTypesNodes(value),
  );
};

export const generateBaseDataTypes = (keysToIgnore: string[]) => [
  map(
    key => generateDefaultStringTypeDeclaration(key),
    filter(key => !keysToIgnore.includes(key), globalDataTypes),
  ),
];

interface IGenerateTypesFromMdnDataOptions {
  typeSuffix?: string;
  blacklistPredicate?: (key: string) => boolean;
  lookupFn: SyntaxLookupFn;
  availableTypes?: string[];
}

/**
 * This is the core function which walks the passed object and generates
 * all types
 * @param sourceObject
 * @param options
 */
export const generateTypesFromMdnData = (
  sourceObject: IParsedSyntaxes,
  options: IGenerateTypesFromMdnDataOptions,
) => {
  const { availableTypes = [], typeSuffix = '' } = options;
  const withoutCircular = removeCircularAndUnsupportedGrammar(
    sourceObject,
    globalDataTypes,
  );
  const withoutInvalidReferences = removeInvalidDataTypeReferences(
    withoutCircular,
    availableTypes,
    globalDataTypes,
  );

  const typeDeclarations = reduce(
    (acc, key) => {
      if (options.blacklistPredicate && options.blacklistPredicate(key)) {
        return acc;
      }

      const parsedSyntax = withoutInvalidReferences[key];

      if (tokensContainUnsupportedSyntax(parsedSyntax)) {
        // alias everything that isn't currently parseable to string
        acc.push(generateDefaultStringTypeDeclaration(key, typeSuffix));
        return acc;
      }

      /**
       * If we encounter a syntax which contains only keywords
       * and data types, which themselves only contain keywords,
       * then we can inline all data types into their parent and
       * generate all possible permutations
       */
      if (
        syntaxContainsDataTypes(parsedSyntax) &&
        syntaxCanBeCollapsed(parsedSyntax, options.lookupFn)
      ) {
        const inlined = inlineDataTypes(parsedSyntax, options.lookupFn);
        try {
          const typeCombinations = generateTypeCombinations(
            groupTokensByCombinatorPredence(
              convertRawTokensToComponents(inlined),
            ),
          );

          // This should always be true but we still have to check
          // to ensure type-safety
          const first = typeCombinations[0];
          if (Array.isArray(first)) {
            const combined = generateCombinedKeywords(first);

            acc.push(
              ts.createTypeAliasDeclaration(
                [],
                [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
                typeNameWithSuffix(`${key}`, `${typeSuffix || ''}-combined`),
                [],
                ts.createUnionTypeNode(
                  // TODO fix `any` type
                  combined.map(x => ts.createStringLiteral(x) as any),
                ),
              ),
            );
          }
        } catch (e) {
          // tslint:disable-next-line: no-console
          console.log(key, ': could not create combined syntax');
        }
      }

      /**
       * After the combined types we still output the tuples
       * types because some people might prefer them and
       * it's nice to have both options
       */
      appendSuffixToDataTypes(parsedSyntax, typeSuffix);
      // convertInfiniteMultiplersToFinite(emittedTokens);

      try {
        const components = convertRawTokensToComponents(parsedSyntax);
        const typeCombinations = generateTypeCombinations(
          groupTokensByCombinatorPredence(components),
        );

        const first = typeCombinations[0];
        acc.push(
          generateTypesForKey(
            key,
            typeSuffix,
            Array.isArray(first) ? first : typeCombinations,
          ),
        );
      } catch (e) {
        // tslint:disable-next-line: no-console
        console.log(key, ':', e.message, 'add string type');

        // types not supported by the converter will default to `string`
        acc.push(generateDefaultStringTypeDeclaration(key, typeSuffix));
      }
      return acc;
    },
    [] as TypeAliasDeclaration[],
    Object.keys(withoutInvalidReferences),
  );

  return {
    typeDeclarations,
    typeKeys: Object.keys(withoutInvalidReferences),
  };
};
