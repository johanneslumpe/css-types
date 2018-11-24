import { ICssMultiplierTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { forEach } from 'lodash/fp';

import { RawToken } from '../types';
import { isAsteriskMultiplier } from './isAsteriskMultiplier';
import { isPlusMultiplier } from './isPlusMultiplier';

/**
 * Converts infinite multipliers like `+` and `*` to opinionated, finite `{}` versions.
 * Opinionated, because they will be capped at 8 repetitions
 * @param tokens
 * @param suffix
 */
export function convertInfiniteMultiplersToFinite(tokens: RawToken[]) {
  forEach(token => {
    const isPlus = isPlusMultiplier(token);
    const isAsterisk = isAsteriskMultiplier(token);
    if (isPlus || isAsterisk) {
      token.data!.subType = ICssMultiplierTokenType.CURLY_BRACES;
      token.value = isPlus ? '{1,8}' : '{0,8}';
    }
  }, tokens);
}
