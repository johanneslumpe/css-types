import { ICssCombinatorTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { createCombinatorGroup } from '../createCombinatorGroup';
import { createComponent } from '../createComponent';
import { createComponentGroup } from '../createComponentGroup';
import { generateTypeCombinations } from '../generateTypeCombinations';
import { keywordToken } from './utils/tokens';

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
});
