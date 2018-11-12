import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { some } from 'lodash/fp';

import { RawToken } from '../types';

export function syntaxContainsDataTypes(arr: RawToken[]) {
  return some(token => token.type === ICssTokenType.DATA_TYPE, arr);
}
