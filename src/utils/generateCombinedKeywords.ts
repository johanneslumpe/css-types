import { ComponentTypeRepresentation, INestedComponentArray } from '../types';
import { isComponentArray } from './isComponentArray';

export function generateCombinedKeywords(arr: INestedComponentArray) {
  return arr.reduce(
    (acc, item) => {
      if (Array.isArray(item)) {
        const representation = item.representation;
        if (isComponentArray(item)) {
          if (
            representation &&
            representation === ComponentTypeRepresentation.TUPLE
          ) {
            acc.push(item.reduce((a, i) => `${a} ${i.value}`.trim(), ''));
          } else {
            acc.push(...item.map(x => x.value));
          }
        }
      } else {
        acc.push(item.value);
      }
      return acc;
    },
    [] as string[],
  );
}
