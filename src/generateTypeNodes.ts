import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import {
  compact,
  filter,
  flatMap,
  flatten,
  map,
  reduce,
  reject,
} from 'lodash/fp';
import ts from 'typescript';

import { LENGTH_TYPE_NAME } from './constants';
import {
  ComponentTypeRepresentation,
  ComponentTypes,
  IComponent,
  INestedComponentArray,
} from './types';
import { generateTypeName } from './utils/generateTypeName';

const LENGTH_GENERIC_ARGUMENT = 'TLength';

const typeReferenceOverrideMap: { [index: string]: string } = {
  // all lengths need to use generic in order to allow customization by the consumer
  [LENGTH_TYPE_NAME.toLowerCase()]: LENGTH_GENERIC_ARGUMENT,
  number: 'number',
  string: 'string',
};

const genericOverrideMap: { [index: string]: string } = {
  // length percentages need to pass through the generic argument to allow customization
  // to flow through the type
  'length-percentage': LENGTH_GENERIC_ARGUMENT,
};

export const generateTsNode = (component: IComponent) => {
  switch (component.type) {
    case ICssTokenType.KEYWORD:
      return ts.createStringLiteral(component.value);

    case ComponentTypes.VOID:
      return undefined;

    case ICssTokenType.DATA_TYPE:
      const withoutAngleBrackets = component.value.substring(
        1,
        component.value.length - 1,
      );
      return ts.createTypeReferenceNode(
        typeReferenceOverrideMap[withoutAngleBrackets] ||
          generateTypeName(withoutAngleBrackets),
        genericOverrideMap[withoutAngleBrackets]
          ? [
              ts.createTypeReferenceNode(
                genericOverrideMap[withoutAngleBrackets],
                [],
              ),
            ]
          : [],
      );

    default:
      throw new Error(
        `unsupported component type encountered: ${component.type}`,
      );
  }
};

// TODO fix `any` type
export const generateTypesNodes = (data: INestedComponentArray): any => {
  const { representation } = data;
  const componentsWithoutVoid = filter(
    item =>
      Array.isArray(item) ? !!item.length : item.type !== ComponentTypes.VOID,
    data,
  );

  switch (representation) {
    case ComponentTypeRepresentation.TUPLE: {
      // no need for a tuple type if we only have a single value
      if (componentsWithoutVoid.length === 1) {
        const value = componentsWithoutVoid[0];
        return generateTypesNodes(Array.isArray(value) ? value : [value]);
      }

      return ts.createTupleTypeNode(
        compact(
          flatMap(item => {
            if (!Array.isArray(item)) {
              return generateTypesNodes([item]);
            }

            // nested tuple nodes need to be lifted up into their parent tuples
            const flattenedTuples = reduce(
              (acc, entry) => {
                if (!Array.isArray(entry)) {
                  acc.push(entry);
                } else if (
                  entry.representation === ComponentTypeRepresentation.TUPLE
                ) {
                  acc.push(...entry);
                } else {
                  acc.push(entry);
                }

                return acc;
              },
              [] as any[],
              item,
            );
            return generateTypesNodes(flattenedTuples);
          }, componentsWithoutVoid),
        ),
      );
    }

    case ComponentTypeRepresentation.UNION:
      const nestedValues = compact(
        reject(
          item => Array.isArray(item) && !item.length,
          map(item => {
            if (Array.isArray(item)) {
              return generateTypesNodes(item);
            }
            return generateTsNode(item);
          }, componentsWithoutVoid),
        ),
      );
      // TODO fold tuples

      // const tupleNodes: TupleTypeNode[] = nestedValues.filter(x =>
      //   ts.isTupleTypeNode(x),
      // );
      // const grouped = groupBy(tupleNodes, item => {
      //   const i = item.elementTypes[0];
      //   if (ts.isTypeReferenceNode(i)) {
      //     if (ts.isIdentifier(i.typeName)) {
      //       return `${i.typeName.escapedText}-${item.elementTypes.length}`;
      //     }
      //   } else if (ts.isStringLiteralLike(i)) {
      //     return `${i.text}-${item.elementTypes.length}`;
      //   }

      //   throw new Error('oops');
      // });

      // const updated = mapValues(grouped, values => {
      //   const leftMostNode = values[0].elementTypes[0];
      //   const rightNodes = values[0].elementTypes.slice(1);
      //   rightNodes.forEach(node => console.log(node.))
      //   return ts.createTupleTypeNode([leftMostNode]);
      // });
      return ts.createUnionTypeNode(nestedValues);

    default: {
      const first = componentsWithoutVoid[0];
      return componentsWithoutVoid.length === 1 && !Array.isArray(first)
        ? generateTsNode(first)
        : compact(
            map(item => {
              if (Array.isArray(item)) {
                const result = generateTypesNodes(item);
                return Array.isArray(result) ? flatten(result) : result;
              }
              return generateTsNode(item);
            }, componentsWithoutVoid),
          );
    }
  }
};
