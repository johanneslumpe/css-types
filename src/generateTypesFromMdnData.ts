import {
  ICssMultiplierTokenType,
  ICssTokenType,
  lexValueDeclarationGrammar,
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
import { IRawProperties, IRawSyntax, IRawSyntaxes } from 'mdn-data';
import mdnCssTypes from 'mdn-data/css/types.json';
import ts, { TypeAliasDeclaration } from 'typescript';

import { LENGTH_TYPE_NAME } from './constants';
import { generateTypesNodes } from './generateTypeNodes';
import { INestedComponentArray, RawToken } from './types';
import { convertRawTokensToComponents } from './utils/convertRawTokensToComponents';
import { generateTypeCombinations } from './utils/generateTypeCombinations';
import { generateDefaultStringTypeDeclaration } from './utils/generateTypeReferenceDeclarations';
import { groupTokensByCombinatorPredence } from './utils/groupTokensByCombinatorPredence';
import { parenthesesToFunction } from './utils/parenthesesToFunction';
import { typeNameWithSuffix } from './utils/typeNameWithSuffix';

const globalDataTypes = Object.keys(mdnCssTypes);

const getDataTypeKey = (str: string) => str.replace(/<\'?(.*?)\'?>/, '$1');

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

const removeCircularAndUnsupportedGrammar = (
  sourceObject: IRawSyntaxes | IRawProperties,
) => {
  const keysPerSource = Object.keys(sourceObject);
  const keysToRemove: string[] = [];
  forEach(key => {
    if (globalDataTypes.includes(key)) {
      return;
    }

    const checkCircularKeys = (syntax: IRawSyntax) => {
      const { emittedTokens } = lexValueDeclarationGrammar(syntax.syntax);
      if (containsUnsupportedSyntax(emittedTokens)) {
        return;
      }

      const dataTypes = filter(isDataTypeToken, emittedTokens);

      forEach(dataType => {
        const dataTypeKey = getDataTypeKey(dataType.value);
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
  obj: IRawSyntaxes,
  availableTypes: string[],
) => {
  const allKeys = Object.keys(obj).concat(availableTypes);

  let keys: string[] = [];
  let newObject = { ...obj };

  do {
    const keysToRemove: string[] = [];
    forEach(key => {
      const syntax = newObject[key];
      const { emittedTokens } = lexValueDeclarationGrammar(syntax.syntax);
      const dataTypeKeys = map(
        token => getDataTypeKey(token.value),
        filter(isDataTypeToken, emittedTokens),
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

// const generateTypeReferenceDeclaration = (
//   key: string,
//   value: string,
//   suffix: string = '',
// ) =>
//   ts.createTypeAliasDeclaration(
//     [],
//     [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
//     typeNameWithSuffix(parenthesesToFunction(key), suffix),
//     [],
//     ts.createTypeReferenceNode(value, []),
//   );

// const generateDefaultStringTypeDeclaration = (
//   key: string,
//   suffix: string = '',
// ) => generateTypeReferenceDeclaration(key, 'string', suffix);

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
            'TLength',
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
  availableTypes?: string[];
}

export const generateTypesFromMdnData = (
  sourceObject: IRawSyntaxes,
  options: IGenerateTypesFromMdnDataOptions = {},
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

      const syntax = withoutInvalidReferences[key];
      const { emittedTokens } = lexValueDeclarationGrammar(syntax.syntax);
      if (containsUnsupportedSyntax(emittedTokens)) {
        // alias everything that isn't currently parseable to string
        acc.push(generateDefaultStringTypeDeclaration(key, typeSuffix));
        return acc;
      }
      appendSuffixToDataTypes(emittedTokens, typeSuffix);
      // convertInfiniteMultiplersToFinite(emittedTokens);

      try {
        const components = convertRawTokensToComponents(emittedTokens);
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
        console.log(key, ' had error:', e.message, 'add string type');

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
