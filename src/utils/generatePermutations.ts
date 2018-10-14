export function generatePermutations(
  arrays: string[][],
): Array<string | string[]> {
  if (!arrays.length) {
    return [[]];
  }

  const nestedResult = generatePermutations(arrays.slice(1));
  const result = [];

  for (const arr of arrays[0]) {
    for (const nested of nestedResult) {
      result.push(
        [arr, ...(Array.isArray(nested) ? nested : [nested])].join(' '),
      );
    }
  }

  return result;
}
