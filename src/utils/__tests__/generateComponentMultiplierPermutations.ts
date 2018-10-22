import { ICssMultiplierTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { createComponent } from '../createComponent';
import { createVoidComponent } from '../createVoidComponent';
import { generateComponentMultiplierPermutations } from '../generateComponentMultiplierPermutations';
import { keywordToken, multiplierToken } from './utils/tokens';

describe('generateComponentMultiplierPermutations', () => {
  const voidComponent = createVoidComponent();

  it('should generate permutations for no multipliers', () => {
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));

    const result = generateComponentMultiplierPermutations([a, b]);

    expect(result).toEqual([[a, b]]);
  });

  it('should generate permutations for question mark multiplier with single component', () => {
    const a = createComponent(
      keywordToken('a'),
      multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
    );
    const result = generateComponentMultiplierPermutations([a]);

    expect(result).toEqual([[voidComponent], [a]]);
  });

  it('should generate permutations for question mark multiplier with multiple components', () => {
    const a = createComponent(
      keywordToken('a'),
      multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
    );
    const b = createComponent(keywordToken('b'));
    const result = generateComponentMultiplierPermutations([a, b]);

    expect(result).toEqual([[b], [a, b]]);
  });

  it('should generate permutations for multiple question mark multipliers', () => {
    const a = createComponent(
      keywordToken('a'),
      multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
    );
    const b = createComponent(
      keywordToken('b'),
      multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
    );
    const result = generateComponentMultiplierPermutations([a, b]);
    expect(result).toEqual([[voidComponent], [b], [a, voidComponent], [a, b]]);
  });

  it('should generate permutations for curly braces multipliers', () => {
    const a = createComponent(
      keywordToken('a'),
      multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{1,2}'),
    );
    const b = createComponent(keywordToken('b'));
    const result = generateComponentMultiplierPermutations([a, b]);
    expect(result).toEqual([[a, b], [a, a, b]]);
  });

  it('should generate permutations for mixed question mark and curly braces multipliers', () => {
    const a = createComponent(
      keywordToken('a'),
      multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{2,4}'),
    );
    const b = createComponent(
      keywordToken('b'),
      multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
    );
    const result = generateComponentMultiplierPermutations([a, b]);
    expect(result).toEqual([
      [a, a, voidComponent],
      [a, a, b],
      [a, a, a, voidComponent],
      [a, a, a, b],
      [a, a, a, a, voidComponent],
      [a, a, a, a, b],
    ]);
  });

  it('should throw for curly brace multipliers with no upper bound ', () => {
    const a = createComponent(
      keywordToken('a'),
      multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{1,}'),
    );
    expect(() => generateComponentMultiplierPermutations([a])).toThrow();
  });
});
