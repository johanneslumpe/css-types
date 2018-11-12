import {
  ICssMultiplierTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import {
  difference,
  filter,
  forEach,
  map,
  omit,
  reduce,
  some,
} from 'lodash/fp';
import mdnCssTypes from 'mdn-data/css/types.json';
import ts, { TypeAliasDeclaration } from 'typescript';

import { LENGTH_GENERIC_ARGUMENT, LENGTH_TYPE_NAME } from './constants';
import { generateTypesNodes } from './generateTypeNodes';
import {
  ComponentTypeRepresentation,
  IComponent,
  INestedComponentArray,
  IParsedSyntaxes,
  RawToken,
  SyntaxLookupFn,
} from './types';
import { convertRawTokensToComponents } from './utils/convertRawTokensToComponents';
import { generateDataTypeLookupKey } from './utils/generateDataTypeLookupKey';
import { generateTypeCombinations } from './utils/generateTypeCombinations';
import { generateDefaultStringTypeDeclaration } from './utils/generateTypeReferenceDeclarations';
import { groupTokensByCombinatorPredence } from './utils/groupTokensByCombinatorPredence';
import { inlineDataTypes } from './utils/inlineDataTypes';
import { parenthesesToFunction } from './utils/parenthesesToFunction';
import { syntaxCanBeCollapsed } from './utils/syntaxCanBeCollapsed';
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

const containsUnsupportedSyntax = (tokens: RawToken[]) =>
  some(
    token =>
      token.type === ICssTokenType.FUNCTION ||
      token.type === ICssTokenType.LITERAL ||
      !!(
        token.type === ICssTokenType.MULTIPLIER &&
        token.data &&
        token.data.subType === ICssMultiplierTokenType.HASH_MARK
      ),
    tokens,
  );

const isDataTypeToken = (token: RawToken) =>
  token.type === ICssTokenType.DATA_TYPE;

const removeCircularAndUnsupportedGrammar = (sourceObject: IParsedSyntaxes) => {
  const keysPerSource = Object.keys(sourceObject);
  const keysToRemove: string[] = [];
  forEach(key => {
    if (globalDataTypes.includes(key)) {
      return;
    }

    const checkCircularKeys = (parsedSyntax: RawToken[]) => {
      if (containsUnsupportedSyntax(parsedSyntax)) {
        return;
      }

      const dataTypes = filter(isDataTypeToken, parsedSyntax);

      forEach(dataType => {
        const dataTypeKey = generateDataTypeLookupKey(dataType.value);
        if (dataTypeKey === key) {
          keysToRemove.push(key);
          return;
        }

        if (
          !globalDataTypes.includes(dataTypeKey) &&
          sourceObject[dataTypeKey]
        ) {
          checkCircularKeys(sourceObject[dataTypeKey]);
        }
      }, dataTypes);
    };

    checkCircularKeys(sourceObject[key]);
  }, keysPerSource);
  return omit(keysToRemove, sourceObject);
};

const removeInvalidDataTypeReferences = (
  obj: IParsedSyntaxes,
  availableTypes: string[],
) => {
  const allKeys = Object.keys(obj).concat(availableTypes);
  let keys: string[] = [];
  let newObject = { ...obj };

  do {
    const keysToRemove: string[] = [];
    forEach(key => {
      const parsedSyntax = newObject[key];
      const dataTypeKeys = map(
        token => generateDataTypeLookupKey(token.value),
        filter(isDataTypeToken, parsedSyntax),
      );
      const invalidDataTypes = filter(
        dataType => !globalDataTypes.includes(dataType),
        difference(dataTypeKeys, allKeys),
      );
      if (invalidDataTypes.length) {
        keysToRemove.push(key);
      }
    }, Object.keys(newObject));

    keys = keysToRemove;
    newObject = omit(keysToRemove, newObject);
  } while (keys.length);

  return newObject;
};

const findDataTypeInTree = (
  tree: INestedComponentArray,
  dataType: string,
): boolean => {
  return tree.some(
    node =>
      Array.isArray(node)
        ? findDataTypeInTree(node, dataType)
        : node.type === ICssTokenType.DATA_TYPE &&
          node.value.includes(dataType),
  );
};

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

function generateCombinedKeywords(arr: INestedComponentArray) {
  return arr.reduce(
    (acc, item) => {
      if (Array.isArray(item)) {
        const representation = item.representation;
        if (isComponentArray(item)) {
          if (
            representation &&
            representation === ComponentTypeRepresentation.TUPLE
          ) {
            acc.push(item.reduce((a, i) => `${a} ${i.value}`.trim(), ''));
          } else {
            acc.push(...item.map(x => x.value));
          }
        }
      } else {
        acc.push(item.value);
      }
      return acc;
    },
    [] as string[],
  );
}

interface IGenerateTypesFromMdnDataOptions {
  typeSuffix?: string;
  blacklistPredicate?: (key: string) => boolean;
  lookupFn: SyntaxLookupFn;
  availableTypes?: string[];
}

function syntaxContainsDataTypes(arr: RawToken[]) {
  return some(token => token.type === ICssTokenType.DATA_TYPE, arr);
}

function isComponentArray(arr: INestedComponentArray): arr is IComponent[] {
  return arr.every(i => !Array.isArray(i));
}
export const generateTypesFromMdnData = (
  sourceObject: IParsedSyntaxes,
  options: IGenerateTypesFromMdnDataOptions,
) => {
  const { availableTypes = [], typeSuffix = '' } = options;
  const withoutCircular = removeCircularAndUnsupportedGrammar(sourceObject);
  const withoutInvalidReferences = removeInvalidDataTypeReferences(
    withoutCircular,
    availableTypes,
  );

  const typeDeclarations = reduce(
    (acc, key) => {
      if (options.blacklistPredicate && options.blacklistPredicate(key)) {
        return acc;
      }

      const parsedSyntax = withoutInvalidReferences[key];
      /**
       * If we enouncter as syntax which contains only keywords
       * and data types which themselves only contain keywords,
       * then we can inline all data types into their parent and
       * generate all possible combinations that the grammar
       * can evaluate to
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
          console.log(key, ': could not create combined syntax');
        }
      }

      if (containsUnsupportedSyntax(parsedSyntax)) {
        // alias everything that isn't currently parseable to string
        acc.push(generateDefaultStringTypeDeclaration(key, typeSuffix));
        return acc;
      }
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

        // types not supported by the lexer will default to `string`
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
