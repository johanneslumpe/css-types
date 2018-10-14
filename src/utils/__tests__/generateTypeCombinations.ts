import {
  ICssCombinatorTokenType,
  lexValueDeclarationGrammar,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { convertRawTokensToComponents } from '../convertRawTokensToComponents';
import { createCombinatorGroup } from '../createCombinatorGroup';
import { createComponent } from '../createComponent';
import { createComponentGroup } from '../createComponentGroup';
import { generateTypeCombinations } from '../generateTypeCombinations';
import { groupTokensByCombinatorPredence } from '../groupTokensByCombinatorPredence';
import { keywordToken } from './utils/tokens';

describe('generateTypeCombinations', () => {
  it('single keyword', () => {
    const result = generateTypeCombinations([
      createComponent(keywordToken('a')),
    ]);

    expect(result).toEqual(['a']);
  });

  it('single bar with two keywords', () => {
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
        createComponent(keywordToken('a')),
        createComponent(keywordToken('b')),
      ]),
    ]);

    expect(result).toEqual([['a', 'b']]);
  });

  it('juxtaposition with two keywords', () => {
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
        createComponent(keywordToken('a')),
        createComponent(keywordToken('b')),
      ]),
    ]);

    expect(result).toEqual([['a b']]);
  });

  it('double ampersand with two keywords', () => {
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_AMPERSAND, [
        createComponent(keywordToken('a')),
        createComponent(keywordToken('b')),
      ]),
    ]);

    expect(result).toEqual([['a b']]);
  });

  it('single bar with keyword and a group with juxtaposed keywords', () => {
    // a | [ b c ]
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
        createComponent(keywordToken('a')),
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
            createComponent(keywordToken('b')),
            createComponent(keywordToken('c')),
          ]),
        ]),
      ]),
    ]);

    expect(result).toEqual([['a', 'b c']]);
  });

  it('juxtaposition with keyword and group with single bar and keywords', () => {
    // a [ b | c ]
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
        createComponent(keywordToken('a')),
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
            createComponent(keywordToken('b')),
            createComponent(keywordToken('c')),
          ]),
        ]),
      ]),
    ]);

    expect(result).toEqual([['a b', 'a c']]);
  });

  it('single bar with keyword and group with single bar and keywords', () => {
    // a | [ b | c ]
    const result = generateTypeCombinations([
      createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
        createComponent(keywordToken('a')),
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
            createComponent(keywordToken('b')),
            createComponent(keywordToken('c')),
          ]),
        ]),
      ]),
    ]);

    expect(result).toEqual([['a', 'b', 'c']]);
  });

  it('two juxtaposed groups with single bars and keywords', () => {
    // const result = generateTypeCombinations([
    //   createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
    //     createComponentGroup([
    //       createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
    //         createComponent(keywordToken('atest')),
    //         createComponent(keywordToken('btest')),
    //       ]),
    //     ]),
    //     createComponentGroup([
    //       createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
    //         createComponent(keywordToken('ctest')),
    //         createComponent(keywordToken('dtest')),
    //       ]),
    //     ]),
    //   ]),
    // ]);

    const { emittedTokens } = lexValueDeclarationGrammar(
      '[atest | btest] [ctest | dtest]',
    );

    const result = generateTypeCombinations(
      groupTokensByCombinatorPredence(
        convertRawTokensToComponents(emittedTokens),
      ),
    );

    expect(result).toEqual([
      ['atest ctest', 'atest dtest', 'btest ctest', 'btest dtest'],
    ]);
  });
});
