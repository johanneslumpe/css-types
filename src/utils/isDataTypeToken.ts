import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { RawToken } from '../types';

export function isDataTypeToken(token: RawToken) {
  return token.type === ICssTokenType.DATA_TYPE;
}
