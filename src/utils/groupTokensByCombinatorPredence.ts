import {
  ICssCombinatorTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { reduce } from 'lodash/fp';

import {
  ComponentArray,
  ICombinatorGroup,
  IComponent,
  IComponentGroup,
} from '../types';
import { createCombinatorGroup } from './createCombinatorGroup';
import { createComponentGroup } from './createComponentGroup';

// Higher number is higher precedence
// see https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax
export enum CombinatorPrecedence {
  JUXTAPOSITION = 0,
  DOUBLE_AMPERSAND = 1,
  DOUBLE_BAR = 2,
  SINGLE_BAR = 3,
}

export const combinatorsByPrecedence: {
  [key: number]: ICssCombinatorTokenType;
} = {
  [CombinatorPrecedence.JUXTAPOSITION]: ICssCombinatorTokenType.JUXTAPOSITION,
  [CombinatorPrecedence.SINGLE_BAR]: ICssCombinatorTokenType.SINGLE_BAR,
  [CombinatorPrecedence.DOUBLE_BAR]: ICssCombinatorTokenType.DOUBLE_BAR,
  [CombinatorPrecedence.DOUBLE_AMPERSAND]:
    ICssCombinatorTokenType.DOUBLE_AMPERSAND,
};

const collectIndexesForCombinator = (combinator: ICssCombinatorTokenType) => (
  acc: number[],
  entity: IComponent | IComponentGroup | ICombinatorGroup,
  index: number,
) => {
  if (
    entity.type === ICssTokenType.COMBINATOR &&
    entity.combinator === combinator
  ) {
    acc.push(index);
  }
  return acc;
};

const extractTokenGroupsFromEntities = (entities: ComponentArray) => (
  acc: ComponentArray[],
  combinatorIndex: number,
  index: number,
  indexes: number[],
) => {
  if (index < indexes.length - 1) {
    const tokens = entities.slice(
      index > 0 ? combinatorIndex + 1 : combinatorIndex,
      indexes[index + 1],
    );
    acc.push(tokens);
  }

  return acc;
};

export function groupTokensByCombinatorPredence(
  entities: ComponentArray,
  precedence = CombinatorPrecedence.SINGLE_BAR,
): ComponentArray {
  if (precedence < 0) {
    return entities;
  }

  const combinator: ICssCombinatorTokenType =
    combinatorsByPrecedence[precedence];
  const indexes = entities.reduce(
    collectIndexesForCombinator(combinator),
    [] as number[],
  );

  if (!indexes.length) {
    if (entities.length === 1) {
      const first = entities[0];
      if (first.type === ICssTokenType.GROUP) {
        const group = createComponentGroup(
          groupTokensByCombinatorPredence(first.entities),
        );
        group.multiplier = first.multiplier;
        return [group];
      }
    }
    return groupTokensByCombinatorPredence(entities, precedence - 1);
  }
  // add first and last indexes so we can isolate all value groups between combinators.
  // This is safe because combinators can never be the first or last token for valid css grammar syntax
  indexes.unshift(0);
  indexes.push(entities.length);

  const groupedComponentValues = indexes.reduce(
    extractTokenGroupsFromEntities(entities),
    [],
  );

  const result: ComponentArray = [];
  const combinatorGroup = createCombinatorGroup(
    combinator,
    reduce(
      (acc, tokenGroup) => [
        ...acc,
        ...groupTokensByCombinatorPredence(
          tokenGroup,
          CombinatorPrecedence.SINGLE_BAR,
        ),
      ],
      result,
      groupedComponentValues,
    ),
  );
  return [combinatorGroup];
}
