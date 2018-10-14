import {
  ICssCombinatorTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { compact, every, flatten, map } from 'lodash/fp';

import { ComponentArray, IComponent } from '../types';
import { generatePermutations } from './generatePermutations';

function onlyKeywords(entities: ComponentArray): entities is IComponent[] {
  return every(item => {
    return item.type === ICssTokenType.KEYWORD;
  }, entities);
}

function convertToArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function generateTypeCombinations(
  entities: ComponentArray,
): Array<string | string[]> {
  return compact(
    map(entity => {
      switch (entity.type) {
        case ICssTokenType.KEYWORD:
          return entity.value;

        case ICssTokenType.COMBINATOR: {
          switch (entity.combinator) {
            case ICssCombinatorTokenType.JUXTAPOSITION:
            // Since the double ampersand allows tokens in any order
            // it can be just the same as a juxtaposition
            case ICssCombinatorTokenType.DOUBLE_AMPERSAND:
              return flatten(
                generatePermutations(
                  map(
                    item => convertToArray(item),
                    generateTypeCombinations(entity.entities),
                  ),
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
