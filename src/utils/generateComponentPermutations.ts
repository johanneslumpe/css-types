import { forEach, reduce } from 'lodash/fp';

import { IComponent, INestedComponentArray } from '../types';
import { generateComponentMultiplierPermutations } from './generateComponentMultiplierPermutations';
import { isCurlyBraceMultiplierArray } from './isCurlyBraceMultiplierArray';

export function generateComponentPermutations(
  arrays: INestedComponentArray[],
): IComponent[][] {
  if (!arrays.length) {
    return [[]];
  }

  const nestedResult = generateComponentPermutations(arrays.slice(1));
  const result: IComponent[][] = [];
  return reduce(
    (acc, arr) => {
      if (isCurlyBraceMultiplierArray(arr)) {
        forEach(nested => acc.push(arr.concat(nested)), nestedResult);
      } else {
        forEach(
          component =>
            forEach(
              nested => acc.push([component].concat(nested)),
              nestedResult,
            ),
          arr,
        );
      }
      return acc;
    },
    result,
    generateComponentMultiplierPermutations(arrays[0] as IComponent[]),
  );
}
