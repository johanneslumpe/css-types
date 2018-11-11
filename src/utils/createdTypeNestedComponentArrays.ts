import { ComponentTypeRepresentation, INestedComponentArray } from '../types';

export function createTypedNestedComponentArray(
  representation: ComponentTypeRepresentation,
) {
  return (arr: INestedComponentArray) => {
    const cloned: INestedComponentArray = [...arr];
    cloned.representation = representation;
    return cloned;
  };
}

export const createUnionArray = createTypedNestedComponentArray(
  ComponentTypeRepresentation.UNION,
);
export const createTupleArray = createTypedNestedComponentArray(
  ComponentTypeRepresentation.TUPLE,
);
