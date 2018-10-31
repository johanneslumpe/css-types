import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { IComponentGroup, MultiplierToken, TokenOrGroupArray } from '../types';
import { getMultiplierForToken } from './getMultiplierForToken';

export function createComponentGroup(
  entities: TokenOrGroupArray,
  multiplier?: MultiplierToken,
): IComponentGroup {
  return {
    entities: Array.isArray(entities) ? entities : [entities],
    multiplier: getMultiplierForToken(multiplier),
    type: ICssTokenType.GROUP,
  };
}
