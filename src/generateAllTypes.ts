import * as fs from 'fs';
import { find, map, mapValues, reject, some } from 'lodash/fp';
import properties from 'mdn-data/css/properties.json';
import syntaxes from 'mdn-data/css/syntaxes.json';
import * as path from 'path';
import rimraf from 'rimraf';
import ts from 'typescript';
import * as util from 'util';

import {
  CSS_TYPES_FILE,
  GLOBAL_KEYWORDS,
  GLOBAL_KEYWORDS_DATA_TYPE,
  LENGTH_TYPE_NAME,
  TYPES_BUILD_DIR,
} from './constants';
import { customSyntaxes } from './customSyntaxes';
import {
  generateBaseDataTypes,
  generateTypesFromRawSyntaxes,
} from './generateTypesFromRawSyntaxes';
import {
  generateCombinedLengthType,
  generateUnitTypesSourceFiles,
} from './generateUnitTypeSourceFiles';
import { generateUnitValueInterface } from './utils/generateUnitValueInterface';
import { parseRawSyntaxes } from './utils/parseRawSyntaxes';

export async function generateAllTypes() {
  const outputDir = path.join(__dirname, TYPES_BUILD_DIR);
  await util.promisify(rimraf)(outputDir);
  await util.promisify(fs.mkdir)(outputDir);

  const isSelectorKey = (key: string) => key.includes('selector');

  // generate sources
  const {
    unitTypes,
    sourceFiles: unitSourceFiles,
  } = generateUnitTypesSourceFiles();

  // custom types to prevent invalid references
  // after removing function types
  const parsedCustomSyntaxes = parseRawSyntaxes(customSyntaxes);
  const customTypes = generateTypesFromRawSyntaxes(parsedCustomSyntaxes, {
    availableTypes: [
      ...map(unitType => generateUnitValueInterface(unitType.name), unitTypes),
      's-value',
      'x-value',
    ],
    lookupFn: () => undefined,
  });

  const baseTypes = generateBaseDataTypes([
    // ignore types which clash with custom added types
    LENGTH_TYPE_NAME.toLowerCase(),
    ...Object.keys(customSyntaxes),
    // ignore all properties and syntaxes
    ...Object.keys(syntaxes),
    ...Object.keys(properties),
  ]);

  const parsedSyntaxes = parseRawSyntaxes(syntaxes);
  const syntaxTypes = generateTypesFromRawSyntaxes(parsedSyntaxes, {
    blacklistPredicate: isSelectorKey,
    lookupFn: key => {
      // hacky solution to prevent inlining of number data type
      if (key === 'number') {
        return undefined;
      }
      return parsedCustomSyntaxes[key] || parsedSyntaxes[key];
    },
  });

  const parsedPropertySyntaxes = parseRawSyntaxes(
    mapValues(
      rawSyntax => ({
        ...rawSyntax,
        syntax: `<${GLOBAL_KEYWORDS_DATA_TYPE}> | ${rawSyntax.syntax}`,
      }),
      properties,
    ),
  );
  const propertyTypes = generateTypesFromRawSyntaxes(parsedPropertySyntaxes, {
    availableTypes: [...customTypes.typeKeys, ...syntaxTypes.typeKeys],
    blacklistPredicate: (key: string) => {
      if (isSelectorKey(key) || key.startsWith('media') || key === 'image') {
        return false;
      }

      return (
        properties[key].status !== 'standard' ||
        !!find(key, Object.keys(customSyntaxes))
      );
    },
    lookupFn: key => {
      // hacky solution to prevent inlining of number data type
      if (key === 'number') {
        return undefined;
      }
      return (
        parsedCustomSyntaxes[key] ||
        parsedPropertySyntaxes[key] ||
        parsedSyntaxes[key]
      );
    },
    // We are prependig global keywords to every property syntax, resulting in
    // those values being picked up when generating combined permutations,
    // which we then have to strip out.
    postprocessCombinedTypes: types =>
      reject(
        combinedType =>
          !GLOBAL_KEYWORDS.includes(combinedType) &&
          some(keyword => combinedType.includes(keyword), GLOBAL_KEYWORDS),
        types,
      ),
    typeSuffix: 'Property',
  });

  const typesOutputSource = ts.updateSourceFileNode(
    ts.createSourceFile(
      CSS_TYPES_FILE,
      '',
      ts.ScriptTarget.ESNext,
      false,
      ts.ScriptKind.TS,
    ),
    [...generateCombinedLengthType()].concat(
      ...baseTypes,
      ...customTypes.typeDeclarations,
      ...syntaxTypes.typeDeclarations,
      ...propertyTypes.typeDeclarations,
    ),
  );

  // print files
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
  });

  const writeFile = util.promisify(fs.writeFile);
  return Promise.all(
    map(
      sourceFile =>
        writeFile(
          path.join(__dirname, TYPES_BUILD_DIR, sourceFile.fileName),
          printer.printFile(sourceFile),
        ),
      [...unitSourceFiles, typesOutputSource],
    ),
  );
}
