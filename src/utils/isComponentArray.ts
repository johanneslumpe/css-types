import { IComponent, INestedComponentArray } from '../types';

export function isComponentArray(
  arr: INestedComponentArray,
): arr is IComponent[] {
  return arr.every(i => !Array.isArray(i));
}
