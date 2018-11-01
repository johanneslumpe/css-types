import {
  ICssCombinatorTokenType,
  ICssMultiplierTokenType,
  lexValueDeclarationGrammar,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { Token } from '../../types';
import { convertRawTokensToComponents } from '../convertRawTokensToComponents';
import { createCombinatorGroup } from '../createCombinatorGroup';
import { createComponent } from '../createComponent';
import { createComponentGroup } from '../createComponentGroup';
import { groupTokensByCombinatorPredence } from '../groupTokensByCombinatorPredence';
import { isValidToken } from '../isValidToken';
import { multiplierToken } from './utils/tokens';

function getValidTokenArrayForSyntax(syntax: string): Token[] {
  const { emittedTokens } = lexValueDeclarationGrammar(syntax);
  if (emittedTokens.find(x => !isValidToken(x))) {
    throw new Error('unexpected token encountered');
  }
  return emittedTokens.filter(isValidToken);
}

function groupTokens(tokens: Token[]) {
  return groupTokensByCombinatorPredence(convertRawTokensToComponents(tokens));
}

describe('groupTokensByCombinatorPredence', () => {
  describe('basic combinators', () => {
    it('should create a basic juxtaposition group', () => {
      const parsedSyntax = getValidTokenArrayForSyntax('a b');
      const result = groupTokens(parsedSyntax);
      const expected = [
        createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
          createComponent(parsedSyntax[0]),
          createComponent(parsedSyntax[2]),
        ]),
      ];

      expect(result).toEqual(expected);
    });

    it('should create a basic singlebar group', () => {
      const parsedSyntax = getValidTokenArrayForSyntax('a | b');
      const result = groupTokens(parsedSyntax);
      const expected = [
        createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
          createComponent(parsedSyntax[0]),
          createComponent(parsedSyntax[2]),
        ]),
      ];

      expect(result).toEqual(expected);
    });

    it('should create a basic double bar group', () => {
      const parsedSyntax = getValidTokenArrayForSyntax('a || b');
      const result = groupTokens(parsedSyntax);
      const expected = [
        createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_BAR, [
          createComponent(parsedSyntax[0]),
          createComponent(parsedSyntax[2]),
        ]),
      ];

      expect(result).toEqual(expected);
    });

    it('should create a basic double ampersand group', () => {
      const parsedSyntax = getValidTokenArrayForSyntax('a && b');
      const result = groupTokens(parsedSyntax);
      const expected = [
        createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_AMPERSAND, [
          createComponent(parsedSyntax[0]),
          createComponent(parsedSyntax[2]),
        ]),
      ];

      expect(result).toEqual(expected);
    });
  });

  describe('basic groups', () => {
    it('should create an empty group', () => {
      const parsedSyntax = getValidTokenArrayForSyntax('[]');
      const result = groupTokens(parsedSyntax);
      const expected = [createComponentGroup([])];

      expect(result).toEqual(expected);
    });

    it('should create a group with a keyword', () => {
      const parsedSyntax = getValidTokenArrayForSyntax('[ a ]');
      const result = groupTokens(parsedSyntax);
      const expected = [
        createComponentGroup([createComponent(parsedSyntax[1])]),
      ];

      expect(result).toEqual(expected);
    });

    it('should preserve group multipliers', () => {
      const parsedSyntax = getValidTokenArrayForSyntax('[ a ]?');
      const result = groupTokens(parsedSyntax);
      const expected = [
        createComponentGroup(
          [createComponent(parsedSyntax[1])],
          multiplierToken(ICssMultiplierTokenType.QUESTION_MARK),
        ),
      ];

      expect(result).toEqual(expected);
    });

    it('should create a group with a two keywords and a combinator', () => {
      const parsedSyntax = getValidTokenArrayForSyntax('[ a b ]');
      const result = groupTokens(parsedSyntax);
      const expected = [
        createComponentGroup([
          createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
            createComponent(parsedSyntax[1]),
            createComponent(parsedSyntax[3]),
          ]),
        ]),
      ];

      expect(result).toEqual(expected);
    });

    it('should be able to parse two adjacent groups', () => {
      const parsedSyntax = getValidTokenArrayForSyntax('[ a b ] [ d e ]');
      const result = groupTokens(parsedSyntax);
      const expected = [
        createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
          createComponentGroup([
            createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
              createComponent(parsedSyntax[1]),
              createComponent(parsedSyntax[3]),
            ]),
          ]),
          createComponentGroup([
            createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
              createComponent(parsedSyntax[7]),
              createComponent(parsedSyntax[9]),
            ]),
          ]),
        ]),
      ];

      expect(result).toEqual(expected);
    });
  });

  it('it should be able to handle a complex token string', () => {
    const parsedSyntax = getValidTokenArrayForSyntax(
      '[ a b [ h || j && k ] ] [ d | e && f ] && asd | qwe',
    );
    const result = groupTokens(parsedSyntax);
    const expected = [
      createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
        createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_AMPERSAND, [
          createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
            createComponentGroup([
              createCombinatorGroup(ICssCombinatorTokenType.JUXTAPOSITION, [
                createComponent(parsedSyntax[1]),
                createComponent(parsedSyntax[3]),
                createComponentGroup([
                  createCombinatorGroup(ICssCombinatorTokenType.DOUBLE_BAR, [
                    createComponent(parsedSyntax[6]),
                    createCombinatorGroup(
                      ICssCombinatorTokenType.DOUBLE_AMPERSAND,
                      [
                        createComponent(parsedSyntax[8]),
                        createComponent(parsedSyntax[10]),
                      ],
                    ),
                  ]),
                ]),
              ]),
            ]),
            createComponentGroup([
              createCombinatorGroup(ICssCombinatorTokenType.SINGLE_BAR, [
                createComponent(parsedSyntax[15]),
                createCombinatorGroup(
                  ICssCombinatorTokenType.DOUBLE_AMPERSAND,
                  [
                    createComponent(parsedSyntax[17]),
                    createComponent(parsedSyntax[19]),
                  ],
                ),
              ]),
            ]),
          ]),
          createComponent(parsedSyntax[22]),
        ]),
        createComponent(parsedSyntax[24]),
      ]),
    ];

    expect(result).toEqual(expected);
  });
});
