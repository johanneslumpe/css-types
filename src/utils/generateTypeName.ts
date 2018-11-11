import { camelCase, upperFirst } from 'lodash/fp';
export function generateTypeName(str: string) {
  return upperFirst(camelCase(str));
}
