import { compact, reject, flatten } from 'lodash/fp';

import { IBaseLexToken } from '@johanneslumpe/basic-lexer';
import {
  formatTokens,
  IAdditionalTokenData,
  ICssMultiplierTokenType,
  ICssTokenType,
  ILexingError,
  lexValueDeclarationGrammar,
  ICssCombinatorTokenType,
  ICssGroupTokenType,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';

type CssValueDeclarationToken = IBaseLexToken<
  ICssTokenType | ILexingError,
  IAdditionalTokenData
>;

type CssValueDeclarationTokenWithoutErrors = IBaseLexToken<
  ICssTokenType,
  IAdditionalTokenData
>;

function doesNotContainLexingErrors(
  tokens: CssValueDeclarationToken[],
): tokens is CssValueDeclarationTokenWithoutErrors[] {
  return !tokens.find(token => token.type === ILexingError.LEXING_ERROR);
}

const literalType = (value: string) => ({
  type: 'LITERAL_TYPE',
  value,
});

// convert token array to nested group array

interface IGroup extends Array<any> {
  multiplier?: ICssMultiplierTokenType;
}

const nestGroups = (tokens: CssValueDeclarationToken[]) => {
  const result: any[] = [];
  let lastArr = result;
  let currentArr = result;
  let lastWasGroupMultiplier = false;
  tokens.forEach((token, index) => {
    if (lastWasGroupMultiplier) {
      lastWasGroupMultiplier = false;
      return;
    }
    if (token.type === ICssTokenType.GROUP) {
      if (
        !!token.data &&
        token.data.subType === ICssGroupTokenType.GROUP_START
      ) {
        const next: IGroup = [];
        currentArr.push(next);
        lastArr = currentArr;
        currentArr = next;
      } else {
        const prev = lastArr[lastArr.length - 1];
        const nextToken = tokens[index + 1];
        if (nextToken && nextToken.type === ICssTokenType.MULTIPLIER) {
          if (prev) {
            prev.multiplier = nextToken;
          }
          lastWasGroupMultiplier = true;
        }
        currentArr = lastArr;
      }
    } else {
      currentArr.push(token);
    }
  });

  return result;
};

export function generateUnionTypes(tokens: CssValueDeclarationToken[]): any[] {
  if (doesNotContainLexingErrors(tokens)) {
    const groups = nestGroups(tokens);
    console.log(groups);
    if (
      tokens
        .filter(t => t.type === ICssTokenType.COMBINATOR)
        .every(
          t =>
            !!t.data && t.data.subType === ICssCombinatorTokenType.DOUBLE_BAR,
        )
    ) {
      const onlyKeywords = reject(
        token => token.type !== ICssTokenType.KEYWORD,
        tokens,
      );
      return flatten(
        onlyKeywords.map((keywordToken, index, arr) => {
          const mapped: string[] = [keywordToken.value];
          for (let i = index; i < arr.length; i++) {
            const values = arr.slice(i, arr.length);
            mapped.push(
              values.reduce((str, value) => `${str} ${value.value}`, '').trim(),
            );
          }
          return mapped.map(value => literalType(value));
        }),
      );
    }
    return compact(
      tokens.map(token => {
        if (token.type === ICssTokenType.KEYWORD) {
          return literalType(token.value);
        }
        return undefined;
      }),
    );
  }

  throw new Error(
    'Cannot generate types for tokens because they contain lexing errors',
  );
}
