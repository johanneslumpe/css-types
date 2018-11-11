import { generateTypeName } from './generateTypeName';

export function typeNameWithSuffix(key: string, suffix: string = '') {
  return `${generateTypeName(key)}${suffix}`;
}
