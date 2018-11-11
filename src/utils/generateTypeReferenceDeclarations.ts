import ts from 'typescript';

import { parenthesesToFunction } from './parenthesesToFunction';
import { typeNameWithSuffix } from './typeNameWithSuffix';

export function generateTypeReferenceDeclaration(
  key: string,
  value: string,
  suffix: string = '',
) {
  return ts.createTypeAliasDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    typeNameWithSuffix(parenthesesToFunction(key), suffix),
    [],
    ts.createTypeReferenceNode(value, []),
  );
}

export function generateDefaultStringTypeDeclaration(
  key: string,
  suffix: string = '',
) {
  return generateTypeReferenceDeclaration(key, 'string', suffix);
}
