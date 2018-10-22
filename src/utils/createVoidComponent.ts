import {
  ICssMultiplierTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { ComponentTypes, IComponent } from '../types';

export function createVoidComponent(): IComponent {
  return {
    type: ComponentTypes.VOID,
    value: '',
  };
}
