import { Dictionary } from 'lodash';
import { uniqBy } from 'lodash/fp';
import { camelCase, upperFirst } from 'lodash/fp';
import ts from 'typescript';

// import { IToken } from '../types';

// export function generateUnionTypeAliasesForTokens(
//   snt: Dictionary<IToken[]>,
// ): ts.TypeAliasDeclaration[] {
//   return Object.keys(snt).map(key => {
//     const tokens = snt[key];
//     return ts.createTypeAliasDeclaration(
//       [],
//       [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
//       upperFirst(camelCase(key)),
//       [],
//       ts.createUnionTypeNode(
//         // TODO figure out if this is going to be an issue later with concatenated type values
//         uniqBy(
//           token => `${token.isTypeReference}~${token.trimmedValue}`,
//           tokens,
//         ).map(
//           token =>
//             token.isTypeReference
//               ? ts.createTypeReferenceNode(token.trimmedValue, [])
//               : ts.createLiteralTypeNode(
//                   ts.createStringLiteral(token.trimmedValue),
//                 ),
//         ),
//       ),
//     );
//   });
// }
