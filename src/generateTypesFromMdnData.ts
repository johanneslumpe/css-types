import {
  ICssMultiplierTokenType,
  ICssTokenType,
  lexValueDeclarationGrammar,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { difference, omit } from 'lodash';
import { IRawSyntax, IRawSyntaxes } from 'mdn-data';
import { IRawProperties } from 'mdn-data/css/properties.json';
import types from 'mdn-data/css/types.json';
import ts, { TypeAliasDeclaration } from 'typescript';

import { generateTypeName, generateTypesNodes } from './generateTypeNodes';
import { INestedComponentArray, RawToken } from './types';
import { convertRawTokensToComponents } from './utils/convertRawTokensToComponents';
import { generateTypeCombinations } from './utils/generateTypeCombinations';
import { groupTokensByCombinatorPredence } from './utils/groupTokensByCombinatorPredence';

// data types which we do not want to generate
const blacklistedDataTypes = Object.keys(types);

const getDataTypeKey = (str: string) => str.replace(/<\'?(.*?)\'?>/, '$1');

const typeNameWithSuffix = (key: string, suffix: string = '') =>
  `${generateTypeName(key)}${suffix}`;

const appendSuffixToDataTypes = (tokens: RawToken[], suffix: string) => {
  tokens.forEach(token => {
    if (token.type === ICssTokenType.DATA_TYPE && token.value.includes("'")) {
      token.value = token.value.replace("'>", `-${suffix.toLowerCase()}'>`);
    }
  });
};

const containsUnsupportedSyntax = (tokens: RawToken[]) =>
  tokens.some(
    token =>
      token.type === ICssTokenType.FUNCTION ||
      token.type === ICssTokenType.LITERAL ||
      !!(
        token.type === ICssTokenType.MULTIPLIER &&
        token.data &&
        (token.data.subType === ICssMultiplierTokenType.PLUS ||
          token.data.subType === ICssMultiplierTokenType.HASH_MARK ||
          token.data.subType === ICssMultiplierTokenType.ASTERISK)
      ),
  );

const removeCircularAndUnsupportedGrammar = (
  sourceObject: IRawSyntaxes | IRawProperties,
) => {
  const keysPerSource = Object.keys(sourceObject);
  const keysToRemove: string[] = [];
  keysPerSource.forEach(key => {
    if (blacklistedDataTypes.includes(key)) {
      return;
    }

    const checkCirularKeys = (syntax: IRawSyntax) => {
      const { emittedTokens } = lexValueDeclarationGrammar(syntax.syntax);
      if (containsUnsupportedSyntax(emittedTokens)) {
        return;
      }

      const dataTypes = emittedTokens.filter(
        token => token.type === ICssTokenType.DATA_TYPE,
      );

      dataTypes.forEach(dataType => {
        const dataTypeKey = getDataTypeKey(dataType.value);
        if (dataTypeKey === key) {
          keysToRemove.push(key);
          return;
        }

        if (
          !blacklistedDataTypes.includes(dataTypeKey) &&
          sourceObject[dataTypeKey]
        ) {
          checkCirularKeys(sourceObject[dataTypeKey]);
        }
      });
    };

    checkCirularKeys(sourceObject[key]);
  });
  return omit(sourceObject, keysToRemove);
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
    Object.keys(newObject).forEach(key => {
      const syntax = newObject[key];
      const { emittedTokens } = lexValueDeclarationGrammar(syntax.syntax);
      const dataTypeKeys = emittedTokens
        .filter(x => x.type === ICssTokenType.DATA_TYPE)
        .map(token => getDataTypeKey(token.value));
      const invalidDataTypes = difference(dataTypeKeys, allKeys).filter(
        dataType => !blacklistedDataTypes.includes(dataType),
      );
      if (invalidDataTypes.length) {
        keysToRemove.push(key);
      }
    });

    keys = keysToRemove;
    newObject = omit(newObject, keysToRemove);
  } while (keys.length);

  return newObject;
};

const generateTypeReferenceDeclaration = (
  key: string,
  value: string,
  suffix: string = '',
) =>
  ts.createTypeAliasDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    typeNameWithSuffix(key, suffix),
    [],
    ts.createTypeReferenceNode(value, []),
  );

const generateDefaultStringTypeDeclaration = (
  key: string,
  suffix: string = '',
) => generateTypeReferenceDeclaration(key, 'string', suffix);

const generateTypesForKey = (
  key: string,
  suffix: string,
  value: INestedComponentArray,
) =>
  ts.createTypeAliasDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    typeNameWithSuffix(key, suffix),
    [],
    generateTypesNodes(value),
  );

const baseDataTypeAliasMap: { [index: string]: string } = {
  flex: 'IFrValue',
  percentage: 'IPercentageValue',
};
export const generateBaseDataTypes = (keysToIgnore: string[]) => [
  [...Object.keys(types)]
    .filter(key => !keysToIgnore.includes(key))
    .map(
      key =>
        baseDataTypeAliasMap[key]
          ? generateTypeReferenceDeclaration(key, baseDataTypeAliasMap[key])
          : generateDefaultStringTypeDeclaration(key),
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
  // TODO
  // filter our circular refs - DONE
  // filter out unparseable syntaxes - DONE
  // filter out syntaxes with missing data references - DONE

  // figure out how to prefix syntax types to prevent name clashes with properties - DONE
  // figure out how to keep types like `color` in, which require functions etc.
  // faciliate generation of combined keywords if a syntax is only made up of keywords and data types which contain only keywords
  const { availableTypes = [], typeSuffix = '' } = options;
  const withoutCircular = removeCircularAndUnsupportedGrammar(sourceObject);
  const withoutInvalidReferences = removeInvalidDataTypeReferences(
    withoutCircular,
    availableTypes,
  );

  const typeDeclarations = Object.keys(withoutInvalidReferences).reduce(
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
  );

  return {
    typeDeclarations,
    typeKeys: Object.keys(withoutInvalidReferences),
  };
};
