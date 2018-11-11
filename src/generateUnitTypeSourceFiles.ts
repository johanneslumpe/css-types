import { flatten, map } from 'lodash/fp';
import { CSSUnitGroups } from 'mdn-data';
import ts from 'typescript';

import { createBrandedTypeInterfaceForUnit } from './utils/createBrandedTypeInterfaceForUnit';
import { createUnitFunctionDeclaration } from './utils/createUnitFunctionDeclaration';
import { generateTypeName } from './utils/generateTypeName';
import { getUnits, lengthValueTags } from './utils/getUnits';

const UNIT_TYPES_FILE = 'unitTypes.ts';
const UNIT_UTILS_FILE = 'unitUtils.ts';

const getUnitsWithAdditionalTypes = (tagFilterArray?: CSSUnitGroups[]) => [
  ...getUnits(tagFilterArray),
  {
    brandKey: 'percentage',
    name: 'Percentage',
    unit: '%',
  },
];

export const generateUnitInterfaces = (
  withAdditionalTypes: boolean,
  tagFilterArray?: CSSUnitGroups[],
) =>
  flatten(
    map(
      unit =>
        createBrandedTypeInterfaceForUnit(unit.unit, unit.name, unit.brandKey),
      withAdditionalTypes
        ? getUnitsWithAdditionalTypes(tagFilterArray)
        : getUnits(tagFilterArray),
    ),
  );

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
    ts.createStringLiteral(`./${UNIT_TYPES_FILE}`),
  );

export const generateUnitTypesSourceFiles = () => {
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
  // native map because lodash/fp does not give us access to the index property
  const unitUtils = getUnitsWithAdditionalTypes().map((unit, index) =>
    createUnitFunctionDeclaration(interfaces[index], unit.unit, unit.name),
  );

  return [
    ts.updateSourceFileNode(utilsSrc, [typesImportDeclaration, ...unitUtils]),
    ts.updateSourceFileNode(typesSrc, interfaces),
  ];
};

export const generateCombinedLengthType = () => {
  const interfaces = generateUnitInterfaces(false, lengthValueTags);
  const importStatement = generateUnitTypesImportStatement(
    generateUnitInterfaces(true),
  );

  const types = [
    {
      name: 'length',
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
