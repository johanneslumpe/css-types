import ts from 'typescript';

export function createBrandedTypeInterfaceForUnit(
  unit: string,
  name: string,
  brandKey?: string,
) {
  return ts.createInterfaceDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.createIdentifier(
      `I${name.substr(0, 1).toUpperCase()}${name.substr(1)}Value`,
    ),
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
