import {
  ICssCombinatorTokenType,
  ICssMultiplierTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { createCombinatorGroup } from '../createCombinatorGroup';
import { createComponent } from '../createComponent';
import { createComponentGroup } from '../createComponentGroup';
import {
  createTupleArray,
  createUnionArray,
} from '../createdTypeNestedComponentArrays';
import { createVoidComponent } from '../createVoidComponent';
import { generateTypeCombinations } from '../generateTypeCombinations';
import { dataTypeToken, keywordToken, multiplierToken } from '../stubTokens';

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
    expect(result).toEqual([createUnionArray([a, b])]);
  });

  it('juxtaposition with two keywords', () => {
    // a b
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [a, b]),
    ]);
    expect(result).toEqual([createUnionArray([createTupleArray([a, b])])]);
  });

  it('double ampersand with two keywords', () => {
    // a && b
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_AMPERSAND, [a, b]),
    ]);
    expect(result).toEqual([createUnionArray([createTupleArray([a, b])])]);
  });

  it('double bar with two keywords', () => {
    // a || b
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_BAR, [a, b]),
    ]);

    const voidComp = createVoidComponent();

    expect(result).toEqual([
      createUnionArray([
        createTupleArray([voidComp, b]),
        createTupleArray([a, voidComp]),
        createTupleArray([a, b]),
      ]),
    ]);
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
    expect(result).toEqual([
      createUnionArray([
        createTupleArray([voidComp, b]),
        createTupleArray([a, voidComp]),
        createTupleArray([a, b]),
      ]),
    ]);
  });

  it('juxtapostion with keyword and group with two keywords and double bar', () => {
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
    expect(result).toEqual([
      createUnionArray([
        createTupleArray([a, createTupleArray([voidComp, c])]),
        createTupleArray([a, createTupleArray([b, voidComp])]),
        createTupleArray([a, createTupleArray([b, c])]),
      ]),
    ]);
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
    expect(result).toEqual([createUnionArray([a, createTupleArray([b, c])])]);
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
    expect(result).toEqual([
      createUnionArray([createTupleArray([a, b]), createTupleArray([a, c])]),
    ]);
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
    expect(result).toEqual([createUnionArray([a, b, c])]);
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
    expect(result).toEqual([
      createUnionArray([
        createTupleArray([a, c]),
        createTupleArray([a, d]),
        createTupleArray([b, c]),
        createTupleArray([b, d]),
      ]),
    ]);
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
      createUnionArray([
        createTupleArray([voidComp, voidComp]),
        createTupleArray([voidComp, b]),
        createTupleArray([a, voidComp]),
        createTupleArray([a, b]),
      ]),
    ]);
  });

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

    expect(result).toEqual([
      createUnionArray([
        a,
        b,
        c,
        createTupleArray([createVoidComponent(), e]),
        createTupleArray([d, e]),
      ]),
    ]);
  });

  it('single datatype with multiplier', () => {
    // a{1,3}
    const a = createComponent(
      dataTypeToken('a'),
      multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{1,3}'),
    );
    const result = generateTypeCombinations([a]);
    expect(result).toEqual([
      createUnionArray([
        createTupleArray([a]),
        createTupleArray([a, a]),
        createTupleArray([a, a, a]),
      ]),
    ]);
  });

  it('multiplied keyword with optional keyword', () => {
    // a{1,2} && b?
    const a = createComponent(
      keywordToken('a'),
      multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{1,2}'),
    );
    const b = createComponent(
      keywordToken('b'),
      multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
    );

    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_AMPERSAND, [a, b]),
    ]);

    expect(result).toEqual([
      createUnionArray([
        createTupleArray([createTupleArray([a]), createVoidComponent()]),
        createTupleArray([createTupleArray([a]), b]),
        createTupleArray([createTupleArray([a, a]), createVoidComponent()]),
        createTupleArray([createTupleArray([a, a]), b]),
      ]),
    ]);
  });
});
