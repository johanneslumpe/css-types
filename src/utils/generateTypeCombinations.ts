import {
  ICssCombinatorTokenType,
  ICssTokenType,
  ICssMultiplierTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { compact, every, flatten, map, reject } from 'lodash/fp';

import {
  ComponentArray,
  INestedComponentArray,
  ComponentTypes,
} from '../types';
import { generateComponentPermutations } from './generateComponentPermutations';
import { createVoidComponent } from './createVoidComponent';

// TODO tag returned arrays somehow so that it is possible to later infer which
// type representation to use, e.g. union or tuple:
//
// Juxtapositions need to use tuples
// single bars need unions

interface ITaggedComponentArray extends INestedComponentArray {
  representation: 'union' | 'tuple';
}

export function generateTypeCombinations(
  entities: ComponentArray,
): INestedComponentArray {
  return compact(
    map(entity => {
      switch (entity.type) {
        case ICssTokenType.KEYWORD:
        case ICssTokenType.DATA_TYPE:
          return entity;

        case ICssTokenType.COMBINATOR: {
          switch (entity.combinator) {
            case ICssCombinatorTokenType.JUXTAPOSITION:
            // Since the double ampersand allows tokens in any order
            // it can be just the same as a juxtaposition
            case ICssCombinatorTokenType.DOUBLE_AMPERSAND:
              return generateComponentPermutations(
                map(
                  item => (Array.isArray(item) ? item : [item]),
                  generateTypeCombinations(entity.entities),
                ),
              );

            case ICssCombinatorTokenType.SINGLE_BAR:
              return flatten(generateTypeCombinations(entity.entities));

            case ICssCombinatorTokenType.DOUBLE_BAR: {
              const permutations = generateComponentPermutations(
                map(
                  combination =>
                    Array.isArray(combination)
                      ? combination.find(
                          c =>
                            !Array.isArray(c) && c.type === ComponentTypes.VOID,
                        )
                        ? combination
                        : [createVoidComponent(), ...combination]
                      : [createVoidComponent(), combination],
                  generateTypeCombinations(entity.entities),
                ),
              );

              // at least one value is required, so we remove all permutations that only
              // contain void values
              return reject(
                permutation =>
                  every(
                    component => component.type === ComponentTypes.VOID,
                    permutation,
                  ),
                permutations,
              );
            }
          }
          break;
        }

        case ICssTokenType.GROUP: {
          const combinations = flatten(
            generateTypeCombinations(entity.entities),
          );
          return entity.multiplier &&
            entity.multiplier.type === ICssMultiplierTokenType.QUESTION_MARK
            ? [createVoidComponent(), ...combinations]
            : combinations;
        }
      }
    }, entities),
  );
}
