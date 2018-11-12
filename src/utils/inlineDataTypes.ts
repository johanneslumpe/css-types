import {
  ICssGroupTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

import { forEach, reverse } from 'lodash/fp';
import { RawToken, SyntaxLookupFn } from '../types';
import { generateDataTypeLookupKey } from './generateDataTypeLookupKey';
import { groupToken } from './stubTokens';

export function inlineDataTypes(
  parsedSyntax: RawToken[],
  lookup: SyntaxLookupFn,
  lastKey: string = '',
) {
  const cloned = [...parsedSyntax];
  let index;
  let lastIndex = -1;
  const indexes: number[] = [];
  do {
    index = cloned.findIndex((token, i) => {
      return i > lastIndex && token.type === ICssTokenType.DATA_TYPE;
    });
    if (index > -1) {
      indexes.push(index);
      lastIndex = index;
    }
  } while (index > -1);
  forEach(i => {
    const nestedKey = generateDataTypeLookupKey(parsedSyntax[i].value);
    // prevent infinite loops when encountering self-references
    if (nestedKey === lastKey) {
      return;
    }

    const nested = lookup(nestedKey);
    if (!nested) {
      throw new Error('invalid nesting encountered');
    }

    cloned.splice(
      i,
      1,
      groupToken('[', ICssGroupTokenType.GROUP_START),
      ...inlineDataTypes(nested, lookup, nestedKey),
      groupToken(']', ICssGroupTokenType.GROUP_END),
    );
  }, reverse(indexes));

  return cloned;
}
