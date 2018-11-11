import {
  ICssCombinatorTokenType,
  ICssGroupTokenType,
  ICssTokenType,
  ILexingError,
} from '@johanneslumpe/css-value-declaration-grammer-lexer';
import { find } from 'lodash/fp';

import {
  ComponentArray,
  ICombinatorGroup,
  IComponent,
  IComponentGroup,
  MultiplierToken,
  RawToken,
  Token,
} from '../types';
import { createCombinatorGroup } from './createCombinatorGroup';
import { createComponent } from './createComponent';
import { createComponentGroup } from './createComponentGroup';
import { getMultiplierForToken } from './getMultiplierForToken';

function isValidTokenArray(arr: RawToken[]): arr is Token[] {
  return !find(token => token.type === ILexingError.LEXING_ERROR, arr);
}

function isComponentGroup(value: any): value is IComponentGroup {
  return value && !!value.entities && value.type === ICssTokenType.GROUP;
}

function isCssMultiplierToken(value?: Token): value is MultiplierToken {
  return !!(value && value.type === ICssTokenType.MULTIPLIER);
}

export const convertRawTokensToComponents = (tokens: RawToken[]) => {
  if (isValidTokenArray(tokens)) {
    const root: ComponentArray = [];
    let current: IComponentGroup | ComponentArray = root;
    const stack: Array<IComponentGroup | ComponentArray> = [];

    const pushStack = (value: IComponentGroup | ComponentArray) =>
      stack.push(value);

    const pushCurrent = (
      value: IComponentGroup | IComponent | ICombinatorGroup,
    ) => {
      (isComponentGroup(current) ? current.entities : current).push(value);
    };

    for (let i = 0; i < tokens.length; i++) {
      const token: Token = tokens[i];
      if (token.type === ICssTokenType.GROUP) {
        if (
          token.data &&
          token.data.subType === ICssGroupTokenType.GROUP_START
        ) {
          const nested = createComponentGroup([]);
          pushCurrent(nested);
          pushStack(current);
          current = nested;
        } else {
          const lookAhead = tokens[i + 1];
          // consume and skip next token if it is a multiplier
          if (isCssMultiplierToken(lookAhead)) {
            const group = current as IComponentGroup;
            group.multiplier = getMultiplierForToken(lookAhead);
            i += 1;
          }

          const val = stack.pop();
          if (val) {
            current = val;
          }
        }
        continue;
      } else if (token.type === ICssTokenType.COMBINATOR) {
        const { data } = token;
        if (data && data.subType) {
          switch (data.subType) {
            case ICssCombinatorTokenType.DOUBLE_AMPERSAND:
            case ICssCombinatorTokenType.DOUBLE_BAR:
            case ICssCombinatorTokenType.JUXTAPOSITION:
            case ICssCombinatorTokenType.SINGLE_BAR:
              pushCurrent(createCombinatorGroup(data.subType, []));
              break;
            default:
              throw new Error(`Invalid combinator subtype: ${data.subType}`);
          }
        } else {
          throw new Error('Combinator token must contain subtype');
        }
      }

      const nextToken = tokens[i + 1];
      // consume and skip next token if it is a multiplier
      if (isCssMultiplierToken(nextToken)) {
        i += 1;
      }

      switch (token.type) {
        case ICssTokenType.KEYWORD:
        case ICssTokenType.DATA_TYPE: {
          pushCurrent(
            isCssMultiplierToken(nextToken)
              ? createComponent(token, nextToken)
              : createComponent(token),
          );
          break;
        }
      }
    }
    return root;
  } else {
    throw new Error('Invalid tokens provided');
  }
};
