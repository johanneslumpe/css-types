import { IBaseLexToken } from '@johanneslumpe/basic-lexer';

import {
  formatTokens,
  IAdditionalTokenData,
  ICssCombinatorTokenType,
  ICssMultiplierTokenType,
  ICssTokenType,
  ILexingError,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

export type Token = IBaseLexToken<ICssTokenType, IAdditionalTokenData>;
export type MultiplierToken = IBaseLexToken<
  ICssTokenType.MULTIPLIER,
  IAdditionalTokenData
>;

export type RawToken = IBaseLexToken<
  ICssTokenType | ILexingError,
  IAdditionalTokenData
>;

export enum ComponentTypes {
  VOID = 'VOID',
}

export type BasicMultiplier =
  | ICssMultiplierTokenType.QUESTION_MARK
  | ICssMultiplierTokenType.HASH_MARK
  | ICssMultiplierTokenType.ASTERISK
  | ICssMultiplierTokenType.EXCLAMATION_MARK
  | ICssMultiplierTokenType.PLUS;

export interface IBasicMultiplier {
  type: BasicMultiplier;
}

export interface ICurlyBraceMultiplier {
  type: ICssMultiplierTokenType.CURLY_BRACES;
  min: number;
  max: number;
}

type TokenMultiplier = IBasicMultiplier | ICurlyBraceMultiplier;

export type TokenOrGroupArray = Array<
  ICombinatorGroup | IComponentGroup | IComponent
>;

export interface ICombinatorGroup {
  type: ICssTokenType.COMBINATOR;
  combinator: ICssCombinatorTokenType;
  entities: TokenOrGroupArray;
}

export interface IComponentGroup {
  type: ICssTokenType.GROUP;
  multiplier?: TokenMultiplier;
  entities: TokenOrGroupArray;
}

export interface IComponent {
  type: ICssTokenType.KEYWORD | ICssTokenType.DATA_TYPE | ComponentTypes.VOID;
  multiplier?: TokenMultiplier;
  value: string;
}

export interface IFunction {
  type: ICssTokenType.FUNCTION;
  arguments: null;
}

export type ComponentArray = Array<
  IComponent | IComponentGroup | ICombinatorGroup
>;

export enum ComponentTypeRepresentation {
  NONE,
  UNION,
  TUPLE,
}
export interface INestedComponentArray
  extends Array<IComponent | INestedComponentArray> {
  representation?: ComponentTypeRepresentation;
}
