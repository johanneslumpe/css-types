import { ICssMultiplierTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { ICurlyBraceMultiplier } from '../types';

const REGEX_CURLY_BRACE_BOUNDARIES = /^\{(\d)(,)?(\d)?\}$/;

export function createCurlyBracesMultiplier(
  tokenValue: string,
): ICurlyBraceMultiplier {
  const result = tokenValue.match(REGEX_CURLY_BRACE_BOUNDARIES);
  if (!result) {
    throw new Error(`Invalid curly brace boundaries: ${tokenValue}`);
  }
  const [, min, separator, max] = result;
  return {
    max: !separator ? Number(min) : max ? Number(max) : Infinity,
    min: Number(min),
    type: ICssMultiplierTokenType.CURLY_BRACES,
  };
}
