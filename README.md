# css-types

![Build status](https://travis-ci.org/johanneslumpe/css-types.svg?branch=master)
[![codecov](https://codecov.io/gh/johanneslumpe/css-types/branch/master/graph/badge.svg)](https://codecov.io/gh/johanneslumpe/css-types)

This library provides TypeScript types for CSS properties. It uses data provided by [MDN](https://github.com/mdn/data/) to generate types. This project is similar to https://github.com/frenic/csstype, but differs in some key points:

1) Allow typing of dynamic user input for lengths and other custom inputs
2) Generate pre-combined types where possible, e.g. the `display` property
3) Usage of tuples to express non-combineable types
4) Exported types aren't exhaustive, only standard property types are generated

It has mainly been designed to generate types which could be consumed by https://github.com/johanneslumpe/styled-props which can natively work with the generated tuple types. Maybe others will find this helpful as well.

The type generation process itself works, but doesn't yet support all CSS features. E.g. functions are aliased to `string`, instead of an auto-generated helper function which would return a branded type.

All properties are suffixed with `Property` and combined types are suffixed with `Combined`, e.g. `DisplayProperty` and `DisplayPropertyCombined`.

## Get it

~~`npm i @johanneslumpe/css-types`~~ - not yet published

## Use it

TODO

## Documentation

Typedocs can be found in [the docs folder](docs/README.md)