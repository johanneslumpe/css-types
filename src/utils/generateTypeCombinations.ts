import {
  ICssCombinatorTokenType,
  ICssMultiplierTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { compact, every, find, flatten, map, reduce, reject } from 'lodash/fp';

import {
  ComponentArray,
  ComponentTypeRepresentation,
  ComponentTypes,
  INestedComponentArray,
} from '../types';
import {
  createTupleArray,
  createUnionArray,
} from './createdTypeNestedComponentArrays';
import { createVoidComponent } from './createVoidComponent';
import { generateComponentPermutations } from './generateComponentPermutations';

export function generateTypeCombinations(
  entities: ComponentArray,
): INestedComponentArray {
  return compact(
    map(entity => {
      switch (entity.type) {
        case ICssTokenType.KEYWORD:
        case ICssTokenType.DATA_TYPE: {
          if (
            entity.multiplier &&
            entity.multiplier.type === ICssMultiplierTokenType.CURLY_BRACES
          ) {
            const permutations: INestedComponentArray = generateComponentPermutations(
              [[entity]],
            );
            return createUnionArray(
              map(
                arr => createTupleArray(arr as INestedComponentArray),
                permutations,
              ),
            );
          }
          return entity;
        }

        case ICssTokenType.COMBINATOR: {
          switch (entity.combinator) {
            case ICssCombinatorTokenType.JUXTAPOSITION:
            // Since the double ampersand allows tokens in any order
            // we make an opinionated decision and force the same order
            // as we would have for a juxtaposition
            case ICssCombinatorTokenType.DOUBLE_AMPERSAND: {
              const permutations: INestedComponentArray = generateComponentPermutations(
                map(
                  item => (Array.isArray(item) ? item : [item]),
                  generateTypeCombinations(entity.entities),
                ),
              );

              return createUnionArray(
                map(
                  arr => createTupleArray(arr as INestedComponentArray),
                  permutations,
                ),
              );
            }

            case ICssCombinatorTokenType.SINGLE_BAR: {
              return createUnionArray(
                flatten(generateTypeCombinations(entity.entities)),
              );
            }

            case ICssCombinatorTokenType.DOUBLE_BAR: {
              const permutations = generateComponentPermutations(
                map(
                  combination =>
                    Array.isArray(combination)
                      ? find(
                          c =>
                            !Array.isArray(c) && c.type === ComponentTypes.VOID,
                          combination,
                        )
                        ? combination
                        : [createVoidComponent(), ...combination]
                      : [createVoidComponent(), combination],
                  generateTypeCombinations(entity.entities),
                ),
              );

              // at least one value is required, so we remove all permutations that only
              // contain void values
              return createUnionArray(
                map(
                  arr => createTupleArray(arr as INestedComponentArray),
                  reject(
                    permutation =>
                      every(
                        component => component.type === ComponentTypes.VOID,
                        permutation,
                      ),
                    permutations,
                  ),
                ),
              );
            }
          }
          break;
        }

        case ICssTokenType.GROUP: {
          const r1 = generateTypeCombinations(entity.entities);

          // we lift the nested representation up when resolving the group
          const type: ComponentTypeRepresentation = reduce(
            (acc, item) => {
              return Array.isArray(item)
                ? acc || item.representation || ComponentTypeRepresentation.NONE
                : acc;
            },
            ComponentTypeRepresentation.NONE,
            r1,
          );

          const combinations = flatten(
            generateTypeCombinations(entity.entities),
          );

          const final: INestedComponentArray =
            entity.multiplier &&
            entity.multiplier.type === ICssMultiplierTokenType.QUESTION_MARK
              ? [createVoidComponent(), ...combinations]
              : combinations;
          final.representation = type;
          return final;
        }

        default: {
          throw new Error('unsupported case hit');
        }
      }
    }, entities),
  );
}
