import { lexValueDeclarationGrammar } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { convertRawTokensToComponents } from './utils/convertRawTokensToComponents';
import { generateTypeCombinations } from './utils/generateTypeCombinations';
import { groupTokensByCombinatorPredence } from './utils/groupTokensByCombinatorPredence';

const { emittedTokens } = lexValueDeclarationGrammar(
  '[ [block | inline | run-in] || [flow | flow-root | table | flex | grid | ruby] ] | [[block | inline | run-in]? && [ flow | flow-root ]? && list-item] | [table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container] | [contents | none] | [inline-block | inline-list-item | inline-table | inline-flex | inline-grid]',
  // '[ [ left | center | right | top | bottom ] | [ left | center | right ] [ top | center | bottom ] | [ center | [ left | right ] PERCENTAGEPLACEHOLDER ] && [ center | [ top | bottom ] PERCENTAGEPLACEHOLDER] ]',
);

const result = generateTypeCombinations(
  groupTokensByCombinatorPredence(convertRawTokensToComponents(emittedTokens)),
);

console.log(new Set(result[0]));

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
