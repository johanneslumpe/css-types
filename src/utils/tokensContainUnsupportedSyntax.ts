import {
  ICssMultiplierTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { some } from 'lodash/fp';

import { RawToken } from '../types';

export function tokensContainUnsupportedSyntax(tokens: RawToken[]) {
  return some(
    token =>
      token.type === ICssTokenType.FUNCTION ||
      token.type === ICssTokenType.LITERAL ||
      !!(
        token.type === ICssTokenType.MULTIPLIER &&
        token.data &&
        token.data.subType === ICssMultiplierTokenType.HASH_MARK
      ),
    tokens,
  );
}
