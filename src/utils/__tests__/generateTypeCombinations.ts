import {
  ICssCombinatorTokenType,
  ICssMultiplierTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { createCombinatorGroup } from '../createCombinatorGroup';
import { createComponent } from '../createComponent';
import { createComponentGroup } from '../createComponentGroup';
import { generateTypeCombinations } from '../generateTypeCombinations';
import { keywordToken, multiplierToken } from './utils/tokens';
import { createVoidComponent } from '../createVoidComponent';
import * as util from 'util';

describe('generateTypeCombinations', () => {
  it('single keyword', () => {
    // a
    const a = createComponent(keywordToken('a'));
    const result = generateTypeCombinations([a]);

    expect(result).toEqual([a]);
  });

  it('single bar with two keywords', () => {
    // a | b
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [a, b]),
    ]);

    expect(result).toEqual([[a, b]]);
  });

  it('juxtaposition with two keywords', () => {
    // a b
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [a, b]),
    ]);

    expect(result).toEqual([[[a, b]]]);
  });

  it('double ampersand with two keywords', () => {
    // a && b
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_AMPERSAND, [a, b]),
    ]);

    expect(result).toEqual([[[a, b]]]);
  });

  it('double bar with two keywords', () => {
    // a || b
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_BAR, [a, b]),
    ]);

    const voidComp = createVoidComponent();
    expect(result).toEqual([[[voidComp, b], [a, voidComp], [a, b]]]);
  });

  it('double bar with two keyword and optional group', () => {
    // a || [b]?
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_BAR, [
        a,
        createComponentGroup(
          [b],
          multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
        ),
      ]),
    ]);
    const voidComp = createVoidComponent();
    expect(result).toEqual([[[voidComp, b], [a, voidComp], [a, b]]]);
  });

  it.skip('juxtapostion with keyword and group with two keywords and double bar', () => {
    // a [b || c]
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const c = createComponent(keywordToken('c'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
        a,
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_BAR, [b, c]),
        ]),
      ]),
    ]);
    const voidComp = createVoidComponent();
    expect(result).toEqual([[[a, b, voidComp], [a, voidComp, c], [a, b, c]]]);
  });

  it('single bar with keyword and a group with juxtaposed keywords', () => {
    // a | [ b c ]
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const c = createComponent(keywordToken('c'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
        a,
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [b, c]),
        ]),
      ]),
    ]);

    expect(result).toEqual([[a, [b, c]]]);
  });

  it('juxtaposition with keyword and group with single bar and keywords', () => {
    // a [ b | c ]
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const c = createComponent(keywordToken('c'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
        a,
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [b, c]),
        ]),
      ]),
    ]);

    expect(result).toEqual([[[a, b], [a, c]]]);
  });

  it('single bar with keyword and group with single bar and keywords', () => {
    // a | [ b | c ]
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const c = createComponent(keywordToken('c'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
        a,
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [b, c]),
        ]),
      ]),
    ]);

    expect(result).toEqual([[a, b, c]]);
  });

  it('two juxtaposed groups with single bars and keywords', () => {
    // [atest | btest] [ctest | dtest]
    const a = createComponent(keywordToken('atest'));
    const b = createComponent(keywordToken('btest'));
    const c = createComponent(keywordToken('ctest'));
    const d = createComponent(keywordToken('dtest'));

    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
            createComponent(keywordToken('atest')),
            createComponent(keywordToken('btest')),
          ]),
        ]),
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
            createComponent(keywordToken('ctest')),
            createComponent(keywordToken('dtest')),
          ]),
        ]),
      ]),
    ]);

    expect(result).toEqual([[[a, c], [a, d], [b, c], [b, d]]]);
  });

  it('two juxtaposed groups with question mark multiplier', () => {
    // [a]? [b]?
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));

    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
        createComponentGroup(
          [a],
          multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
        ),
        createComponentGroup(
          [b],
          multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
        ),
      ]),
    ]);

    const voidComp = createVoidComponent();
    expect(result).toEqual([
      [[voidComp, voidComp], [voidComp, b], [a, voidComp], [a, b]],
    ]);
  });

  // it.only('test', () => {
  //   // a b [ c d{1,2} | e ]? f
  //   const a = createComponent(keywordToken('a'));
  //   const b = createComponent(keywordToken('b'));
  //   const c = createComponent(keywordToken('c'));
  //   const d = createComponent(
  //     keywordToken('d'),
  //     multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{1,2}'),
  //   );
  //   const e = createComponent(keywordToken('e'));
  //   const f = createComponent(keywordToken('f'));

  //   const result = generateTypeCombinations([
  //     createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
  //       a,
  //       b,
  //       createComponentGroup(
  //         [
  //           createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
  //             createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
  //               c,
  //               d,
  //             ]),
  //             e,
  //           ]),
  //         ],
  //         multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
  //       ),
  //       f,
  //     ]),
  //   ]);

  //   console.log(util.inspect(result, false, Infinity));
  // });

  it('single bar delimited keywords and group with juxtaposed keywords', () => {
    // a | b | c | [ d? e ]
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const c = createComponent(keywordToken('c'));
    const d = createComponent(
      keywordToken('d'),
      multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
    );
    const e = createComponent(keywordToken('e'));

    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
        a,
        b,
        c,
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [d, e]),
        ]),
      ]),
    ]);
    // console.log(
    //   util.inspect(
    //     [
    //       createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
    //         a,
    //         b,
    //         c,
    //         createComponentGroup([
    //           createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
    //             d,
    //             e,
    //           ]),
    //         ]),
    //       ]),
    //     ],
    //     false,
    //     Infinity,
    //   ),
    // );
    // console.log(result);
    expect(result).toEqual([[a, b, c, [createVoidComponent(), e], [d, e]]]);
  });
});
