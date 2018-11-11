import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';
import {
  camelCase,
  compact,
  filter,
  flatMap,
  map,
  reject,
  upperFirst,
} from 'lodash';
import ts from 'typescript';

import {
  ComponentTypeRepresentation,
  ComponentTypes,
  IComponent,
  INestedComponentArray,
} from './types';

const typeReferenceOverrideMap: { [index: string]: string } = {
  integer: 'number',
  number: 'number',
  string: 'string',
};

export const generateTypeName = (str: string) => upperFirst(camelCase(str));

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
        [],
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
    data,
    item =>
      Array.isArray(item) ? !!item.length : item.type !== ComponentTypes.VOID,
  );

  switch (representation) {
    case ComponentTypeRepresentation.TUPLE: {
      // no need for a tuple type if we only have a single value
      if (componentsWithoutVoid.length === 1) {
        return generateTypesNodes([componentsWithoutVoid[0]]);
      }

      return ts.createTupleTypeNode(
        compact(
          flatMap(componentsWithoutVoid, item => {
            if (!Array.isArray(item)) {
              return generateTypesNodes([item]);
            }

            // nested tuple nodes need to be lifted up into their parent tuples
            const flattenedTuples = item.reduce(
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
            );
            return generateTypesNodes(flattenedTuples);
          }),
        ),
      );
    }

    case ComponentTypeRepresentation.UNION:
      const nestedValues = compact(
        reject(
          map(componentsWithoutVoid, item => {
            if (Array.isArray(item)) {
              return generateTypesNodes(item);
            }
            return generateTsNode(item);
          }),
          item => Array.isArray(item) && !item.length,
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
            map(
              componentsWithoutVoid,
              item => (Array.isArray(item) ? undefined : generateTsNode(item)),
            ),
          );
    }
  }
};
