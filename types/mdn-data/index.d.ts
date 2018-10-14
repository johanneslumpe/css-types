declare module 'mdn-data' {

}
declare module 'mdn-data/css/units.json' {
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
  interface IUnit {
    groups: CSSUnitGroups[];
    status: CSSStatus;
  }
  interface IUnits {
    [index: string]: IUnit;
  }
  const value: IUnits;
  export default value;
}

declare module 'mdn-data/css/syntaxes.json' {
  export interface IRawSyntax {
    syntax: string;
  }
  export interface IRawSyntaxes {
    [index: string]: IRawSyntax;
  }
  const value: IRawSyntaxes;
  export default value;
}

declare module 'mdn-data/css/properties.json' {
  export interface IRawSyntax {
    syntax: string;
  }
  export interface IRawSyntaxes {
    [index: string]: IRawSyntax;
  }
  const value: IRawSyntaxes;
  export default value;
}
