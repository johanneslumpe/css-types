import { ILexingError } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { RawToken, Token } from '../types';

export function isValidToken(token: RawToken): token is Token {
  return token.type !== ILexingError.LEXING_ERROR;
}
