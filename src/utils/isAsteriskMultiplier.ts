import {
  ICssMultiplierTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { RawToken } from '../types';

export function isAsteriskMultiplier(token: RawToken) {
  return (
    token.type === ICssTokenType.MULTIPLIER &&
    token.data &&
    token.data.subType === ICssMultiplierTokenType.ASTERISK
  );
}
