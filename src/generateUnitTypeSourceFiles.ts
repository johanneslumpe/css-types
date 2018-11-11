import { flatten, map } from 'lodash/fp';
import { CSSUnitGroups, IUnit } from 'mdn-data';
import ts from 'typescript';

import {
  LENGTH_TYPE_NAME,
  UNIT_TYPES_FILE,
  UNIT_UTILS_FILE,
} from './constants';
import { createBrandedTypeInterfaceForUnit } from './utils/createBrandedTypeInterfaceForUnit';
import { createUnitFunctionDeclaration } from './utils/createUnitFunctionDeclaration';
import { generateTypeName } from './utils/generateTypeName';
import { getUnits, lengthValueTags } from './utils/getUnits';

const getUnitsWithAdditionalTypes = (tagFilterArray?: CSSUnitGroups[]) => [
  ...getUnits(tagFilterArray),
  {
    brandKey: 'percentage',
    name: 'Percentage',
    unit: '%',
  },
];

export function generateUnitInterfaces(
  withAdditionalTypes: boolean,
  tagFilterArray?: CSSUnitGroups[],
) {
  return flatten(
    map(
      unit =>
        createBrandedTypeInterfaceForUnit(unit.unit, unit.name, unit.brandKey),
      withAdditionalTypes
        ? getUnitsWithAdditionalTypes(tagFilterArray)
        : getUnits(tagFilterArray),
    ),
  );
}

export const generateUnitTypesImportStatement = (
  interfaces: ts.InterfaceDeclaration[],
) =>
  ts.createImportDeclaration(
    [],
    [],
    ts.createImportClause(
      undefined,
      ts.createNamedImports(
        map(val => ts.createImportSpecifier(undefined, val.name), interfaces),
      ),
    ),
    ts.createStringLiteral(`./${UNIT_TYPES_FILE.replace('.ts', '')}`),
  );

export function generateUnitTypesSourceFiles() {
  const utilsSrc = ts.createSourceFile(
    UNIT_UTILS_FILE,
    '',
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS,
  );

  const typesSrc = ts.createSourceFile(
    UNIT_TYPES_FILE,
    '',
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS,
  );

  const interfaces = generateUnitInterfaces(true);
  const typesImportDeclaration = generateUnitTypesImportStatement(interfaces);
  const unitTypes = getUnitsWithAdditionalTypes();
  // native map because lodash/fp does not give us access to the index property
  const unitUtils = unitTypes.map((unit, index) =>
    createUnitFunctionDeclaration(interfaces[index], unit.unit, unit.name),
  );

  return {
    sourceFiles: [
      ts.updateSourceFileNode(utilsSrc, [typesImportDeclaration, ...unitUtils]),
      ts.updateSourceFileNode(typesSrc, interfaces),
    ],
    unitTypes,
  };
}

export const generateCombinedLengthType = () => {
  const interfaces = generateUnitInterfaces(false, lengthValueTags);
  const importStatement = generateUnitTypesImportStatement(
    generateUnitInterfaces(true),
  );

  const types = [
    {
      name: LENGTH_TYPE_NAME.toLowerCase(),
      values: interfaces,
    },
  ];
  return [
    importStatement,
    ...map(
      type =>
        ts.createTypeAliasDeclaration(
          [],
          [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
          generateTypeName(type.name),
          [],
          ts.createUnionTypeNode(
            map(i => ts.createTypeReferenceNode(i.name, []), type.values),
          ),
        ),
      types,
    ),
  ];
};
