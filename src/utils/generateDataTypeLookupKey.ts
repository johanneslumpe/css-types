export function generateDataTypeLookupKey(str: string) {
  return str.replace(/<\'?(.*?)\'?>/, '$1');
}
