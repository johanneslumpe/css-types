import ts from 'typescript';

import { generateUnitvalueInterface } from './generateUnitvalueInterface';
export function createBrandedTypeInterfaceForUnit(
  unit: string,
  name: string,
  brandKey?: string,
) {
  return ts.createInterfaceDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.createIdentifier(generateUnitvalueInterface(name)),
    [],
    [
      ts.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.createExpressionWithTypeArguments([], ts.createIdentifier('String')),
      ]),
    ],
    [
      ts.createPropertySignature(
        [],
        `__${brandKey || unit}_brand_type__`,
        undefined,
        ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
        undefined,
      ),
    ],
  );
}
