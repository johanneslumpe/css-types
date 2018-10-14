import {
  formatTokens,
  IAdditionalTokenData,
  ICssMultiplierTokenType,
  ICssTokenType,
  ILexingError,
  lexValueDeclarationGrammar,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { generateUnionTypes } from '../generateUnionTypes';

describe('generateUnionTypes', () => {
  describe('only keywords', () => {
    it('separated by single bars', () => {
      const result = generateUnionTypes(
        lexValueDeclarationGrammar('a | b | c').emittedTokens,
      );
      expect(result).toMatchObject([
        { type: 'LITERAL_TYPE', value: 'a' },
        { type: 'LITERAL_TYPE', value: 'b' },
        { type: 'LITERAL_TYPE', value: 'c' },
      ]);
    });

    // it('separated by double bars', () => {
    //   const result = generateUnionTypes(
    //     lexValueDeclarationGrammar('a || b || c').emittedTokens,
    //   );
    //   expect(result).toMatchObject([
    //     { type: 'LITERAL_TYPE', value: 'a' },
    //     { type: 'LITERAL_TYPE', value: 'a b' },
    //     { type: 'LITERAL_TYPE', value: 'a b c' },
    //     { type: 'LITERAL_TYPE', value: 'b' },
    //     { type: 'LITERAL_TYPE', value: 'b c' },
    //     { type: 'LITERAL_TYPE', value: 'c' },
    //   ]);
    // });

    it('complex', () => {
      const result = generateUnionTypes(
        lexValueDeclarationGrammar(
          '[ block | inline | run-in ]? && [ flow | flow-root ]? && list-item',
        ).emittedTokens,
      );

      expect(result).toMatchObject([
        { type: 'LITERAL_TYPE', value: 'list-item' },
        { type: 'LITERAL_TYPE', value: 'block list-item' },
        { type: 'LITERAL_TYPE', value: 'block flow list-item' },
        { type: 'LITERAL_TYPE', value: 'block flow-root list-item' },
        { type: 'LITERAL_TYPE', value: 'inline list-item' },
        { type: 'LITERAL_TYPE', value: 'inline flow list-item' },
        { type: 'LITERAL_TYPE', value: 'inline flow-root list-item' },
        { type: 'LITERAL_TYPE', value: 'run-in list-item' },
        { type: 'LITERAL_TYPE', value: 'run-in flow list-item' },
        { type: 'LITERAL_TYPE', value: 'run-in flow-root list-item' },
        { type: 'LITERAL_TYPE', value: 'flow list-item' },
        { type: 'LITERAL_TYPE', value: 'flow-root list-item' },
      ]);
    });
  });
});
