import { ICssMultiplierTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { map, range, reduce } from 'lodash/fp';

import { IComponent } from '../types';
import { createVoidComponent } from './createVoidComponent';

export function generateComponentMultiplierPermutations(
  arr: IComponent[],
): IComponent[][] {
  if (!arr.length) {
    return [[]];
  }

  const nestedResult = generateComponentMultiplierPermutations(arr.slice(1));
  const result: IComponent[][] = [];
  const component = arr[0];

  if (!component.multiplier) {
    return nestedResult.reduce(
      (acc, componentArr) => acc.concat([[component].concat(componentArr)]),
      result,
    );
  }
  let min: number = 0;
  let max: number = 0;

  switch (component.multiplier.type) {
    case ICssMultiplierTokenType.QUESTION_MARK:
      min = 0;
      max = 1;
      break;
    case ICssMultiplierTokenType.CURLY_BRACES:
      min = component.multiplier.min;
      max = component.multiplier.max;
      break;
  }

  if (max === Infinity) {
    throw new Error('Cannot compute infinite permutations');
  }

  return reduce(
    (acc, permutation) => {
      const data = map(componentArray => {
        const combined = permutation.concat(componentArray);
        // return empty array to signify when a component has no value for a given permutation
        // this is important to prevent downstream errors when trying to generate more permutations/combinations
        // where functions need the right amount of values in their input arrays
        return combined.length ? combined : [createVoidComponent()];
      }, nestedResult);

      return acc.concat(data);
    },
    result,
    map(i => Array<IComponent>(i).fill(component), range(min, max + 1)),
  );
}
