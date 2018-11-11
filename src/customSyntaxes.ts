export const customSyntaxes = {
  // https://developer.mozilla.org/en-US/docs/Web/CSS/angle
  angle: {
    syntax: '<IDegValue> | <IGradValue> | <IRadValue> | <ITurnValue>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/color
  color: {
    syntax: '<string>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value
  flex: {
    syntax: '<IFrValue>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/frequency
  frequency: {
    syntax: '<IHzValue> | <IKhzValue>',
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
    syntax: '<IPercentageValue>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/resolution
  resolution: {
    syntax: '<IDpiValue> | <IDpcmValue> | <IDppxValue> | <i-x-value>',
  },
  shape: {
    syntax: '<string>',
  },
  // https://developer.mozilla.org/en-US/docs/Web/CSS/time
  time: {
    // hacky fix to get the interface name generation function
    // to play nice with single letter camel case
    syntax: '<i-s-value> | <IMsValue>',
  },
  'track-repeat': {
    syntax: '<string>',
  },
};
