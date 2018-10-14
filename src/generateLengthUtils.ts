import { writeFileSync } from 'fs';
import { flatten } from 'lodash/fp';
import * as path from 'path';
import ts from 'typescript';

import { createBrandedTypeInterfaceForUnit } from './utils/createBrandedTypeInterfaceForUnit';
import { createUnitFunctionDeclaration } from './utils/createUnitFunctionDeclaration';
import { getLengthUnits } from './utils/getLengthUnits';

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
});

const utilsSrc = ts.createSourceFile(
  `cssLengthUtils.ts`,
  '',
  ts.ScriptTarget.ESNext,
  false,
  ts.ScriptKind.TS,
);

const typesSrc = ts.createSourceFile(
  `cssLengthTypes.ts`,
  '',
  ts.ScriptTarget.ESNext,
  false,
  ts.ScriptKind.TS,
);

const interfaces = flatten(
  getLengthUnits().map(unit =>
    createBrandedTypeInterfaceForUnit(unit.unit, unit.name),
  ),
);

const typesImportDeclaration = ts.createImportDeclaration(
  [],
  [],
  ts.createImportClause(
    undefined,
    ts.createNamedImports(
      interfaces.map(val => ts.createImportSpecifier(undefined, val.name)),
    ),
  ),
  ts.createStringLiteral('./cssLengthTypes'),
);

const lengthUtils = getLengthUnits().map((unit, index) =>
  createUnitFunctionDeclaration(interfaces[index], unit.unit, unit.name),
);

writeFileSync(
  path.join(__dirname, '../src/', typesSrc.fileName),
  printer.printFile(ts.updateSourceFileNode(typesSrc, interfaces)),
);

writeFileSync(
  path.join(__dirname, '../src/', utilsSrc.fileName),
  printer.printFile(
    ts.updateSourceFileNode(utilsSrc, [typesImportDeclaration, ...lengthUtils]),
  ),
);
