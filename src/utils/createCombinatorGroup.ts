import {
  ICssCombinatorTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { ICombinatorGroup, TokenOrGroupArray } from '../types';

export function createCombinatorGroup(
  combinator: ICssCombinatorTokenType,
  entities: TokenOrGroupArray,
): ICombinatorGroup {
  return { type: ICssTokenType.COMBINATOR, entities, combinator };
}
