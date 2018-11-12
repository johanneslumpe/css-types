import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { RawToken, SyntaxLookupFn } from '../types';
import { generateDataTypeLookupKey } from './generateDataTypeLookupKey';

export function syntaxCanBeCollapsed(
  parsedSyntax: RawToken[],
  lookup: SyntaxLookupFn,
  prevKey?: string,
): boolean {
  return parsedSyntax.every(token => {
    const valid =
      token.type !== ICssTokenType.FUNCTION &&
      token.type !== ICssTokenType.LITERAL;

    if (token.type === ICssTokenType.DATA_TYPE) {
      const key = generateDataTypeLookupKey(token.value);
      if (prevKey === key) {
        return true;
      }
      const keyValue = lookup(key);
      return !!keyValue && syntaxCanBeCollapsed(keyValue, lookup, key);
    }

    return valid;
  });
}
