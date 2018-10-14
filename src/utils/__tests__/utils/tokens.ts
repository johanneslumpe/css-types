import {
  IAdditionalTokenData,
  ICssMultiplierTokenType,
  ICssTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { CssTokenSubType } from '@johanneslumpe/css-value-declaration-grammer-lexer/lib/types';

export interface IFakeToken<T> {
  endPos: number;
  startPos: number;
  type: T;
  value: string;
  data?: IAdditionalTokenData;
}

export const fakeToken = <T>(
  value: string,
  type: T,
  subType?: CssTokenSubType,
): IFakeToken<T> => ({
  data: subType
    ? {
        subType,
      }
    : undefined,
  endPos: 0,
  startPos: 0,
  type,
  value,
});

export const keywordToken = (value: string) =>
  fakeToken(value, ICssTokenType.KEYWORD);

export const dataTypeToken = (value: string) =>
  fakeToken(value, ICssTokenType.DATA_TYPE);

export function multiplierToken(
  type: ICssMultiplierTokenType,
): IFakeToken<ICssTokenType.MULTIPLIER>;
export function multiplierToken(
  type: ICssMultiplierTokenType.CURLY_BRACES,
  value: string,
): IFakeToken<ICssTokenType.MULTIPLIER>;
export function multiplierToken(
  type: ICssMultiplierTokenType,
  value: string = '',
) {
  switch (type) {
    case ICssMultiplierTokenType.CURLY_BRACES:
      return fakeToken(value, ICssTokenType.MULTIPLIER, type);
    case ICssMultiplierTokenType.ASTERISK:
      return fakeToken('*', ICssTokenType.MULTIPLIER, type);
    case ICssMultiplierTokenType.EXCLAMATION_MARK:
      return fakeToken('!', ICssTokenType.MULTIPLIER, type);
    case ICssMultiplierTokenType.HASH_MARK:
      return fakeToken('#', ICssTokenType.MULTIPLIER, type);
    case ICssMultiplierTokenType.PLUS:
      return fakeToken('+', ICssTokenType.MULTIPLIER, type);
    case ICssMultiplierTokenType.QUESTION_MARK:
      return fakeToken('?', ICssTokenType.MULTIPLIER, type);
  }
}
