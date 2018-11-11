declare module 'mdn-data' {
  export interface IRawSyntax {
    syntax: string;
  }
  export interface IRawSyntaxes {
    [index: string]: IRawSyntax;
  }

  export type CSSUnitGroups =
    | 'CSS Units'
    | 'CSS Lengths'
    | 'CSS Angles'
    | 'CSS Resolutions'
    | 'CSS Flexible Lengths'
    | 'CSS Grid Layout'
    | 'CSS Frequencies'
    | 'CSS Times';

  export type CSSStatus = 'standard' | 'experimental';

  export interface ITypes {
    [index: string]: {
      groups: string[];
    };
  }

  export interface IUnit {
    groups: CSSUnitGroups[];
    status: CSSStatus;
  }

  export interface IUnits {
    [index: string]: IUnit;
  }

  export type PropertyStatus = 'standard' | 'nonstandard' | 'experimental';

  export interface IRawProperty extends IRawSyntax {
    status: PropertyStatus;
  }

  export interface IRawProperties {
    [index: string]: IRawProperty;
  }
}

declare module 'mdn-data/css/units.json' {
  import { IUnits } from 'mdn-data';

  const value: IUnits;
  export default value;
}

declare module 'mdn-data/css/syntaxes.json' {
  import { IRawSyntaxes } from 'mdn-data';
  const value: IRawSyntaxes;
  export default value;
}

declare module 'mdn-data/css/properties.json' {
  import { IRawProperties } from 'mdn-data';

  const value: IRawProperties;
  export default value;
}

declare module 'mdn-data/css/types.json' {
  import { ITypes } from 'mdn-data';
  const value: ITypes;
  export default value;
}
