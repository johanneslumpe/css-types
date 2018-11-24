import { ICssMultiplierTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { IComponent } from '../types';

export function isCurlyBraceMultiplierArray(arr: IComponent[]): boolean {
  return arr.every(
    component =>
      !!(
        component.multiplier &&
        component.multiplier.type === ICssMultiplierTokenType.CURLY_BRACES
      ),
  );
}
