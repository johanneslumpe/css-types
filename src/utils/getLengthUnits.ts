import units, { CSSUnitGroups } from 'mdn-data/css/units.json';

/**
 * Mapping of unit to name for units
 * which cannot be expressed in TS/JS due to them being keywords
 */
const unitToNameMap: { [unit: string]: string } = {
  in: 'Inch',
};

/**
 * The length value tags of values we want to create
 * helpers for
 */
const lengthValueTags: CSSUnitGroups[] = [
  'CSS Flexible Lengths',
  'CSS Lengths',
];

interface ILengthUnit {
  name: string;
  unit: string;
}

export function getLengthUnits() {
  return Object.keys(units).reduce(
    (acc, key) => {
      const lowerCaseKey = key.toLowerCase();
      const unit = units[key];
      if (unit.groups.some(value => lengthValueTags.includes(value))) {
        acc.push({
          name: unitToNameMap[lowerCaseKey] || lowerCaseKey,
          unit: lowerCaseKey,
        });
      }

      return acc;
    },
    [] as ILengthUnit[],
  );
}
