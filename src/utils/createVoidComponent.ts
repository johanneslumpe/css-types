import { ComponentTypes, IComponent } from '../types';

export function createVoidComponent(): IComponent {
  return {
    type: ComponentTypes.VOID,
    value: '',
  };
}
