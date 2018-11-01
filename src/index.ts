import { compact, flatten } from 'lodash';

import {
  ICssTokenType,
  lexValueDeclarationGrammar,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { convertRawTokensToComponents } from './utils/convertRawTokensToComponents';
import { generateTypeCombinations } from './utils/generateTypeCombinations';
import { groupTokensByCombinatorPredence } from './utils/groupTokensByCombinatorPredence';

import { writeFileSync } from 'fs';
import * as path from 'path';
import ts from 'typescript';
import * as util from 'util';

import { INestedComponentArray, IComponent, ComponentTypes } from './types';

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

const generateTypes = (data: INestedComponentArray, level: number = 0): any => {
  if (level === 0) {
    return ts.createTypeAliasDeclaration(
      [],
      [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
      'TestType',
      [],
      ts.createUnionTypeNode(
        compact(
          data.map(item => {
            if (Array.isArray(item)) {
              return generateTypes(item, level + 1);
            }
            return ts.createLiteralTypeNode(ts.createStringLiteral(item.value));
          }),
        ),
      ),
    );
  } else if (level === 1) {
    return ts.createTupleTypeNode(
      compact(
        flatten(
          data.map(item =>
            generateTypes(Array.isArray(item) ? item : [item], level + 1),
          ),
        ),
      ),
    );
  } else if (level === 2) {
    const first = data[0];
    const generateTsNode = (component: IComponent) =>
      component.type === ICssTokenType.KEYWORD
        ? ts.createStringLiteral(component.value)
        : ts.createTypeReferenceNode(component.value, []);

    return data.length === 1 && !Array.isArray(first)
      ? generateTsNode(first)
      : compact(
          data.map(
            item => (Array.isArray(item) ? undefined : generateTsNode(item)),
          ),
        );
  }
};

// const generateTypes = (data: INestedComponentArray, level: number = 0): any => {
//   if (level === 0) {
//     return {
//       type: 'union',
//       values: data.map(item => {
//         if (Array.isArray(item)) {
//           return generateTypes(item, level + 1);
//         }
//         return item;
//       }),
//     };
//   } else if (level === 1) {
//     return {
//       type: 'tuple',
//       values: flatten(
//         data.map(item =>
//           generateTypes(Array.isArray(item) ? item : [item], level + 1),
//         ),
//       ),
//     };
//   } else if (level === 2) {
//     return data.length === 1 ? data : { type: 'union', values: data };
//   }
// };

let grammar =
  '[ [block | inline | run-in] || [flow | flow-root | table | flex | grid | ruby] ] | [[block | inline | run-in]? && [ flow | flow-root ]? && list-item] | [table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container] | [contents | none] | [inline-block | inline-list-item | inline-table | inline-flex | inline-grid]';

grammar = '[[block | inline | run-in]? && [ flow | flow-root ]? && list-item]';
console.log('parsing grammar:', grammar);
const { emittedTokens } = lexValueDeclarationGrammar(
  grammar,
  // '[ [ left | center | right | top | bottom ] | [ left | center | right ] [ top | center | bottom ] | [ center | [ left | right ] <percent> ] && [ center | [ top | bottom ] <percent>] ]',
  // 'normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]',
);

const components = convertRawTokensToComponents(emittedTokens);

// const hasOnlyKeywords = components.every(component => {
//   return (
//     component.type === ICssTokenType.COMBINATOR ||
//     component.type === ICssTokenType.KEYWORD ||
//     component.type === ICssTokenType.GROUP
//   );
// });
// if (hasOnlyKeywords) {
//   console.log('ONLY KEYWORDS!');
// }
console.log(
  util.inspect(groupTokensByCombinatorPredence(components), false, Infinity),
);
const result = generateTypeCombinations(
  groupTokensByCombinatorPredence(components),
);

function isComponentArray(arr: INestedComponentArray): arr is IComponent[] {
  return arr.every(i => !Array.isArray(i));
}
// console.log(result[0]);
const value = result[0];
if (Array.isArray(value)) {
  const combined = value.reduce(
    (acc, item) => {
      if (Array.isArray(item)) {
        if (isComponentArray(item)) {
          acc.push(item.reduce((a, i) => `${a} ${i.value}`.trim(), ''));
        } else {
          console.log(item);
        }
      } else {
        acc.push(item.value);
      }
      return acc;
    },
    [] as string[],
  );

  // console.log(combined);
}
console.log(util.inspect(result[0], false, Infinity));

// const value = result[0];
// if (Array.isArray(value)) {
//   const typesSrc = ts.createSourceFile(
//     `dummyTypes.ts`,
//     '',
//     ts.ScriptTarget.ESNext,
//     false,
//     ts.ScriptKind.TS,
//   );
//   const printer = ts.createPrinter({
//     newLine: ts.NewLineKind.LineFeed,
//   });
//   const types = generateTypes(value);

//   // console.log(util.inspect(types, false, Infinity));
//   writeFileSync(
//     path.join(__dirname, typesSrc.fileName),
//     printer.printFile(ts.updateSourceFileNode(typesSrc, [types])),
//   );
// }

// if (alltokens are keywords && no-multipliers || only finite multipliers) {
//   generate all permutations as strings
// } else if (allTokens are keywords or data types && no-multipliers || only finite multipliers) {
//   if (all data-types contain only keywords) {
//     generate all permutations as strings
//   }
// } else {
//   generate all permutations as tuples
// }
//

// KEEP EVERYTHING AS LISTS UNTIL FINAL TYPE GENERATION
// PROCESS MULTIPLIERS WITHIN `generatePermutations` (generate additional arrays based on multipliers)
// DURING TYPE GENERATION, TRY TO GENERATE COMBINED KEYWORDS IF VALUE IS LIST OF ONLY KEYWORDS (think about inlining data types)
// COMBINE ARRAYS WITH THE SAME STARTING VALUE AND THE SAME LENGTH INTO UNION?!

// console.log(util.inspect(generateTypes([result[0]]), false, Infinity));
// console.log(new Set(result[0]));

// [
//   [ left | center | right | top | bottom ] |
//   [ left | center | right ] [ top | center | bottom ] |
//   [ center | [ left | right ] PERCENTAGEPLACEHOLDER ] && [ center | [ top | bottom ] PERCENTAGEPLACEHOLDER]
// ],

// implement `||` combinator and finite multipliers

// 1) do not join permutations, keep arrays in `generatePermutations`
// 2) Do not flatten `generateTypeCombinations` result for combinators
// 3) each tuple which has different elements, which cannot be combined with some other tuple of the same length, must be defined as its own type for TypeScript to understand that properties are incompatible

// 'left',
// 'center',
// 'right',
// 'top',
// 'bottom',

// [ 'left', 'top' ],
// [ 'left', 'center' ],
// [ 'left', 'bottom' ],
// [ 'center', 'top' ],
// [ 'center', 'center' ],
// [ 'center', 'bottom' ],
// [ 'right', 'top' ],
// [ 'right', 'center' ],
// [ 'right', 'bottom' ],
// [ 'center', 'center' ],

// [ 'center', [ 'top', 'PERCENTAGEPLACEHOLDER' ] ],
// [ 'center', [ 'bottom', 'PERCENTAGEPLACEHOLDER' ] ],

// [ [ 'left', 'PERCENTAGEPLACEHOLDER' ], 'center' ],
// [ [ 'right', 'PERCENTAGEPLACEHOLDER' ], 'center' ],

// [ [ 'left', 'PERCENTAGEPLACEHOLDER' ], [ 'top', 'PERCENTAGEPLACEHOLDER' ] ],
// [ [ 'left', 'PERCENTAGEPLACEHOLDER' ], [ 'bottom', 'PERCENTAGEPLACEHOLDER' ] ],
// [ [ 'right', 'PERCENTAGEPLACEHOLDER' ], [ 'top', 'PERCENTAGEPLACEHOLDER' ] ],
// [ [ 'right', 'PERCENTAGEPLACEHOLDER' ], [ 'bottom', 'PERCENTAGEPLACEHOLDER' ] ]
