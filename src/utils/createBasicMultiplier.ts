import { ICssMultiplierTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { BasicMultiplier, IBasicMultiplier } from '../types';

export function createBasicMultiplier(type: BasicMultiplier): IBasicMultiplier {
  return {
    type,
  };
}
