import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { IComponent, MultiplierToken, Token } from '../types';
import { getMultiplierForToken } from './getMultiplierForToken';

export function createComponent(
  token: Token,
  multiplier?: MultiplierToken,
): IComponent {
  if (
    token.type !== ICssTokenType.KEYWORD &&
    token.type !== ICssTokenType.DATA_TYPE
  ) {
    throw new Error('Unsupported token type');
  }

  return {
    multiplier: getMultiplierForToken(multiplier),
    type: token.type,
    value: token.value,
  };
}
