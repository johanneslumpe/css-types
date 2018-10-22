import {
  ICssCombinatorTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { compact, flatten, map } from 'lodash/fp';

import { ComponentArray, INestedComponentArray } from '../types';
import { generateComponentPermutations } from './generateComponentPermutations';

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
          }
        }

        case ICssTokenType.GROUP:
          return flatten(generateTypeCombinations(entity.entities));
      }
    }, entities),
  );
}
