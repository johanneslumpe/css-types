import { reduce } from 'lodash/fp';
import { CSSUnitGroups } from 'mdn-data';
import units from 'mdn-data/css/units.json';

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
export const lengthValueTags: CSSUnitGroups[] = [
  'CSS Flexible Lengths',
  'CSS Lengths',
];

export interface IUnit {
  name: string;
  unit: string;
  brandKey?: string;
}

export function getUnits(tagsToFilterFor?: CSSUnitGroups[]) {
  return reduce(
    (acc, key) => {
      const lowerCaseKey = key.toLowerCase();
      const unit = units[key];
      if (
        tagsToFilterFor &&
        !unit.groups.some(value => tagsToFilterFor.includes(value))
      ) {
        return acc;
      }
      acc.push({
        name: unitToNameMap[lowerCaseKey] || lowerCaseKey,
        unit: lowerCaseKey,
      });

      return acc;
    },
    [] as IUnit[],
    Object.keys(units),
  );
}
