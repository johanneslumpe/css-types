import {
  ICssGroupTokenType,
  lexValueDeclarationGrammar,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { RawToken } from '../../types';
import { inlineDataTypes } from '../inlineDataTypes';
import { groupToken } from '../stubTokens';

describe('inlineDataTypes', () => {
  it('should inline a single datatype', () => {
    const resultA = lexValueDeclarationGrammar('<a>');
    const resultB = lexValueDeclarationGrammar('keyword');
    const inlined = inlineDataTypes(
      resultA.emittedTokens,
      key => resultB.emittedTokens,
    );

    expect(inlined).toMatchObject([
      groupToken('[', ICssGroupTokenType.GROUP_START),
      resultB.emittedTokens[0],
      groupToken(']', ICssGroupTokenType.GROUP_END),
    ]);
  });

  it('should inline a multiple datatypes', () => {
    const resultA = lexValueDeclarationGrammar('<a> <b>');
    const lookup: { [index: string]: RawToken[] } = {
      a: lexValueDeclarationGrammar('keyworda').emittedTokens,
      b: lexValueDeclarationGrammar('keywordb').emittedTokens,
    };
    const inlined = inlineDataTypes(resultA.emittedTokens, key => lookup[key]);

    expect(inlined).toMatchObject([
      groupToken('[', ICssGroupTokenType.GROUP_START),
      lookup.a[0],
      groupToken(']', ICssGroupTokenType.GROUP_END),
      resultA.emittedTokens[1],
      groupToken('[', ICssGroupTokenType.GROUP_START),
      lookup.b[0],
      groupToken(']', ICssGroupTokenType.GROUP_END),
    ]);
  });

  it('should inline data-types across multiple depths', () => {
    const resultA = lexValueDeclarationGrammar('<a>');
    const lookup: { [index: string]: RawToken[] } = {
      a: lexValueDeclarationGrammar('<b> keyworda').emittedTokens,
      b: lexValueDeclarationGrammar('<c>').emittedTokens,
      c: lexValueDeclarationGrammar('keywordc').emittedTokens,
    };
    const inlined = inlineDataTypes(resultA.emittedTokens, key => lookup[key]);

    expect(inlined).toMatchObject([
      groupToken('[', ICssGroupTokenType.GROUP_START),
      groupToken('[', ICssGroupTokenType.GROUP_START),
      groupToken('[', ICssGroupTokenType.GROUP_START),
      lookup.c[0],
      groupToken(']', ICssGroupTokenType.GROUP_END),
      groupToken(']', ICssGroupTokenType.GROUP_END),
      lookup.a[1],
      lookup.a[2],
      groupToken(']', ICssGroupTokenType.GROUP_END),
    ]);
  });

  it('should handle self-referencing data-types', () => {
    const resultA = lexValueDeclarationGrammar('<number>');
    const lookup: { [index: string]: RawToken[] } = {
      number: lexValueDeclarationGrammar('<number>').emittedTokens,
    };
    const inlined = inlineDataTypes(resultA.emittedTokens, key => lookup[key]);

    expect(inlined).toMatchObject([
      groupToken('[', ICssGroupTokenType.GROUP_START),
      resultA.emittedTokens[0],
      groupToken(']', ICssGroupTokenType.GROUP_END),
    ]);
  });
});
