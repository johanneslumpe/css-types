import * as fs from 'fs';
import { map } from 'lodash/fp';
import * as path from 'path';
import ts from 'typescript';
import * as util from 'util';
import { TYPES_BUILD_DIR } from './constants';

export function generateIndex(filenames: string[]) {
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
  });

  const indexSource = ts.createSourceFile(
    'index.ts',
    '',
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS,
  );
  const exportDeclarations = map(
    filename =>
      ts.createExportDeclaration(
        [],
        [],
        undefined,
        ts.createStringLiteral(filename),
      ),
    filenames,
  );

  // const export
  const updatedSource = ts.updateSourceFileNode(
    indexSource,
    exportDeclarations,
  );

  const writeFile = util.promisify(fs.writeFile);
  return writeFile(
    path.join(__dirname, TYPES_BUILD_DIR, indexSource.fileName),
    printer.printFile(updatedSource),
  );
}
