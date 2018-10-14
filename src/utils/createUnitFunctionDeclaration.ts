import ts from 'typescript';

export function createUnitFunctionDeclaration(
  typeInterface: ts.InterfaceDeclaration,
  unit: string,
  name: string,
): ts.FunctionDeclaration {
  const parameterName = 'value';
  return ts.createFunctionDeclaration(
    [],
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    undefined,
    name.toLowerCase(),
    [],
    [
      ts.createParameter(
        [],
        [],
        undefined,
        parameterName,
        undefined,
        ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
      ),
    ],
    ts.createTypeReferenceNode(typeInterface.name, []),
    ts.createBlock([
      ts.createReturn(
        ts.createAsExpression(
          ts.createTemplateExpression(ts.createTemplateHead(''), [
            ts.createTemplateSpan(
              ts.createIdentifier(parameterName),
              ts.createTemplateTail(unit),
            ),
          ]),
          ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
        ),
      ),
    ]),
  );
}
