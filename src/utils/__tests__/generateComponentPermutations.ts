import { ICssMultiplierTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { createComponent } from '../createComponent';
import { createVoidComponent } from '../createVoidComponent';
import { generateComponentPermutations } from '../generateComponentPermutations';
import { keywordToken, multiplierToken } from '../stubTokens';

describe('generateComponentPermutations', () => {
  const voidComponent = createVoidComponent();

  it('should generate basic permutations for keywords', () => {
    const a = createComponent(keywordToken('a'));
    const b = createComponent(keywordToken('b'));
    const c = createComponent(keywordToken('c'));
    const d = createComponent(keywordToken('d'));

    const result = generateComponentPermutations([[a, b], [c, d]]);
    expect(result).toEqual([[a, c], [a, d], [b, c], [b, d]]);
  });

  describe('permutations for components with finite multipliers', () => {
    describe('keywords', () => {
      it('question mark', () => {
        const a = createComponent(
          keywordToken('a'),
          multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
        );
        const b = createComponent(keywordToken('b'));

        const result = generateComponentPermutations([[a], [b]]);
        expect(result).toEqual([[voidComponent, b], [a, b]]);
      });

      it('curly braces', () => {
        const a = createComponent(keywordToken('a'));
        const b = createComponent(
          keywordToken('b'),
          multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{1,3}'),
        );

        const result = generateComponentPermutations([[a], [b]]);
        expect(result).toEqual([[a, b], [a, b, b], [a, b, b, b]]);
      });
    });
  });
});
