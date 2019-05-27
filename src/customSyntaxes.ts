import { GLOBAL_KEYWORDS, GLOBAL_KEYWORDS_DATA_TYPE } from './constants';

export const customSyntaxes = {
  // https://developer.mozilla.org/en-US/docs/Web/CSS/angle
  angle: {
    syntax: '<DegValue> | <GradValue> | <RadValue> | <TurnValue>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/color
  color: {
    syntax: '<string>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value
  flex: {
    syntax: '<FrValue>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/frequency
  frequency: {
    syntax: '<HzValue> | <KhzValue>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax#Keywords
  [GLOBAL_KEYWORDS_DATA_TYPE]: {
    syntax: GLOBAL_KEYWORDS.join(' | '),
  },
  'inset()': {
    syntax: '<string>',
  },
  integer: {
    syntax: '<number>',
  },
  number: {
    syntax: '<number>',
  },
  percentage: {
    syntax: '<PercentageValue>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/resolution
  resolution: {
    syntax: '<DpiValue> | <DpcmValue> | <DppxValue> | <x-value>',
  },
  shape: {
    syntax: '<string>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/time
  time: {
    // hacky fix to get the interface name generation function
    // to play nice with single letter camel case
    syntax: '<s-value> | <MsValue>',
  },
  'track-repeat': {
    syntax: '<string>',
  },
};
