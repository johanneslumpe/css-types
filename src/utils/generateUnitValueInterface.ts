export function generateUnitValueInterface(name: string) {
  return `${name.substr(0, 1).toUpperCase()}${name.substr(1)}Value`;
}
