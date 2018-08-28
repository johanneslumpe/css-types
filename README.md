# css-types

![Build status](https://travis-ci.org/johanneslumpe/css-types.svg?branch=master)
[![codecov](https://codecov.io/gh/johanneslumpe/css-types/branch/master/graph/badge.svg)](https://codecov.io/gh/johanneslumpe/css-types)

Lexer for value declarations found at https://github.com/mdn/data/. It currently implements a subset of instructions, not the full spec.

As of now it supports:
* keywords
* data types
* functions
* groups
* combinators (`|`, `||`, ` `, `&&`)
* mutlipliers (`+`, `*`, `?`, `!`, `#`, `{}`)
* literal characters (`,`, `/`)

## Get it

`npm i @johanneslumpe/css-types`

## Use it

Below is a basic example of how to use the lexer:

```ts
import { lexValueDeclarationGrammar, formatTokens } from '@johanneslumpe/css-types';
const lexer = lexValueDeclarationGrammar(
  'hsl( <hue> <percentage> <percentage> [ / <alpha-value> ]? ) | hsl( <hue>, <percentage>, <percentage>, <alpha-value>? )',
);

// `formatToken` will return a pretty-printed version of the emitted tokens
// which is useful for easy inspection of the token result
console.log(formatTokens(lexer.emittedTokens));

// the above will log:
//
// hsl(                                                        FUNCTION (FUNCTION_START)
//   <hue>                                                     DATA_TYPE (BASIC)
//                                                             COMBINATOR (JUXTAPOSITION)
//   <percentage>                                              DATA_TYPE (BASIC)
//                                                             COMBINATOR (JUXTAPOSITION)
//   <percentage>                                              DATA_TYPE (BASIC)
//                                                             COMBINATOR (JUXTAPOSITION)
//   [                                                         GROUP (GROUP_START)
//     /                                                       LITERAL
//                                                             COMBINATOR (JUXTAPOSITION)
//     <alpha-value>                                           DATA_TYPE (BASIC)
//   ]                                                         GROUP (GROUP_END)
//   ?                                                         MULTIPLIER (QUESTION_MARK)
// )                                                           FUNCTION (FUNCTION_END)
// |                                                           COMBINATOR (SINGLE_BAR)
// hsl(                                                        FUNCTION (FUNCTION_START)
//   <hue>                                                     DATA_TYPE (BASIC)
//   ,                                                         LITERAL
//                                                             COMBINATOR (JUXTAPOSITION)
//   <percentage>                                              DATA_TYPE (BASIC)
//   ,                                                         LITERAL
//                                                             COMBINATOR (JUXTAPOSITION)
//   <percentage>                                              DATA_TYPE (BASIC)
//   ,                                                         LITERAL
//                                                             COMBINATOR (JUXTAPOSITION)
//   <alpha-value>                                             DATA_TYPE (BASIC)
//   ?                                                         MULTIPLIER (QUESTION_MARK)
// )                                                           FUNCTION (FUNCTION_END)
```

## Documentation

Typedocs can be found in [the docs folder](docs/README.md)