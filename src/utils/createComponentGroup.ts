import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { IComponentGroup, TokenOrGroupArray } from '../types';

export function createComponentGroup(
  entities: TokenOrGroupArray,
): IComponentGroup {
  return {
    entities: Array.isArray(entities) ? entities : [entities],
    type: ICssTokenType.GROUP,
  };
}
