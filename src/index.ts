import { writeFileSync } from 'fs';
import * as fs from 'fs';
import properties from 'mdn-data/css/properties.json';
import syntaxes from 'mdn-data/css/syntaxes.json';
import * as path from 'path';
import rimraf from 'rimraf';
import ts from 'typescript';

import { TYPES_BUILD_DIR } from './constants';
import {
  generateBaseDataTypes,
  generateTypesFromMdnData,
} from './generateTypesFromMdnData';
import {
  generateCombinedLengthType,
  generateUnitTypesSourceFiles,
} from './generateUnitTypeSourceFiles';

// create directory to store out types in
const outputDir = path.join(__dirname, TYPES_BUILD_DIR);
rimraf.sync(outputDir);
fs.mkdirSync(outputDir);

const isSelectorKey = (key: string) => key.includes('selector');

// generate sources
const baseTypes = generateBaseDataTypes([
  // ignore types which clash with custom added types
  'length',
  // ignore types which have been aliased
  'integer',
  // ignore all properties annd syntaxes
  ...Object.keys(syntaxes),
  ...Object.keys(properties).filter(x => x !== 'flex'),
]);
const syntaxTypes = generateTypesFromMdnData(syntaxes, {
  blacklistPredicate: isSelectorKey,
});
const propertyTypes = generateTypesFromMdnData(properties, {
  availableTypes: syntaxTypes.typeKeys,
  blacklistPredicate: (key: string) => {
    if (isSelectorKey(key) || key.startsWith('media') || key === 'image') {
      return false;
    }

    return properties[key].status !== 'standard';
  },
  typeSuffix: 'Property',
});
const sourceFiles = generateUnitTypesSourceFiles();
const typesSource = ts.updateSourceFileNode(
  ts.createSourceFile(
    'generatedTypes.ts',
    '',
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS,
  ),
  [...generateCombinedLengthType()].concat(
    ...baseTypes,
    ...syntaxTypes.typeDeclarations,
    ...propertyTypes.typeDeclarations,
  ),
);

// print files
const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
});

[...sourceFiles, typesSource].forEach(sourceFile => {
  writeFileSync(
    path.join(__dirname, TYPES_BUILD_DIR, sourceFile.fileName),
    printer.printFile(sourceFile),
  );
});

// TODO
// DONE - collapse nested tuples with same length into tuples with unions
// - handle special types like `string`, `number`, `percentage`, `length-percentage`, `length`, `flex`, etc.
// - clean up type `generateTypeCombinations`
// - handle single data-type with curly braces multiplier. doesn't seem to be repeated?!
// generate helper functiosn to generate union, tuple etc arrays

// const grammar = '<length> | <percentage>';
// console.log('parsing grammar:', grammar);
// const { emittedTokens } = lexValueDeclarationGrammar(grammar);
// const components = convertRawTokensToComponents(emittedTokens);
// const result = generateTypeCombinations(
//   groupTokensByCombinatorPredence(components),
// );
// console.log(util.inspect(result, false, Infinity));

// const { emittedTokens } = lexValueDeclarationGrammar(
// grammar,
// '[ [ left | center | right | top | bottom ] | [ left | center | right ] [ top | center | bottom ] | [ center | [ left | right ] <percent> ] && [ center | [ top | bottom ] <percent>] ]',
// 'normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]',
// );
// const components = convertRawTokensToComponents(emittedTokens);

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
// console.log(
//   util.inspect(groupTokensByCombinatorPredence(components), false, Infinity),
// );

// const result = generateTypeCombinations(
//   groupTokensByCombinatorPredence(components),
// );

// function isComponentArray(arr: INestedComponentArray): arr is IComponent[] {
//   return arr.every(i => !Array.isArray(i));
// }
// const value = result[0];
// if (Array.isArray(value)) {
//   const types = ts.createTypeAliasDeclaration(
//     [],
//     [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
//     'TestType',
//     [],
//     generateTypes(value),
//   );

// const typesSrc = ts.createSourceFile(
//   `dummyTypes.ts`,
//   '',
//   ts.ScriptTarget.ESNext,
//   false,
//   ts.ScriptKind.TS,
// );
// const printer = ts.createPrinter({
//   newLine: ts.NewLineKind.LineFeed,
// });
// // console.log(util.inspect(types, false, Infinity));
// writeFileSync(
//   path.join(__dirname, typesSrc.fileName),
//   printer.printFile(ts.updateSourceFileNode(typesSrc, [types])),
// );
// const combined = value.reduce(
//   (acc, item) => {
//     if (Array.isArray(item)) {
//       if (isComponentArray(item)) {
//         acc.push(item.reduce((a, i) => `${a} ${i.value}`.trim(), ''));
//       } else {
//         console.log(item);
//       }
//     } else {
//       acc.push(item.value);
//     }
//     return acc;
//   },
//   [] as string[],
// );

// console.log(combined);
// }
// console.log(util.inspect(result[0], false, Infinity));

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
