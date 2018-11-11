import { ICssMultiplierTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';

import {
  IBasicMultiplier,
  ICurlyBraceMultiplier,
  MultiplierToken,
} from '../types';
import { createBasicMultiplier } from './createBasicMultiplier';
import { createCurlyBracesMultiplier } from './createCurlyBracesMultiplier';

export function getMultiplierForToken(multiplier?: MultiplierToken) {
  let componentMultiplier: IBasicMultiplier | ICurlyBraceMultiplier | undefined;
  if (multiplier && multiplier.data && multiplier.data.subType) {
    switch (multiplier.data.subType) {
      case ICssMultiplierTokenType.CURLY_BRACES:
        componentMultiplier = createCurlyBracesMultiplier(multiplier.value);
        break;
      case ICssMultiplierTokenType.ASTERISK:
      case ICssMultiplierTokenType.EXCLAMATION_MARK:
      case ICssMultiplierTokenType.HASH_MARK:
      case ICssMultiplierTokenType.PLUS:
      case ICssMultiplierTokenType.QUESTION_MARK:
        componentMultiplier = createBasicMultiplier(multiplier.data.subType);
        break;
      default:
        throw new Error(
          `Invalid multiplier sub type: ${multiplier.data.subType}`,
        );
    }
  }

  return componentMultiplier;
}
