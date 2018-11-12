import { ICssTokenType } from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { INestedComponentArray } from '../types';

export function findDataTypeInTree(
  tree: INestedComponentArray,
  dataType: string,
): boolean {
  return tree.some(
    node =>
      Array.isArray(node)
        ? findDataTypeInTree(node, dataType)
        : node.type === ICssTokenType.DATA_TYPE &&
          node.value.includes(dataType),
  );
}
