export function parenthesesToFunction(str: string) {
  return str.includes('()') ? str.replace('()', 'Function') : str;
}
