import {
  IAdditionalTokenData,
  ICssMultiplierTokenType,
  ICssTokenType,
  lexValueDeclarationGrammar,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import {
  CssTokenSubType,
  ICssCombinatorTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer/lib/types';
import { convertRawTokensToComponents } from '../convertRawTokensToComponents';
import { createCombinatorGroup } from '../createCombinatorGroup';
import { createComponent } from '../createComponent';
import { createComponentGroup } from '../createComponentGroup';

import {
  dataTypeToken,
  IFakeToken,
  keywordToken,
  multiplierToken,
} from './utils/tokens';

describe('convertRawTokensToComponents', () => {
  it('should throw an error if token list contains errors', () => {
    expect(() =>
      convertRawTokensToComponents(
        lexValueDeclarationGrammar('dummy]').emittedTokens,
      ),
    ).toThrow(/invalid token/i);
  });

  it('should convert keywords', () => {
    const result = convertRawTokensToComponents(
      lexValueDeclarationGrammar('test').emittedTokens,
    );
    expect(result).toEqual([createComponent(keywordToken('test'))]);
  });

  it('should convert data types', () => {
    const result = convertRawTokensToComponents(
      lexValueDeclarationGrammar('<test>').emittedTokens,
    );
    expect(result).toEqual([createComponent(dataTypeToken('<test>'))]);
  });

  describe('multipliers', () => {
    const generateTestForType = (
      type: ICssTokenType.KEYWORD | ICssTokenType.DATA_TYPE,
      value: string,
    ) => {
      let tokenCreator: (value: string) => IFakeToken<any>;
      switch (type) {
        case ICssTokenType.KEYWORD:
          tokenCreator = keywordToken;
          break;
        case ICssTokenType.DATA_TYPE:
          tokenCreator = dataTypeToken;
          break;
      }
      describe(`after ${type}`, () => {
        it('should handle question mark', () => {
          const result = convertRawTokensToComponents(
            lexValueDeclarationGrammar(`${value}?`).emittedTokens,
          );
          expect(result).toEqual([
            createComponent(
              tokenCreator(value),
              multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
            ),
          ]);
        });

        it('should handle asterisk', () => {
          const result = convertRawTokensToComponents(
            lexValueDeclarationGrammar(`${value}*`).emittedTokens,
          );
          expect(result).toEqual([
            createComponent(
              tokenCreator(value),
              multiplierToken(ICssMultiplierTokenType.ASTERISK),
            ),
          ]);
        });

        it('should handle hash mark', () => {
          const result = convertRawTokensToComponents(
            lexValueDeclarationGrammar(`${value}#`).emittedTokens,
          );
          expect(result).toEqual([
            createComponent(
              tokenCreator(value),
              multiplierToken(ICssMultiplierTokenType.HASH_MARK),
            ),
          ]);
        });

        it('should handle plus sign', () => {
          const result = convertRawTokensToComponents(
            lexValueDeclarationGrammar(`${value}+`).emittedTokens,
          );
          expect(result).toEqual([
            createComponent(
              tokenCreator(value),
              multiplierToken(ICssMultiplierTokenType.PLUS),
            ),
          ]);
        });

        describe('curly braces', () => {
          it('should handle curly braces with one value without a max', () => {
            const result = convertRawTokensToComponents(
              lexValueDeclarationGrammar(`${value}{1,}`).emittedTokens,
            );
            expect(result).toEqual([
              createComponent(
                tokenCreator(value),
                multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{1,}'),
              ),
            ]);
          });

          it('should handle curly braces with two values', () => {
            const result = convertRawTokensToComponents(
              lexValueDeclarationGrammar(`${value}{1,2}`).emittedTokens,
            );
            expect(result).toEqual([
              createComponent(
                tokenCreator(value),
                multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{1,2}'),
              ),
            ]);
          });

          it('should handle curly braces with one value', () => {
            const result = convertRawTokensToComponents(
              lexValueDeclarationGrammar(`${value}{1}`).emittedTokens,
            );
            expect(result).toEqual([
              createComponent(
                tokenCreator(value),
                multiplierToken(ICssMultiplierTokenType.CURLY_BRACES, '{1}'),
              ),
            ]);
          });
        });
      });
    };

    generateTestForType(ICssTokenType.KEYWORD, 'test');
    generateTestForType(ICssTokenType.DATA_TYPE, '<test-type>');

    // it('should handle multipliers after groups', () => {});
  });

  describe('groups', () => {
    it('should convert empty groups', () => {
      const result = convertRawTokensToComponents(
        lexValueDeclarationGrammar('[]').emittedTokens,
      );
      expect(result).toEqual([createComponentGroup([])]);
    });

    it('should convert groups with children', () => {
      const result = convertRawTokensToComponents(
        lexValueDeclarationGrammar('[ test ]').emittedTokens,
      );

      expect(result).toEqual([
        createComponentGroup([createComponent(keywordToken('test'))]),
      ]);
    });

    it('should convert nested groups', () => {
      const result = convertRawTokensToComponents(
        lexValueDeclarationGrammar('[ [ test ] ]').emittedTokens,
      );
      expect(result).toEqual([
        createComponentGroup([
          createComponentGroup([createComponent(keywordToken('test'))]),
        ]),
      ]);
    });
  });

  describe('operators', () => {
    it('should convert juxtapostion', () => {
      const result = convertRawTokensToComponents(
        lexValueDeclarationGrammar('test test').emittedTokens,
      );
      expect(result).toEqual([
        createComponent(keywordToken('test')),
        createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, []),
        createComponent(keywordToken('test')),
      ]);
    });

    it('should convert single bar', () => {
      const result = convertRawTokensToComponents(
        lexValueDeclarationGrammar('test | test').emittedTokens,
      );
      expect(result).toEqual([
        createComponent(keywordToken('test')),
        createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, []),
        createComponent(keywordToken('test')),
      ]);
    });

    it('should convert double bar', () => {
      const result = convertRawTokensToComponents(
        lexValueDeclarationGrammar('test && test').emittedTokens,
      );
      expect(result).toEqual([
        createComponent(keywordToken('test')),
        createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_AMPERSAND, []),
        createComponent(keywordToken('test')),
      ]);
    });

    it('should convert double ampersand', () => {
      const result = convertRawTokensToComponents(
        lexValueDeclarationGrammar('test || test').emittedTokens,
      );
      expect(result).toEqual([
        createComponent(keywordToken('test')),
        createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_BAR, []),
        createComponent(keywordToken('test')),
      ]);
    });
  });
});
