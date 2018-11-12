import { filter, forEach, omit } from 'lodash/fp';

import { IParsedSyntaxes, RawToken } from '../types';
import { generateDataTypeLookupKey } from './generateDataTypeLookupKey';
import { isDataTypeToken } from './isDataTypeToken';
import { tokensContainUnsupportedSyntax } from './tokensContainUnsupportedSyntax';

export function removeCircularAndUnsupportedGrammar(
  sourceObject: IParsedSyntaxes,
  globalDataTypes: string[],
) {
  const keysPerSource = Object.keys(sourceObject);
  const keysToRemove: string[] = [];
  forEach(key => {
    if (globalDataTypes.includes(key)) {
      return;
    }

    const checkCircularKeys = (parsedSyntax: RawToken[]) => {
      if (tokensContainUnsupportedSyntax(parsedSyntax)) {
        return;
      }

      const dataTypes = filter(isDataTypeToken, parsedSyntax);

      forEach(dataType => {
        const dataTypeKey = generateDataTypeLookupKey(dataType.value);
        if (dataTypeKey === key) {
          keysToRemove.push(key);
          return;
        }

        if (
          !globalDataTypes.includes(dataTypeKey) &&
          sourceObject[dataTypeKey]
        ) {
          checkCircularKeys(sourceObject[dataTypeKey]);
        }
      }, dataTypes);
    };

    checkCircularKeys(sourceObject[key]);
  }, keysPerSource);
  return omit(keysToRemove, sourceObject);
}
