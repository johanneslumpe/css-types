export function generateUnitvalueInterface(name: string) {
  return `I${name.substr(0, 1).toUpperCase()}${name.substr(1)}Value`;
}
