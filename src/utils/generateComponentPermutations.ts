import { ICssMultiplierTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { forEach, reduce } from 'lodash/fp';

import { IComponent, INestedComponentArray } from '../types';
import { generateComponentMultiplierPermutations } from './generateComponentMultiplierPermutations';

function isCurlyBraceMultiplierArray(arr: IComponent[]): boolean {
  return arr.every(
    component =>
      !!(
        component.multiplier &&
        component.multiplier.type === ICssMultiplierTokenType.CURLY_BRACES
      ),
  );
}

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
