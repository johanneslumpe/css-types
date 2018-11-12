import { lexValueDeclarationGrammar } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { mapValues } from 'lodash/fp';
import { IRawSyntaxes } from 'mdn-data';
import { IParsedSyntaxes } from '../types';

export function parseRawSyntaxes(syntaxes: IRawSyntaxes): IParsedSyntaxes {
  return mapValues(syntax => {
    return lexValueDeclarationGrammar(syntax.syntax).emittedTokens;
  }, syntaxes);
}
