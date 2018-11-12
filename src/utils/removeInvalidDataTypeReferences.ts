import { difference, filter, forEach, map, omit } from 'lodash/fp';

import { IParsedSyntaxes } from '../types';
import { generateDataTypeLookupKey } from './generateDataTypeLookupKey';
import { isDataTypeToken } from './isDataTypeToken';

export function removeInvalidDataTypeReferences(
  obj: IParsedSyntaxes,
  availableTypes: string[],
  globalDataTypes: string[],
) {
  const allKeys = Object.keys(obj).concat(availableTypes);
  let keys: string[] = [];
  let newObject = { ...obj };

  do {
    const keysToRemove: string[] = [];
    forEach(key => {
      const parsedSyntax = newObject[key];
      const dataTypeKeys = map(
        token => generateDataTypeLookupKey(token.value),
        filter(isDataTypeToken, parsedSyntax),
      );
      const invalidDataTypes = filter(
        dataType => !globalDataTypes.includes(dataType),
        difference(dataTypeKeys, allKeys),
      );
      if (invalidDataTypes.length) {
        keysToRemove.push(key);
      }
    }, Object.keys(newObject));

    keys = keysToRemove;
    newObject = omit(keysToRemove, newObject);
  } while (keys.length);

  return newObject;
}
