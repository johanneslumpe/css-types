import {
  IChValue,
  ICmValue,
  IDegValue,
  IDpcmValue,
  IDpiValue,
  IDppxValue,
  IEmValue,
  IExValue,
  IFrValue,
  IGradValue,
  IHzValue,
  IInchValue,
  IKhzValue,
  IMmValue,
  IMsValue,
  IPcValue,
  IPercentageValue,
  IPtValue,
  IPxValue,
  IQValue,
  IRadValue,
  IRemValue,
  ISValue,
  ITurnValue,
  IVhValue,
  IVmaxValue,
  IVminValue,
  IVwValue,
  IXValue
} from './unitTypes';
export type Length =
  | IChValue
  | ICmValue
  | IEmValue
  | IExValue
  | IFrValue
  | IInchValue
  | IMmValue
  | IPcValue
  | IPtValue
  | IPxValue
  | IQValue
  | IRemValue
  | IVhValue
  | IVmaxValue
  | IVminValue
  | IVwValue;
export type AnPlusB = string;
export type CustomIdent = string;
export type Ident = string;
export type Ratio = string;
export type String = string;
export type TimingFunction = string;
export type Url = string;
export type Angle = IDegValue | IGradValue | IRadValue | ITurnValue;
export type Color = string;
export type Flex = IFrValue;
export type Frequency = IHzValue | IKhzValue;
export type InsetFunction = string;
export type Integer = number;
export type Number = number;
export type Percentage = IPercentageValue;
export type Resolution = IDpiValue | IDpcmValue | IDppxValue | IXValue;
export type Shape = string;
export type Time = ISValue | IMsValue;
export type TrackRepeat = string;
export type AbsoluteSize =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large';
export type AlphaValue = number | Percentage;
export type AnglePercentage = Angle | Percentage;
export type AnimateableFeature = 'scroll-position' | 'contents' | CustomIdent;
export type Attachment = 'scroll' | 'fixed' | 'local';
export type AttrMatcher = string;
export type AttrModifier = 'i';
export type AutoRepeat = string;
export type AutoTrackList = string;
export type BaselinePosition = 'baseline' | ['first', 'baseline'] | ['last', 'baseline'];
export type BasicShape = InsetFunction | CircleFunction | EllipseFunction | PolygonFunction;
export type BgImage = 'none' | Image;
export type BgLayer = string;
export type BgPosition<TLength = Length> =
  | 'left'
  | 'center'
  | 'right'
  | 'top'
  | 'bottom'
  | LengthPercentage<TLength>
  | ['left', 'top']
  | ['left', 'center']
  | ['left', 'bottom']
  | ['left', LengthPercentage<TLength>]
  | ['center', 'top']
  | ['center', 'center']
  | ['center', 'bottom']
  | ['center', LengthPercentage<TLength>]
  | ['right', 'top']
  | ['right', 'center']
  | ['right', 'bottom']
  | ['right', LengthPercentage<TLength>]
  | [LengthPercentage<TLength>, 'top']
  | [LengthPercentage<TLength>, 'center']
  | [LengthPercentage<TLength>, 'bottom']
  | [LengthPercentage<TLength>, LengthPercentage<TLength>]
  | ['center', 'center']
  | ['center', 'top']
  | ['center', 'top', LengthPercentage<TLength>]
  | ['center', 'bottom']
  | ['center', 'bottom', LengthPercentage<TLength>]
  | ['left', 'center']
  | ['left', 'top']
  | ['left', 'top', LengthPercentage<TLength>]
  | ['left', 'bottom']
  | ['left', 'bottom', LengthPercentage<TLength>]
  | ['left', LengthPercentage<TLength>, 'center']
  | ['left', LengthPercentage<TLength>, 'top']
  | ['left', LengthPercentage<TLength>, 'top', LengthPercentage<TLength>]
  | ['left', LengthPercentage<TLength>, 'bottom']
  | ['left', LengthPercentage<TLength>, 'bottom', LengthPercentage<TLength>]
  | ['right', 'center']
  | ['right', 'top']
  | ['right', 'top', LengthPercentage<TLength>]
  | ['right', 'bottom']
  | ['right', 'bottom', LengthPercentage<TLength>]
  | ['right', LengthPercentage<TLength>, 'center']
  | ['right', LengthPercentage<TLength>, 'top']
  | ['right', LengthPercentage<TLength>, 'top', LengthPercentage<TLength>]
  | ['right', LengthPercentage<TLength>, 'bottom']
  | ['right', LengthPercentage<TLength>, 'bottom', LengthPercentage<TLength>];
export type BgSize<TLength = Length> = LengthPercentage<TLength> | 'auto' | 'cover' | 'contain';
export type BlurFunction = string;
export type BlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';
export type Box = 'border-box' | 'padding-box' | 'content-box';
export type BrightnessFunction = string;
export type CalcFunction = string;
export type CalcSum = string;
export type CalcProduct = string;
export type CfFinalImage = Image | Color;
export type CfMixingImage = Image | [Percentage, Image];
export type CircleFunction = string;
export type ClipSource = Url;
export type ColorStop<TLength = Length> = Color | [Color, LengthPercentage<TLength>];
export type ColorStopList = string;
export type CommonLigValues = 'common-ligatures' | 'no-common-ligatures';
export type CompositeStyle =
  | 'clear'
  | 'copy'
  | 'source-over'
  | 'source-in'
  | 'source-out'
  | 'source-atop'
  | 'destination-over'
  | 'destination-in'
  | 'destination-out'
  | 'destination-atop'
  | 'xor';
export type CompositingOperator = 'add' | 'subtract' | 'intersect' | 'exclude';
export type ContextualAltValues = 'contextual' | 'no-contextual';
export type ContentDistribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
export type ContentList = string | 'contents' | Image | Quote | Target | LeaderFunction;
export type ContentPosition = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
export type ContentReplacement = Image;
export type ContrastFunction = string;
export type CounterStyle = string;
export type CounterStyleName = CustomIdent;
export type CrossFadeFunction = string;
export type CubicBezierTimingFunction = string;
export type DeprecatedSystemColor =
  | 'ActiveBorder'
  | 'ActiveCaption'
  | 'AppWorkspace'
  | 'Background'
  | 'ButtonFace'
  | 'ButtonHighlight'
  | 'ButtonShadow'
  | 'ButtonText'
  | 'CaptionText'
  | 'GrayText'
  | 'Highlight'
  | 'HighlightText'
  | 'InactiveBorder'
  | 'InactiveCaption'
  | 'InactiveCaptionText'
  | 'InfoBackground'
  | 'InfoText'
  | 'Menu'
  | 'MenuText'
  | 'Scrollbar'
  | 'ThreeDDarkShadow'
  | 'ThreeDFace'
  | 'ThreeDHighlight'
  | 'ThreeDLightShadow'
  | 'ThreeDShadow'
  | 'Window'
  | 'WindowFrame'
  | 'WindowText';
export type DiscretionaryLigValues = 'discretionary-ligatures' | 'no-discretionary-ligatures';
export type DisplayBox = 'contents' | 'none';
export type DisplayInside = 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'ruby';
export type DisplayInternal =
  | 'table-row-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-caption'
  | 'ruby-base'
  | 'ruby-text'
  | 'ruby-base-container'
  | 'ruby-text-container';
export type DisplayLegacy =
  | 'inline-block'
  | 'inline-list-item'
  | 'inline-table'
  | 'inline-flex'
  | 'inline-grid';
export type DisplayListitemCombined =
  | 'list-item'
  | 'flow list-item'
  | 'flow-root list-item'
  | 'block list-item'
  | 'block flow list-item'
  | 'block flow-root list-item'
  | 'inline list-item'
  | 'inline flow list-item'
  | 'inline flow-root list-item'
  | 'run-in list-item'
  | 'run-in flow list-item'
  | 'run-in flow-root list-item';
export type DisplayListitem =
  | 'list-item'
  | ['flow', 'list-item']
  | ['flow-root', 'list-item']
  | [DisplayOutside, 'list-item']
  | [DisplayOutside, 'flow', 'list-item']
  | [DisplayOutside, 'flow-root', 'list-item'];
export type DisplayOutside = 'block' | 'inline' | 'run-in';
export type DropShadowFunction = string;
export type EastAsianVariantValues =
  | 'jis78'
  | 'jis83'
  | 'jis90'
  | 'jis04'
  | 'simplified'
  | 'traditional';
export type EastAsianWidthValues = 'full-width' | 'proportional-width';
export type ElementFunction = string;
export type EllipseFunction = string;
export type EndingShape = 'circle' | 'ellipse';
export type ExplicitTrackList =
  | TrackSize
  | [TrackSize, LineNames]
  | [LineNames, TrackSize]
  | [LineNames, TrackSize, LineNames];
export type FamilyName = string | CustomIdent;
export type FeatureTagValue = string | [string, Integer] | [string, 'on'] | [string, 'off'];
export type FeatureType = string;
export type FeatureValueBlock = string;
export type FeatureValueBlockList = FeatureValueBlock;
export type FeatureValueDeclaration = string;
export type FeatureValueDeclarationList = FeatureValueDeclaration;
export type FeatureValueName = CustomIdent;
export type FillRule = 'nonzero' | 'evenodd';
export type FilterFunction =
  | BlurFunction
  | BrightnessFunction
  | ContrastFunction
  | DropShadowFunction
  | GrayscaleFunction
  | HueRotateFunction
  | InvertFunction
  | OpacityFunction
  | SaturateFunction
  | SepiaFunction;
export type FilterFunctionList = FilterFunction | Url;
export type FitContentFunction = string;
export type FixedBreadth<TLength = Length> = LengthPercentage<TLength>;
export type FixedSize = string;
export type FontStretchAbsolute =
  | 'normal'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded'
  | Percentage;
export type FontVariantCss21 = 'normal' | 'small-caps';
export type FontWeightAbsolute = 'normal' | 'bold' | number;
export type FramesTimingFunction = string;
export type FrequencyPercentage = Frequency | Percentage;
export type GenericFamily = 'serif' | 'sans-serif' | 'cursive' | 'fantasy' | 'monospace';
export type GenericName = 'serif' | 'sans-serif' | 'cursive' | 'fantasy' | 'monospace';
export type GeometryBoxCombined =
  | 'border-box'
  | 'padding-box'
  | 'content-box'
  | 'margin-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box';
export type GeometryBox = ShapeBox | 'fill-box' | 'stroke-box' | 'view-box';
export type Gradient =
  | LinearGradientFunction
  | RepeatingLinearGradientFunction
  | RadialGradientFunction
  | RepeatingRadialGradientFunction;
export type GrayscaleFunction = string;
export type GridLine =
  | 'auto'
  | CustomIdent
  | Integer
  | [Integer, CustomIdent]
  | ['span', CustomIdent]
  | ['span', Integer]
  | ['span', Integer, CustomIdent];
export type HistoricalLigValues = 'historical-ligatures' | 'no-historical-ligatures';
export type HslFunction = string;
export type HslaFunction = string;
export type Hue = number | Angle;
export type HueRotateFunction = string;
export type Image =
  | Url
  | ImageFunction
  | ImageSetFunction
  | ElementFunction
  | CrossFadeFunction
  | Gradient;
export type ImageFunction = string;
export type ImageSetFunction = string;
export type ImageSetOption = [Image, Resolution] | [string, Resolution];
export type InflexibleBreadth<TLength = Length> =
  | TLength
  | Percentage
  | 'min-content'
  | 'max-content'
  | 'auto';
export type InvertFunction = string;
export type KeyframesName = CustomIdent | string;
export type KeyframeBlock = string;
export type KeyframeBlockList = KeyframeBlock;
export type LeaderFunction = string;
export type LeaderType = 'dotted' | 'solid' | 'space' | string;
export type LengthPercentage<TLength = Length> = TLength | Percentage;
export type LineNames = string;
export type LineStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type LineWidth<TLength = Length> = TLength | 'thin' | 'medium' | 'thick';
export type LinearGradientFunction = string;
export type MaskLayer = string;
export type MaskPosition<TLength = Length> =
  | LengthPercentage<TLength>
  | [LengthPercentage<TLength>, LengthPercentage<TLength>]
  | [LengthPercentage<TLength>, 'top']
  | [LengthPercentage<TLength>, 'center']
  | [LengthPercentage<TLength>, 'bottom']
  | 'left'
  | ['left', LengthPercentage<TLength>]
  | ['left', 'top']
  | ['left', 'center']
  | ['left', 'bottom']
  | 'center'
  | ['center', LengthPercentage<TLength>]
  | ['center', 'top']
  | ['center', 'center']
  | ['center', 'bottom']
  | 'right'
  | ['right', LengthPercentage<TLength>]
  | ['right', 'top']
  | ['right', 'center']
  | ['right', 'bottom'];
export type MaskReference = 'none' | Image | MaskSource;
export type MaskSource = Url;
export type MaskingMode = 'alpha' | 'luminance' | 'match-source';
export type MatrixFunction = string;
export type Matrix3DFunction = string;
export type MediaAnd = [MediaInParens, 'and', MediaInParens];
export type MediaCondition = MediaNot | MediaAnd | MediaOr | MediaInParens;
export type MediaConditionWithoutOr = MediaNot | MediaAnd | MediaInParens;
export type MediaFeature = string;
export type MediaInParens = string;
export type MediaNot = ['not', MediaInParens];
export type MediaOr = [MediaInParens, 'or', MediaInParens];
export type MediaQuery =
  | MediaCondition
  | MediaType
  | [MediaType, 'and', MediaConditionWithoutOr]
  | ['not', MediaType]
  | ['not', MediaType, 'and', MediaConditionWithoutOr]
  | ['only', MediaType]
  | ['only', MediaType, 'and', MediaConditionWithoutOr];
export type MediaQueryList = string;
export type MediaType = Ident;
export type MfBoolean = MfName;
export type MfName = Ident;
export type MfPlain = string;
export type MfRange = string;
export type MinmaxFunction = string;
export type NamedColor =
  | 'transparent'
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whitesmoke'
  | 'yellow'
  | 'yellowgreen';
export type NamespacePrefix = Ident;
export type NumberPercentage = number | Percentage;
export type NumericFigureValues = 'lining-nums' | 'oldstyle-nums';
export type NumericFractionValues = 'diagonal-fractions' | 'stacked-fractions';
export type NumericSpacingValues = 'proportional-nums' | 'tabular-nums';
export type Nth = AnPlusB | 'even' | 'odd';
export type OpacityFunction = string;
export type OverflowPosition = 'unsafe' | 'safe';
export type OutlineRadius<TLength = Length> = TLength | Percentage;
export type PageMarginBox = string;
export type PageMarginBoxType = string;
export type PerspectiveFunction = string;
export type PolygonFunction = string;
export type Position<TLength = Length> =
  | 'top'
  | 'center'
  | 'bottom'
  | 'left'
  | ['left', 'top']
  | ['left', 'center']
  | ['left', 'bottom']
  | 'center'
  | ['center', 'top']
  | ['center', 'center']
  | ['center', 'bottom']
  | 'right'
  | ['right', 'top']
  | ['right', 'center']
  | ['right', 'bottom']
  | 'left'
  | ['left', 'top']
  | ['left', 'center']
  | ['left', 'bottom']
  | ['left', LengthPercentage<TLength>]
  | 'center'
  | ['center', 'top']
  | ['center', 'center']
  | ['center', 'bottom']
  | ['center', LengthPercentage<TLength>]
  | 'right'
  | ['right', 'top']
  | ['right', 'center']
  | ['right', 'bottom']
  | ['right', LengthPercentage<TLength>]
  | LengthPercentage<TLength>
  | [LengthPercentage<TLength>, 'top']
  | [LengthPercentage<TLength>, 'center']
  | [LengthPercentage<TLength>, 'bottom']
  | [LengthPercentage<TLength>, LengthPercentage<TLength>]
  | ['left', LengthPercentage<TLength>, 'top', LengthPercentage<TLength>]
  | ['left', LengthPercentage<TLength>, 'bottom', LengthPercentage<TLength>]
  | ['right', LengthPercentage<TLength>, 'top', LengthPercentage<TLength>]
  | ['right', LengthPercentage<TLength>, 'bottom', LengthPercentage<TLength>];
export type PseudoPage = string;
export type Quote = 'open-quote' | 'close-quote' | 'no-open-quote' | 'no-close-quote';
export type RadialGradientFunction = string;
export type RelativeSize = 'larger' | 'smaller';
export type RepeatStyle = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat';
export type RepeatingLinearGradientFunction = string;
export type RepeatingRadialGradientFunction = string;
export type RgbFunction = string;
export type RgbaFunction = string;
export type RotateFunction = string;
export type Rotate3DFunction = string;
export type RotateXFunction = string;
export type RotateYFunction = string;
export type RotateZFunction = string;
export type SaturateFunction = string;
export type ScaleFunction = string;
export type Scale3DFunction = string;
export type ScaleXFunction = string;
export type ScaleYFunction = string;
export type ScaleZFunction = string;
export type SelfPosition =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end';
export type ShapeRadius<TLength = Length> =
  | LengthPercentage<TLength>
  | 'closest-side'
  | 'farthest-side';
export type SkewFunction = string;
export type SkewXFunction = string;
export type SkewYFunction = string;
export type SepiaFunction = string;
export type Shadow<TLength = Length> =
  | [TLength, TLength]
  | [TLength, TLength, Color]
  | [TLength, TLength, TLength]
  | [TLength, TLength, TLength, Color]
  | [TLength, TLength, TLength, TLength]
  | [TLength, TLength, TLength, TLength, Color]
  | ['inset', TLength, TLength]
  | ['inset', TLength, TLength, Color]
  | ['inset', TLength, TLength, TLength]
  | ['inset', TLength, TLength, TLength, Color]
  | ['inset', TLength, TLength, TLength, TLength]
  | ['inset', TLength, TLength, TLength, TLength, Color];
export type ShadowT<TLength = Length> =
  | [TLength, TLength]
  | [TLength, TLength, Color]
  | [TLength, TLength, TLength]
  | [TLength, TLength, TLength, Color];
export type ShapeBoxCombined = 'border-box' | 'padding-box' | 'content-box' | 'margin-box';
export type ShapeBox = Box | 'margin-box';
export type SideOrCorner =
  | 'top'
  | 'bottom'
  | 'left'
  | ['left', 'top']
  | ['left', 'bottom']
  | 'right'
  | ['right', 'top']
  | ['right', 'bottom'];
export type SingleAnimation =
  | 'none'
  | KeyframesName
  | SingleAnimationPlayState
  | [SingleAnimationPlayState, 'none']
  | [SingleAnimationPlayState, KeyframesName]
  | SingleAnimationFillMode
  | [SingleAnimationFillMode, 'none']
  | [SingleAnimationFillMode, KeyframesName]
  | [SingleAnimationFillMode, SingleAnimationPlayState]
  | [SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [SingleAnimationFillMode, SingleAnimationPlayState, KeyframesName]
  | SingleAnimationDirection
  | [SingleAnimationDirection, 'none']
  | [SingleAnimationDirection, KeyframesName]
  | [SingleAnimationDirection, SingleAnimationPlayState]
  | [SingleAnimationDirection, SingleAnimationPlayState, 'none']
  | [SingleAnimationDirection, SingleAnimationPlayState, KeyframesName]
  | [SingleAnimationDirection, SingleAnimationFillMode]
  | [SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [SingleAnimationDirection, SingleAnimationFillMode, KeyframesName]
  | [SingleAnimationDirection, SingleAnimationFillMode, SingleAnimationPlayState]
  | [SingleAnimationDirection, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [SingleAnimationDirection, SingleAnimationFillMode, SingleAnimationPlayState, KeyframesName]
  | SingleAnimationIterationCount
  | [SingleAnimationIterationCount, 'none']
  | [SingleAnimationIterationCount, KeyframesName]
  | [SingleAnimationIterationCount, SingleAnimationPlayState]
  | [SingleAnimationIterationCount, SingleAnimationPlayState, 'none']
  | [SingleAnimationIterationCount, SingleAnimationPlayState, KeyframesName]
  | [SingleAnimationIterationCount, SingleAnimationFillMode]
  | [SingleAnimationIterationCount, SingleAnimationFillMode, 'none']
  | [SingleAnimationIterationCount, SingleAnimationFillMode, KeyframesName]
  | [SingleAnimationIterationCount, SingleAnimationFillMode, SingleAnimationPlayState]
  | [SingleAnimationIterationCount, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [SingleAnimationIterationCount, SingleAnimationDirection]
  | [SingleAnimationIterationCount, SingleAnimationDirection, 'none']
  | [SingleAnimationIterationCount, SingleAnimationDirection, KeyframesName]
  | [SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationPlayState]
  | [SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationPlayState, 'none']
  | [
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationFillMode]
  | [SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | Time
  | [Time, 'none']
  | [Time, KeyframesName]
  | [Time, SingleAnimationPlayState]
  | [Time, SingleAnimationPlayState, 'none']
  | [Time, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleAnimationFillMode]
  | [Time, SingleAnimationFillMode, 'none']
  | [Time, SingleAnimationFillMode, KeyframesName]
  | [Time, SingleAnimationFillMode, SingleAnimationPlayState]
  | [Time, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [Time, SingleAnimationFillMode, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleAnimationDirection]
  | [Time, SingleAnimationDirection, 'none']
  | [Time, SingleAnimationDirection, KeyframesName]
  | [Time, SingleAnimationDirection, SingleAnimationPlayState]
  | [Time, SingleAnimationDirection, SingleAnimationPlayState, 'none']
  | [Time, SingleAnimationDirection, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleAnimationDirection, SingleAnimationFillMode]
  | [Time, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [Time, SingleAnimationDirection, SingleAnimationFillMode, KeyframesName]
  | [Time, SingleAnimationDirection, SingleAnimationFillMode, SingleAnimationPlayState]
  | [Time, SingleAnimationDirection, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleAnimationIterationCount]
  | [Time, SingleAnimationIterationCount, 'none']
  | [Time, SingleAnimationIterationCount, KeyframesName]
  | [Time, SingleAnimationIterationCount, SingleAnimationPlayState]
  | [Time, SingleAnimationIterationCount, SingleAnimationPlayState, 'none']
  | [Time, SingleAnimationIterationCount, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode]
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode, 'none']
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode, KeyframesName]
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode, SingleAnimationPlayState]
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, 'none']
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, KeyframesName]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationPlayState]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationFillMode]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | SingleTimingFunction
  | [SingleTimingFunction, 'none']
  | [SingleTimingFunction, KeyframesName]
  | [SingleTimingFunction, SingleAnimationPlayState]
  | [SingleTimingFunction, SingleAnimationPlayState, 'none']
  | [SingleTimingFunction, SingleAnimationPlayState, KeyframesName]
  | [SingleTimingFunction, SingleAnimationFillMode]
  | [SingleTimingFunction, SingleAnimationFillMode, 'none']
  | [SingleTimingFunction, SingleAnimationFillMode, KeyframesName]
  | [SingleTimingFunction, SingleAnimationFillMode, SingleAnimationPlayState]
  | [SingleTimingFunction, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [SingleTimingFunction, SingleAnimationFillMode, SingleAnimationPlayState, KeyframesName]
  | [SingleTimingFunction, SingleAnimationDirection]
  | [SingleTimingFunction, SingleAnimationDirection, 'none']
  | [SingleTimingFunction, SingleAnimationDirection, KeyframesName]
  | [SingleTimingFunction, SingleAnimationDirection, SingleAnimationPlayState]
  | [SingleTimingFunction, SingleAnimationDirection, SingleAnimationPlayState, 'none']
  | [SingleTimingFunction, SingleAnimationDirection, SingleAnimationPlayState, KeyframesName]
  | [SingleTimingFunction, SingleAnimationDirection, SingleAnimationFillMode]
  | [SingleTimingFunction, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [SingleTimingFunction, SingleAnimationDirection, SingleAnimationFillMode, KeyframesName]
  | [
      SingleTimingFunction,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      SingleTimingFunction,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      SingleTimingFunction,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [SingleTimingFunction, SingleAnimationIterationCount]
  | [SingleTimingFunction, SingleAnimationIterationCount, 'none']
  | [SingleTimingFunction, SingleAnimationIterationCount, KeyframesName]
  | [SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationPlayState]
  | [SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationPlayState, 'none']
  | [SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationPlayState, KeyframesName]
  | [SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationFillMode]
  | [SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationFillMode, 'none']
  | [SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationFillMode, KeyframesName]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationDirection]
  | [SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationDirection, 'none']
  | [SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationDirection, KeyframesName]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      'none'
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [SingleTimingFunction, Time]
  | [SingleTimingFunction, Time, 'none']
  | [SingleTimingFunction, Time, KeyframesName]
  | [SingleTimingFunction, Time, SingleAnimationPlayState]
  | [SingleTimingFunction, Time, SingleAnimationPlayState, 'none']
  | [SingleTimingFunction, Time, SingleAnimationPlayState, KeyframesName]
  | [SingleTimingFunction, Time, SingleAnimationFillMode]
  | [SingleTimingFunction, Time, SingleAnimationFillMode, 'none']
  | [SingleTimingFunction, Time, SingleAnimationFillMode, KeyframesName]
  | [SingleTimingFunction, Time, SingleAnimationFillMode, SingleAnimationPlayState]
  | [SingleTimingFunction, Time, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [SingleTimingFunction, Time, SingleAnimationFillMode, SingleAnimationPlayState, KeyframesName]
  | [SingleTimingFunction, Time, SingleAnimationDirection]
  | [SingleTimingFunction, Time, SingleAnimationDirection, 'none']
  | [SingleTimingFunction, Time, SingleAnimationDirection, KeyframesName]
  | [SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationPlayState]
  | [SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationPlayState, 'none']
  | [SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationPlayState, KeyframesName]
  | [SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationFillMode]
  | [SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationFillMode, KeyframesName]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [SingleTimingFunction, Time, SingleAnimationIterationCount]
  | [SingleTimingFunction, Time, SingleAnimationIterationCount, 'none']
  | [SingleTimingFunction, Time, SingleAnimationIterationCount, KeyframesName]
  | [SingleTimingFunction, Time, SingleAnimationIterationCount, SingleAnimationPlayState]
  | [SingleTimingFunction, Time, SingleAnimationIterationCount, SingleAnimationPlayState, 'none']
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [SingleTimingFunction, Time, SingleAnimationIterationCount, SingleAnimationFillMode]
  | [SingleTimingFunction, Time, SingleAnimationIterationCount, SingleAnimationFillMode, 'none']
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [SingleTimingFunction, Time, SingleAnimationIterationCount, SingleAnimationDirection]
  | [SingleTimingFunction, Time, SingleAnimationIterationCount, SingleAnimationDirection, 'none']
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      KeyframesName
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      'none'
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | Time
  | [Time, 'none']
  | [Time, KeyframesName]
  | [Time, SingleAnimationPlayState]
  | [Time, SingleAnimationPlayState, 'none']
  | [Time, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleAnimationFillMode]
  | [Time, SingleAnimationFillMode, 'none']
  | [Time, SingleAnimationFillMode, KeyframesName]
  | [Time, SingleAnimationFillMode, SingleAnimationPlayState]
  | [Time, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [Time, SingleAnimationFillMode, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleAnimationDirection]
  | [Time, SingleAnimationDirection, 'none']
  | [Time, SingleAnimationDirection, KeyframesName]
  | [Time, SingleAnimationDirection, SingleAnimationPlayState]
  | [Time, SingleAnimationDirection, SingleAnimationPlayState, 'none']
  | [Time, SingleAnimationDirection, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleAnimationDirection, SingleAnimationFillMode]
  | [Time, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [Time, SingleAnimationDirection, SingleAnimationFillMode, KeyframesName]
  | [Time, SingleAnimationDirection, SingleAnimationFillMode, SingleAnimationPlayState]
  | [Time, SingleAnimationDirection, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleAnimationIterationCount]
  | [Time, SingleAnimationIterationCount, 'none']
  | [Time, SingleAnimationIterationCount, KeyframesName]
  | [Time, SingleAnimationIterationCount, SingleAnimationPlayState]
  | [Time, SingleAnimationIterationCount, SingleAnimationPlayState, 'none']
  | [Time, SingleAnimationIterationCount, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode]
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode, 'none']
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode, KeyframesName]
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode, SingleAnimationPlayState]
  | [Time, SingleAnimationIterationCount, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, 'none']
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, KeyframesName]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationPlayState]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationFillMode]
  | [Time, SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, Time]
  | [Time, Time, 'none']
  | [Time, Time, KeyframesName]
  | [Time, Time, SingleAnimationPlayState]
  | [Time, Time, SingleAnimationPlayState, 'none']
  | [Time, Time, SingleAnimationPlayState, KeyframesName]
  | [Time, Time, SingleAnimationFillMode]
  | [Time, Time, SingleAnimationFillMode, 'none']
  | [Time, Time, SingleAnimationFillMode, KeyframesName]
  | [Time, Time, SingleAnimationFillMode, SingleAnimationPlayState]
  | [Time, Time, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [Time, Time, SingleAnimationFillMode, SingleAnimationPlayState, KeyframesName]
  | [Time, Time, SingleAnimationDirection]
  | [Time, Time, SingleAnimationDirection, 'none']
  | [Time, Time, SingleAnimationDirection, KeyframesName]
  | [Time, Time, SingleAnimationDirection, SingleAnimationPlayState]
  | [Time, Time, SingleAnimationDirection, SingleAnimationPlayState, 'none']
  | [Time, Time, SingleAnimationDirection, SingleAnimationPlayState, KeyframesName]
  | [Time, Time, SingleAnimationDirection, SingleAnimationFillMode]
  | [Time, Time, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [Time, Time, SingleAnimationDirection, SingleAnimationFillMode, KeyframesName]
  | [Time, Time, SingleAnimationDirection, SingleAnimationFillMode, SingleAnimationPlayState]
  | [
      Time,
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, Time, SingleAnimationIterationCount]
  | [Time, Time, SingleAnimationIterationCount, 'none']
  | [Time, Time, SingleAnimationIterationCount, KeyframesName]
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationPlayState]
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationPlayState, 'none']
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationPlayState, KeyframesName]
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationFillMode]
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationFillMode, 'none']
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationFillMode, KeyframesName]
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationFillMode, SingleAnimationPlayState]
  | [
      Time,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationDirection]
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationDirection, 'none']
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationDirection, KeyframesName]
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationPlayState]
  | [
      Time,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, Time, SingleAnimationIterationCount, SingleAnimationDirection, SingleAnimationFillMode]
  | [
      Time,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      'none'
    ]
  | [
      Time,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      Time,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      Time,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction]
  | [Time, SingleTimingFunction, 'none']
  | [Time, SingleTimingFunction, KeyframesName]
  | [Time, SingleTimingFunction, SingleAnimationPlayState]
  | [Time, SingleTimingFunction, SingleAnimationPlayState, 'none']
  | [Time, SingleTimingFunction, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleTimingFunction, SingleAnimationFillMode]
  | [Time, SingleTimingFunction, SingleAnimationFillMode, 'none']
  | [Time, SingleTimingFunction, SingleAnimationFillMode, KeyframesName]
  | [Time, SingleTimingFunction, SingleAnimationFillMode, SingleAnimationPlayState]
  | [Time, SingleTimingFunction, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [Time, SingleTimingFunction, SingleAnimationFillMode, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleTimingFunction, SingleAnimationDirection]
  | [Time, SingleTimingFunction, SingleAnimationDirection, 'none']
  | [Time, SingleTimingFunction, SingleAnimationDirection, KeyframesName]
  | [Time, SingleTimingFunction, SingleAnimationDirection, SingleAnimationPlayState]
  | [Time, SingleTimingFunction, SingleAnimationDirection, SingleAnimationPlayState, 'none']
  | [Time, SingleTimingFunction, SingleAnimationDirection, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleTimingFunction, SingleAnimationDirection, SingleAnimationFillMode]
  | [Time, SingleTimingFunction, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [Time, SingleTimingFunction, SingleAnimationDirection, SingleAnimationFillMode, KeyframesName]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction, SingleAnimationIterationCount]
  | [Time, SingleTimingFunction, SingleAnimationIterationCount, 'none']
  | [Time, SingleTimingFunction, SingleAnimationIterationCount, KeyframesName]
  | [Time, SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationPlayState]
  | [Time, SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationPlayState, 'none']
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationFillMode]
  | [Time, SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationFillMode, 'none']
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationDirection]
  | [Time, SingleTimingFunction, SingleAnimationIterationCount, SingleAnimationDirection, 'none']
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      KeyframesName
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction, Time]
  | [Time, SingleTimingFunction, Time, 'none']
  | [Time, SingleTimingFunction, Time, KeyframesName]
  | [Time, SingleTimingFunction, Time, SingleAnimationPlayState]
  | [Time, SingleTimingFunction, Time, SingleAnimationPlayState, 'none']
  | [Time, SingleTimingFunction, Time, SingleAnimationPlayState, KeyframesName]
  | [Time, SingleTimingFunction, Time, SingleAnimationFillMode]
  | [Time, SingleTimingFunction, Time, SingleAnimationFillMode, 'none']
  | [Time, SingleTimingFunction, Time, SingleAnimationFillMode, KeyframesName]
  | [Time, SingleTimingFunction, Time, SingleAnimationFillMode, SingleAnimationPlayState]
  | [Time, SingleTimingFunction, Time, SingleAnimationFillMode, SingleAnimationPlayState, 'none']
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction, Time, SingleAnimationDirection]
  | [Time, SingleTimingFunction, Time, SingleAnimationDirection, 'none']
  | [Time, SingleTimingFunction, Time, SingleAnimationDirection, KeyframesName]
  | [Time, SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationPlayState]
  | [Time, SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationPlayState, 'none']
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationFillMode]
  | [Time, SingleTimingFunction, Time, SingleAnimationDirection, SingleAnimationFillMode, 'none']
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction, Time, SingleAnimationIterationCount]
  | [Time, SingleTimingFunction, Time, SingleAnimationIterationCount, 'none']
  | [Time, SingleTimingFunction, Time, SingleAnimationIterationCount, KeyframesName]
  | [Time, SingleTimingFunction, Time, SingleAnimationIterationCount, SingleAnimationPlayState]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction, Time, SingleAnimationIterationCount, SingleAnimationFillMode]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [Time, SingleTimingFunction, Time, SingleAnimationIterationCount, SingleAnimationDirection]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      KeyframesName
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationPlayState,
      KeyframesName
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      KeyframesName
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      'none'
    ]
  | [
      Time,
      SingleTimingFunction,
      Time,
      SingleAnimationIterationCount,
      SingleAnimationDirection,
      SingleAnimationFillMode,
      SingleAnimationPlayState,
      KeyframesName
    ];
export type SingleAnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
export type SingleAnimationFillMode = 'none' | 'forwards' | 'backwards' | 'both';
export type SingleAnimationIterationCount = 'infinite' | number;
export type SingleAnimationPlayState = 'running' | 'paused';
export type SingleTimingFunction =
  | 'linear'
  | CubicBezierTimingFunction
  | StepTimingFunction
  | FramesTimingFunction;
export type SingleTransition =
  | Time
  | SingleTransitionTimingFunction
  | [SingleTransitionTimingFunction, Time]
  | Time
  | [Time, Time]
  | [Time, SingleTransitionTimingFunction]
  | [Time, SingleTransitionTimingFunction, Time]
  | 'none'
  | ['none', Time]
  | ['none', SingleTransitionTimingFunction]
  | ['none', SingleTransitionTimingFunction, Time]
  | ['none', Time]
  | ['none', Time, Time]
  | ['none', Time, SingleTransitionTimingFunction]
  | ['none', Time, SingleTransitionTimingFunction, Time]
  | SingleTransitionProperty
  | [SingleTransitionProperty, Time]
  | [SingleTransitionProperty, SingleTransitionTimingFunction]
  | [SingleTransitionProperty, SingleTransitionTimingFunction, Time]
  | [SingleTransitionProperty, Time]
  | [SingleTransitionProperty, Time, Time]
  | [SingleTransitionProperty, Time, SingleTransitionTimingFunction]
  | [SingleTransitionProperty, Time, SingleTransitionTimingFunction, Time];
export type SingleTransitionTimingFunction = SingleTimingFunction;
export type SingleTransitionProperty = 'all' | CustomIdent;
export type Size<TLength = Length> =
  | 'closest-side'
  | 'farthest-side'
  | 'closest-corner'
  | 'farthest-corner'
  | TLength
  | [LengthPercentage<TLength>, LengthPercentage<TLength>];
export type StepTimingFunction = string;
export type Symbol = string | Image | CustomIdent;
export type Target = TargetCounterFunction | TargetCountersFunction | TargetTextFunction;
export type TargetCounterFunction = string;
export type TargetCountersFunction = string;
export type TargetTextFunction = string;
export type TimePercentage = Time | Percentage;
export type TrackBreadth<TLength = Length> =
  | LengthPercentage<TLength>
  | Flex
  | 'min-content'
  | 'max-content'
  | 'auto';
export type TrackList =
  | TrackSize
  | [TrackSize, LineNames]
  | TrackRepeat
  | [TrackRepeat, LineNames]
  | [LineNames, TrackSize]
  | [LineNames, TrackSize, LineNames]
  | [LineNames, TrackRepeat]
  | [LineNames, TrackRepeat, LineNames];
export type TrackSize = string;
export type TransformFunction =
  | MatrixFunction
  | TranslateFunction
  | TranslateXFunction
  | TranslateYFunction
  | ScaleFunction
  | ScaleXFunction
  | ScaleYFunction
  | RotateFunction
  | SkewFunction
  | SkewXFunction
  | SkewYFunction
  | Matrix3DFunction
  | Translate3DFunction
  | TranslateZFunction
  | Scale3DFunction
  | ScaleZFunction
  | Rotate3DFunction
  | RotateXFunction
  | RotateYFunction
  | RotateZFunction
  | PerspectiveFunction;
export type TransformList = TransformFunction;
export type TranslateFunction = string;
export type Translate3DFunction = string;
export type TranslateXFunction = string;
export type TranslateYFunction = string;
export type TranslateZFunction = string;
export type TypeOrUnit = string;
export type ViewportLength<TLength = Length> = 'auto' | LengthPercentage<TLength>;
export type AlignContentPropertyCombined =
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe flex-start'
  | 'safe flex-end';
export type AlignContentProperty =
  | 'normal'
  | BaselinePosition
  | ContentDistribution
  | ContentPosition
  | [OverflowPosition, ContentPosition];
export type AlignItemsPropertyCombined =
  | 'normal'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe self-start'
  | 'unsafe self-end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe self-start'
  | 'safe self-end'
  | 'safe flex-start'
  | 'safe flex-end';
export type AlignItemsProperty =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | SelfPosition
  | [OverflowPosition, SelfPosition];
export type AlignSelfPropertyCombined =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe self-start'
  | 'unsafe self-end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe self-start'
  | 'safe self-end'
  | 'safe flex-start'
  | 'safe flex-end';
export type AlignSelfProperty =
  | 'auto'
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | SelfPosition
  | [OverflowPosition, SelfPosition];
export type AllProperty = 'initial' | 'inherit' | 'unset' | 'revert';
export type AnimationProperty = string;
export type AnimationDelayProperty = string;
export type AnimationDirectionProperty = string;
export type AnimationDurationProperty = string;
export type AnimationFillModeProperty = string;
export type AnimationIterationCountProperty = string;
export type AnimationNameProperty = string;
export type AnimationPlayStateProperty = string;
export type AnimationTimingFunctionProperty = string;
export type BackfaceVisibilityProperty = 'visible' | 'hidden';
export type BackgroundAttachmentProperty = string;
export type BackgroundBlendModeProperty = string;
export type BackgroundClipProperty = string;
export type BackgroundColorProperty = Color;
export type BackgroundImageProperty = string;
export type BackgroundOriginProperty = string;
export type BackgroundPositionProperty = string;
export type BackgroundRepeatProperty = string;
export type BackgroundSizeProperty = string;
export type BlockSizeProperty = WidthProperty;
export type BorderProperty =
  | Color
  | LineStyle
  | [LineStyle, Color]
  | LineWidth
  | [LineWidth, Color]
  | [LineWidth, LineStyle]
  | [LineWidth, LineStyle, Color];
export type BorderBlockEndProperty =
  | ColorProperty
  | BorderStyleProperty
  | [BorderStyleProperty, ColorProperty]
  | BorderWidthProperty
  | [BorderWidthProperty, ColorProperty]
  | [BorderWidthProperty, BorderStyleProperty]
  | [BorderWidthProperty, BorderStyleProperty, ColorProperty];
export type BorderBlockEndColorProperty = ColorProperty;
export type BorderBlockEndStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type BorderBlockEndStyleProperty = BorderStyleProperty;
export type BorderBlockEndWidthProperty = BorderWidthProperty;
export type BorderBlockStartProperty =
  | ColorProperty
  | BorderStyleProperty
  | [BorderStyleProperty, ColorProperty]
  | BorderWidthProperty
  | [BorderWidthProperty, ColorProperty]
  | [BorderWidthProperty, BorderStyleProperty]
  | [BorderWidthProperty, BorderStyleProperty, ColorProperty];
export type BorderBlockStartColorProperty = ColorProperty;
export type BorderBlockStartStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type BorderBlockStartStyleProperty = BorderStyleProperty;
export type BorderBlockStartWidthProperty = BorderWidthProperty;
export type BorderBottomProperty =
  | Color
  | LineStyle
  | [LineStyle, Color]
  | LineWidth
  | [LineWidth, Color]
  | [LineWidth, LineStyle]
  | [LineWidth, LineStyle, Color];
export type BorderBottomColorProperty = Color;
export type BorderBottomLeftRadiusProperty<TLength = Length> =
  | LengthPercentage<TLength>
  | [LengthPercentage<TLength>, LengthPercentage<TLength>];
export type BorderBottomRightRadiusProperty<TLength = Length> =
  | LengthPercentage<TLength>
  | [LengthPercentage<TLength>, LengthPercentage<TLength>];
export type BorderBottomStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type BorderBottomStyleProperty = LineStyle;
export type BorderBottomWidthProperty = LineWidth;
export type BorderCollapseProperty = 'collapse' | 'separate';
export type BorderColorProperty =
  | Color
  | [Color, Color]
  | [Color, Color, Color]
  | [Color, Color, Color, Color];
export type BorderImageProperty = string;
export type BorderImageOutsetProperty<TLength = Length> = TLength | number;
export type BorderImageRepeatProperty = 'stretch' | 'repeat' | 'round' | 'space';
export type BorderImageSliceProperty =
  | NumberPercentage
  | [NumberPercentage, 'fill']
  | [NumberPercentage, NumberPercentage]
  | [NumberPercentage, NumberPercentage, 'fill']
  | [NumberPercentage, NumberPercentage, NumberPercentage]
  | [NumberPercentage, NumberPercentage, NumberPercentage, 'fill']
  | [NumberPercentage, NumberPercentage, NumberPercentage, NumberPercentage]
  | [NumberPercentage, NumberPercentage, NumberPercentage, NumberPercentage, 'fill'];
export type BorderImageSourceProperty = 'none' | Image;
export type BorderImageWidthProperty<TLength = Length> =
  | LengthPercentage<TLength>
  | number
  | 'auto';
export type BorderInlineEndProperty =
  | ColorProperty
  | BorderStyleProperty
  | [BorderStyleProperty, ColorProperty]
  | BorderWidthProperty
  | [BorderWidthProperty, ColorProperty]
  | [BorderWidthProperty, BorderStyleProperty]
  | [BorderWidthProperty, BorderStyleProperty, ColorProperty];
export type BorderInlineEndColorProperty = ColorProperty;
export type BorderInlineEndStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type BorderInlineEndStyleProperty = BorderStyleProperty;
export type BorderInlineEndWidthProperty = BorderWidthProperty;
export type BorderInlineStartProperty =
  | ColorProperty
  | BorderStyleProperty
  | [BorderStyleProperty, ColorProperty]
  | BorderWidthProperty
  | [BorderWidthProperty, ColorProperty]
  | [BorderWidthProperty, BorderStyleProperty]
  | [BorderWidthProperty, BorderStyleProperty, ColorProperty];
export type BorderInlineStartColorProperty = ColorProperty;
export type BorderInlineStartStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type BorderInlineStartStyleProperty = BorderStyleProperty;
export type BorderInlineStartWidthProperty = BorderWidthProperty;
export type BorderLeftProperty =
  | Color
  | LineStyle
  | [LineStyle, Color]
  | LineWidth
  | [LineWidth, Color]
  | [LineWidth, LineStyle]
  | [LineWidth, LineStyle, Color];
export type BorderLeftColorProperty = Color;
export type BorderLeftStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type BorderLeftStyleProperty = LineStyle;
export type BorderLeftWidthProperty = LineWidth;
export type BorderRadiusProperty = string;
export type BorderRightProperty =
  | Color
  | LineStyle
  | [LineStyle, Color]
  | LineWidth
  | [LineWidth, Color]
  | [LineWidth, LineStyle]
  | [LineWidth, LineStyle, Color];
export type BorderRightColorProperty = Color;
export type BorderRightStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type BorderRightStyleProperty = LineStyle;
export type BorderRightWidthProperty = LineWidth;
export type BorderSpacingProperty<TLength = Length> = TLength | [TLength, TLength];
export type BorderStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type BorderStyleProperty =
  | LineStyle
  | [LineStyle, LineStyle]
  | [LineStyle, LineStyle, LineStyle]
  | [LineStyle, LineStyle, LineStyle, LineStyle];
export type BorderTopProperty =
  | Color
  | LineStyle
  | [LineStyle, Color]
  | LineWidth
  | [LineWidth, Color]
  | [LineWidth, LineStyle]
  | [LineWidth, LineStyle, Color];
export type BorderTopColorProperty = Color;
export type BorderTopLeftRadiusProperty<TLength = Length> =
  | LengthPercentage<TLength>
  | [LengthPercentage<TLength>, LengthPercentage<TLength>];
export type BorderTopRightRadiusProperty<TLength = Length> =
  | LengthPercentage<TLength>
  | [LengthPercentage<TLength>, LengthPercentage<TLength>];
export type BorderTopStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type BorderTopStyleProperty = LineStyle;
export type BorderTopWidthProperty = LineWidth;
export type BorderWidthProperty =
  | LineWidth
  | [LineWidth, LineWidth]
  | [LineWidth, LineWidth, LineWidth]
  | [LineWidth, LineWidth, LineWidth, LineWidth];
export type BottomProperty<TLength = Length> = TLength | Percentage | 'auto';
export type BoxDecorationBreakProperty = 'slice' | 'clone';
export type BoxShadowProperty = string;
export type BoxSizingProperty = 'content-box' | 'border-box';
export type BreakAfterProperty =
  | 'auto'
  | 'avoid'
  | 'avoid-page'
  | 'page'
  | 'left'
  | 'right'
  | 'recto'
  | 'verso'
  | 'avoid-column'
  | 'column'
  | 'avoid-region'
  | 'region';
export type BreakBeforeProperty =
  | 'auto'
  | 'avoid'
  | 'avoid-page'
  | 'page'
  | 'left'
  | 'right'
  | 'recto'
  | 'verso'
  | 'avoid-column'
  | 'column'
  | 'avoid-region'
  | 'region';
export type BreakInsideProperty = 'auto' | 'avoid' | 'avoid-page' | 'avoid-column' | 'avoid-region';
export type CaptionSideProperty =
  | 'top'
  | 'bottom'
  | 'block-start'
  | 'block-end'
  | 'inline-start'
  | 'inline-end';
export type CaretColorProperty = 'auto' | Color;
export type ClearProperty = 'none' | 'left' | 'right' | 'both' | 'inline-start' | 'inline-end';
export type ClipProperty = Shape | 'auto';
export type ClipPathProperty =
  | ClipSource
  | GeometryBox
  | BasicShape
  | [BasicShape, GeometryBox]
  | 'none';
export type ColorProperty = Color;
export type ColorAdjustProperty = 'economy' | 'exact';
export type ColumnCountProperty = Integer | 'auto';
export type ColumnFillProperty = 'auto' | 'balance' | 'balance-all';
export type ColumnGapProperty<TLength = Length> = 'normal' | LengthPercentage<TLength>;
export type ColumnRuleProperty =
  | ColumnRuleColorProperty
  | ColumnRuleStyleProperty
  | [ColumnRuleStyleProperty, ColumnRuleColorProperty]
  | ColumnRuleWidthProperty
  | [ColumnRuleWidthProperty, ColumnRuleColorProperty]
  | [ColumnRuleWidthProperty, ColumnRuleStyleProperty]
  | [ColumnRuleWidthProperty, ColumnRuleStyleProperty, ColumnRuleColorProperty];
export type ColumnRuleColorProperty = Color;
export type ColumnRuleStylePropertyCombined =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type ColumnRuleStyleProperty = BorderStyleProperty;
export type ColumnRuleWidthProperty = BorderWidthProperty;
export type ColumnSpanProperty = 'none' | 'all';
export type ColumnWidthProperty<TLength = Length> = TLength | 'auto';
export type ColumnsProperty =
  | ColumnCountProperty
  | ColumnWidthProperty
  | [ColumnWidthProperty, ColumnCountProperty];
export type ContentProperty = string;
export type CounterIncrementProperty = CustomIdent | [CustomIdent, Integer] | 'none';
export type CounterResetProperty = CustomIdent | [CustomIdent, Integer] | 'none';
export type DirectionProperty = 'ltr' | 'rtl';
export type DisplayPropertyCombined =
  | 'flow'
  | 'flow-root'
  | 'table'
  | 'flex'
  | 'grid'
  | 'ruby'
  | 'block'
  | 'block flow'
  | 'block flow-root'
  | 'block table'
  | 'block flex'
  | 'block grid'
  | 'block ruby'
  | 'inline'
  | 'inline flow'
  | 'inline flow-root'
  | 'inline table'
  | 'inline flex'
  | 'inline grid'
  | 'inline ruby'
  | 'run-in'
  | 'run-in flow'
  | 'run-in flow-root'
  | 'run-in table'
  | 'run-in flex'
  | 'run-in grid'
  | 'run-in ruby'
  | 'list-item'
  | 'flow list-item'
  | 'flow-root list-item'
  | 'block list-item'
  | 'block flow list-item'
  | 'block flow-root list-item'
  | 'inline list-item'
  | 'inline flow list-item'
  | 'inline flow-root list-item'
  | 'run-in list-item'
  | 'run-in flow list-item'
  | 'run-in flow-root list-item'
  | 'table-row-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-caption'
  | 'ruby-base'
  | 'ruby-text'
  | 'ruby-base-container'
  | 'ruby-text-container'
  | 'contents'
  | 'none'
  | 'inline-block'
  | 'inline-list-item'
  | 'inline-table'
  | 'inline-flex'
  | 'inline-grid';
export type DisplayProperty =
  | DisplayInside
  | DisplayOutside
  | [DisplayOutside, DisplayInside]
  | DisplayListitem
  | DisplayInternal
  | DisplayBox
  | DisplayLegacy;
export type EmptyCellsProperty = 'show' | 'hide';
export type FilterProperty = 'none' | FilterFunctionList;
export type FlexProperty =
  | 'none'
  | FlexBasisProperty
  | FlexGrowProperty
  | [FlexGrowProperty, FlexBasisProperty]
  | [FlexGrowProperty, FlexShrinkProperty]
  | [FlexGrowProperty, FlexShrinkProperty, FlexBasisProperty];
export type FlexBasisProperty = 'content' | WidthProperty;
export type FlexDirectionProperty = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexFlowPropertyCombined =
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'row'
  | 'row nowrap'
  | 'row wrap'
  | 'row wrap-reverse'
  | 'row-reverse'
  | 'row-reverse nowrap'
  | 'row-reverse wrap'
  | 'row-reverse wrap-reverse'
  | 'column'
  | 'column nowrap'
  | 'column wrap'
  | 'column wrap-reverse'
  | 'column-reverse'
  | 'column-reverse nowrap'
  | 'column-reverse wrap'
  | 'column-reverse wrap-reverse';
export type FlexFlowProperty =
  | FlexWrapProperty
  | FlexDirectionProperty
  | [FlexDirectionProperty, FlexWrapProperty];
export type FlexGrowProperty = number;
export type FlexShrinkProperty = number;
export type FlexWrapProperty = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FloatProperty = 'left' | 'right' | 'none' | 'inline-start' | 'inline-end';
export type FontProperty = string;
export type FontFamilyProperty = string;
export type FontFeatureSettingsProperty = string;
export type FontKerningProperty = 'auto' | 'normal' | 'none';
export type FontLanguageOverrideProperty = 'normal' | string;
export type FontOpticalSizingProperty = 'auto' | 'none';
export type FontSizeProperty<TLength = Length> =
  | AbsoluteSize
  | RelativeSize
  | LengthPercentage<TLength>;
export type FontSizeAdjustProperty = 'none' | number;
export type FontStretchProperty = FontStretchAbsolute;
export type FontStyleProperty = 'normal' | 'italic' | 'oblique' | ['oblique', Angle];
export type FontSynthesisProperty = 'none' | 'style' | 'weight' | ['weight', 'style'];
export type FontVariantProperty = string;
export type FontVariantAlternatesProperty = string;
export type FontVariantCapsProperty =
  | 'normal'
  | 'small-caps'
  | 'all-small-caps'
  | 'petite-caps'
  | 'all-petite-caps'
  | 'unicase'
  | 'titling-caps';
export type FontVariantEastAsianPropertyCombined =
  | 'normal'
  | 'ruby'
  | 'full-width'
  | 'full-width ruby'
  | 'proportional-width'
  | 'proportional-width ruby'
  | 'jis78'
  | 'jis78 ruby'
  | 'jis78 full-width'
  | 'jis78 full-width ruby'
  | 'jis78 proportional-width'
  | 'jis78 proportional-width ruby'
  | 'jis83'
  | 'jis83 ruby'
  | 'jis83 full-width'
  | 'jis83 full-width ruby'
  | 'jis83 proportional-width'
  | 'jis83 proportional-width ruby'
  | 'jis90'
  | 'jis90 ruby'
  | 'jis90 full-width'
  | 'jis90 full-width ruby'
  | 'jis90 proportional-width'
  | 'jis90 proportional-width ruby'
  | 'jis04'
  | 'jis04 ruby'
  | 'jis04 full-width'
  | 'jis04 full-width ruby'
  | 'jis04 proportional-width'
  | 'jis04 proportional-width ruby'
  | 'simplified'
  | 'simplified ruby'
  | 'simplified full-width'
  | 'simplified full-width ruby'
  | 'simplified proportional-width'
  | 'simplified proportional-width ruby'
  | 'traditional'
  | 'traditional ruby'
  | 'traditional full-width'
  | 'traditional full-width ruby'
  | 'traditional proportional-width'
  | 'traditional proportional-width ruby';
export type FontVariantEastAsianProperty =
  | 'normal'
  | 'ruby'
  | EastAsianWidthValues
  | [EastAsianWidthValues, 'ruby']
  | EastAsianVariantValues
  | [EastAsianVariantValues, 'ruby']
  | [EastAsianVariantValues, EastAsianWidthValues]
  | [EastAsianVariantValues, EastAsianWidthValues, 'ruby'];
export type FontVariantLigaturesPropertyCombined =
  | 'normal'
  | 'none'
  | 'contextual'
  | 'no-contextual'
  | 'historical-ligatures'
  | 'historical-ligatures contextual'
  | 'historical-ligatures no-contextual'
  | 'no-historical-ligatures'
  | 'no-historical-ligatures contextual'
  | 'no-historical-ligatures no-contextual'
  | 'discretionary-ligatures'
  | 'discretionary-ligatures contextual'
  | 'discretionary-ligatures no-contextual'
  | 'discretionary-ligatures historical-ligatures'
  | 'discretionary-ligatures historical-ligatures contextual'
  | 'discretionary-ligatures historical-ligatures no-contextual'
  | 'discretionary-ligatures no-historical-ligatures'
  | 'discretionary-ligatures no-historical-ligatures contextual'
  | 'discretionary-ligatures no-historical-ligatures no-contextual'
  | 'no-discretionary-ligatures'
  | 'no-discretionary-ligatures contextual'
  | 'no-discretionary-ligatures no-contextual'
  | 'no-discretionary-ligatures historical-ligatures'
  | 'no-discretionary-ligatures historical-ligatures contextual'
  | 'no-discretionary-ligatures historical-ligatures no-contextual'
  | 'no-discretionary-ligatures no-historical-ligatures'
  | 'no-discretionary-ligatures no-historical-ligatures contextual'
  | 'no-discretionary-ligatures no-historical-ligatures no-contextual'
  | 'common-ligatures'
  | 'common-ligatures contextual'
  | 'common-ligatures no-contextual'
  | 'common-ligatures historical-ligatures'
  | 'common-ligatures historical-ligatures contextual'
  | 'common-ligatures historical-ligatures no-contextual'
  | 'common-ligatures no-historical-ligatures'
  | 'common-ligatures no-historical-ligatures contextual'
  | 'common-ligatures no-historical-ligatures no-contextual'
  | 'common-ligatures discretionary-ligatures'
  | 'common-ligatures discretionary-ligatures contextual'
  | 'common-ligatures discretionary-ligatures no-contextual'
  | 'common-ligatures discretionary-ligatures historical-ligatures'
  | 'common-ligatures discretionary-ligatures historical-ligatures contextual'
  | 'common-ligatures discretionary-ligatures historical-ligatures no-contextual'
  | 'common-ligatures discretionary-ligatures no-historical-ligatures'
  | 'common-ligatures discretionary-ligatures no-historical-ligatures contextual'
  | 'common-ligatures discretionary-ligatures no-historical-ligatures no-contextual'
  | 'common-ligatures no-discretionary-ligatures'
  | 'common-ligatures no-discretionary-ligatures contextual'
  | 'common-ligatures no-discretionary-ligatures no-contextual'
  | 'common-ligatures no-discretionary-ligatures historical-ligatures'
  | 'common-ligatures no-discretionary-ligatures historical-ligatures contextual'
  | 'common-ligatures no-discretionary-ligatures historical-ligatures no-contextual'
  | 'common-ligatures no-discretionary-ligatures no-historical-ligatures'
  | 'common-ligatures no-discretionary-ligatures no-historical-ligatures contextual'
  | 'common-ligatures no-discretionary-ligatures no-historical-ligatures no-contextual'
  | 'no-common-ligatures'
  | 'no-common-ligatures contextual'
  | 'no-common-ligatures no-contextual'
  | 'no-common-ligatures historical-ligatures'
  | 'no-common-ligatures historical-ligatures contextual'
  | 'no-common-ligatures historical-ligatures no-contextual'
  | 'no-common-ligatures no-historical-ligatures'
  | 'no-common-ligatures no-historical-ligatures contextual'
  | 'no-common-ligatures no-historical-ligatures no-contextual'
  | 'no-common-ligatures discretionary-ligatures'
  | 'no-common-ligatures discretionary-ligatures contextual'
  | 'no-common-ligatures discretionary-ligatures no-contextual'
  | 'no-common-ligatures discretionary-ligatures historical-ligatures'
  | 'no-common-ligatures discretionary-ligatures historical-ligatures contextual'
  | 'no-common-ligatures discretionary-ligatures historical-ligatures no-contextual'
  | 'no-common-ligatures discretionary-ligatures no-historical-ligatures'
  | 'no-common-ligatures discretionary-ligatures no-historical-ligatures contextual'
  | 'no-common-ligatures discretionary-ligatures no-historical-ligatures no-contextual'
  | 'no-common-ligatures no-discretionary-ligatures'
  | 'no-common-ligatures no-discretionary-ligatures contextual'
  | 'no-common-ligatures no-discretionary-ligatures no-contextual'
  | 'no-common-ligatures no-discretionary-ligatures historical-ligatures'
  | 'no-common-ligatures no-discretionary-ligatures historical-ligatures contextual'
  | 'no-common-ligatures no-discretionary-ligatures historical-ligatures no-contextual'
  | 'no-common-ligatures no-discretionary-ligatures no-historical-ligatures'
  | 'no-common-ligatures no-discretionary-ligatures no-historical-ligatures contextual'
  | 'no-common-ligatures no-discretionary-ligatures no-historical-ligatures no-contextual';
export type FontVariantLigaturesProperty =
  | 'normal'
  | 'none'
  | ContextualAltValues
  | HistoricalLigValues
  | [HistoricalLigValues, ContextualAltValues]
  | DiscretionaryLigValues
  | [DiscretionaryLigValues, ContextualAltValues]
  | [DiscretionaryLigValues, HistoricalLigValues]
  | [DiscretionaryLigValues, HistoricalLigValues, ContextualAltValues]
  | CommonLigValues
  | [CommonLigValues, ContextualAltValues]
  | [CommonLigValues, HistoricalLigValues]
  | [CommonLigValues, HistoricalLigValues, ContextualAltValues]
  | [CommonLigValues, DiscretionaryLigValues]
  | [CommonLigValues, DiscretionaryLigValues, ContextualAltValues]
  | [CommonLigValues, DiscretionaryLigValues, HistoricalLigValues]
  | [CommonLigValues, DiscretionaryLigValues, HistoricalLigValues, ContextualAltValues];
export type FontVariantNumericPropertyCombined =
  | 'normal'
  | 'slashed-zero'
  | 'ordinal'
  | 'ordinal slashed-zero'
  | 'diagonal-fractions'
  | 'diagonal-fractions slashed-zero'
  | 'diagonal-fractions ordinal'
  | 'diagonal-fractions ordinal slashed-zero'
  | 'stacked-fractions'
  | 'stacked-fractions slashed-zero'
  | 'stacked-fractions ordinal'
  | 'stacked-fractions ordinal slashed-zero'
  | 'proportional-nums'
  | 'proportional-nums slashed-zero'
  | 'proportional-nums ordinal'
  | 'proportional-nums ordinal slashed-zero'
  | 'proportional-nums diagonal-fractions'
  | 'proportional-nums diagonal-fractions slashed-zero'
  | 'proportional-nums diagonal-fractions ordinal'
  | 'proportional-nums diagonal-fractions ordinal slashed-zero'
  | 'proportional-nums stacked-fractions'
  | 'proportional-nums stacked-fractions slashed-zero'
  | 'proportional-nums stacked-fractions ordinal'
  | 'proportional-nums stacked-fractions ordinal slashed-zero'
  | 'tabular-nums'
  | 'tabular-nums slashed-zero'
  | 'tabular-nums ordinal'
  | 'tabular-nums ordinal slashed-zero'
  | 'tabular-nums diagonal-fractions'
  | 'tabular-nums diagonal-fractions slashed-zero'
  | 'tabular-nums diagonal-fractions ordinal'
  | 'tabular-nums diagonal-fractions ordinal slashed-zero'
  | 'tabular-nums stacked-fractions'
  | 'tabular-nums stacked-fractions slashed-zero'
  | 'tabular-nums stacked-fractions ordinal'
  | 'tabular-nums stacked-fractions ordinal slashed-zero'
  | 'lining-nums'
  | 'lining-nums slashed-zero'
  | 'lining-nums ordinal'
  | 'lining-nums ordinal slashed-zero'
  | 'lining-nums diagonal-fractions'
  | 'lining-nums diagonal-fractions slashed-zero'
  | 'lining-nums diagonal-fractions ordinal'
  | 'lining-nums diagonal-fractions ordinal slashed-zero'
  | 'lining-nums stacked-fractions'
  | 'lining-nums stacked-fractions slashed-zero'
  | 'lining-nums stacked-fractions ordinal'
  | 'lining-nums stacked-fractions ordinal slashed-zero'
  | 'lining-nums proportional-nums'
  | 'lining-nums proportional-nums slashed-zero'
  | 'lining-nums proportional-nums ordinal'
  | 'lining-nums proportional-nums ordinal slashed-zero'
  | 'lining-nums proportional-nums diagonal-fractions'
  | 'lining-nums proportional-nums diagonal-fractions slashed-zero'
  | 'lining-nums proportional-nums diagonal-fractions ordinal'
  | 'lining-nums proportional-nums diagonal-fractions ordinal slashed-zero'
  | 'lining-nums proportional-nums stacked-fractions'
  | 'lining-nums proportional-nums stacked-fractions slashed-zero'
  | 'lining-nums proportional-nums stacked-fractions ordinal'
  | 'lining-nums proportional-nums stacked-fractions ordinal slashed-zero'
  | 'lining-nums tabular-nums'
  | 'lining-nums tabular-nums slashed-zero'
  | 'lining-nums tabular-nums ordinal'
  | 'lining-nums tabular-nums ordinal slashed-zero'
  | 'lining-nums tabular-nums diagonal-fractions'
  | 'lining-nums tabular-nums diagonal-fractions slashed-zero'
  | 'lining-nums tabular-nums diagonal-fractions ordinal'
  | 'lining-nums tabular-nums diagonal-fractions ordinal slashed-zero'
  | 'lining-nums tabular-nums stacked-fractions'
  | 'lining-nums tabular-nums stacked-fractions slashed-zero'
  | 'lining-nums tabular-nums stacked-fractions ordinal'
  | 'lining-nums tabular-nums stacked-fractions ordinal slashed-zero'
  | 'oldstyle-nums'
  | 'oldstyle-nums slashed-zero'
  | 'oldstyle-nums ordinal'
  | 'oldstyle-nums ordinal slashed-zero'
  | 'oldstyle-nums diagonal-fractions'
  | 'oldstyle-nums diagonal-fractions slashed-zero'
  | 'oldstyle-nums diagonal-fractions ordinal'
  | 'oldstyle-nums diagonal-fractions ordinal slashed-zero'
  | 'oldstyle-nums stacked-fractions'
  | 'oldstyle-nums stacked-fractions slashed-zero'
  | 'oldstyle-nums stacked-fractions ordinal'
  | 'oldstyle-nums stacked-fractions ordinal slashed-zero'
  | 'oldstyle-nums proportional-nums'
  | 'oldstyle-nums proportional-nums slashed-zero'
  | 'oldstyle-nums proportional-nums ordinal'
  | 'oldstyle-nums proportional-nums ordinal slashed-zero'
  | 'oldstyle-nums proportional-nums diagonal-fractions'
  | 'oldstyle-nums proportional-nums diagonal-fractions slashed-zero'
  | 'oldstyle-nums proportional-nums diagonal-fractions ordinal'
  | 'oldstyle-nums proportional-nums diagonal-fractions ordinal slashed-zero'
  | 'oldstyle-nums proportional-nums stacked-fractions'
  | 'oldstyle-nums proportional-nums stacked-fractions slashed-zero'
  | 'oldstyle-nums proportional-nums stacked-fractions ordinal'
  | 'oldstyle-nums proportional-nums stacked-fractions ordinal slashed-zero'
  | 'oldstyle-nums tabular-nums'
  | 'oldstyle-nums tabular-nums slashed-zero'
  | 'oldstyle-nums tabular-nums ordinal'
  | 'oldstyle-nums tabular-nums ordinal slashed-zero'
  | 'oldstyle-nums tabular-nums diagonal-fractions'
  | 'oldstyle-nums tabular-nums diagonal-fractions slashed-zero'
  | 'oldstyle-nums tabular-nums diagonal-fractions ordinal'
  | 'oldstyle-nums tabular-nums diagonal-fractions ordinal slashed-zero'
  | 'oldstyle-nums tabular-nums stacked-fractions'
  | 'oldstyle-nums tabular-nums stacked-fractions slashed-zero'
  | 'oldstyle-nums tabular-nums stacked-fractions ordinal'
  | 'oldstyle-nums tabular-nums stacked-fractions ordinal slashed-zero';
export type FontVariantNumericProperty =
  | 'normal'
  | 'slashed-zero'
  | 'ordinal'
  | ['ordinal', 'slashed-zero']
  | NumericFractionValues
  | [NumericFractionValues, 'slashed-zero']
  | [NumericFractionValues, 'ordinal']
  | [NumericFractionValues, 'ordinal', 'slashed-zero']
  | NumericSpacingValues
  | [NumericSpacingValues, 'slashed-zero']
  | [NumericSpacingValues, 'ordinal']
  | [NumericSpacingValues, 'ordinal', 'slashed-zero']
  | [NumericSpacingValues, NumericFractionValues]
  | [NumericSpacingValues, NumericFractionValues, 'slashed-zero']
  | [NumericSpacingValues, NumericFractionValues, 'ordinal']
  | [NumericSpacingValues, NumericFractionValues, 'ordinal', 'slashed-zero']
  | NumericFigureValues
  | [NumericFigureValues, 'slashed-zero']
  | [NumericFigureValues, 'ordinal']
  | [NumericFigureValues, 'ordinal', 'slashed-zero']
  | [NumericFigureValues, NumericFractionValues]
  | [NumericFigureValues, NumericFractionValues, 'slashed-zero']
  | [NumericFigureValues, NumericFractionValues, 'ordinal']
  | [NumericFigureValues, NumericFractionValues, 'ordinal', 'slashed-zero']
  | [NumericFigureValues, NumericSpacingValues]
  | [NumericFigureValues, NumericSpacingValues, 'slashed-zero']
  | [NumericFigureValues, NumericSpacingValues, 'ordinal']
  | [NumericFigureValues, NumericSpacingValues, 'ordinal', 'slashed-zero']
  | [NumericFigureValues, NumericSpacingValues, NumericFractionValues]
  | [NumericFigureValues, NumericSpacingValues, NumericFractionValues, 'slashed-zero']
  | [NumericFigureValues, NumericSpacingValues, NumericFractionValues, 'ordinal']
  | [NumericFigureValues, NumericSpacingValues, NumericFractionValues, 'ordinal', 'slashed-zero'];
export type FontVariantPositionProperty = 'normal' | 'sub' | 'super';
export type FontWeightProperty = FontWeightAbsolute | 'bolder' | 'lighter';
export type GapProperty = RowGapProperty | [RowGapProperty, ColumnGapProperty];
export type GridProperty = string;
export type GridAreaProperty = string;
export type GridAutoColumnsProperty = TrackSize;
export type GridAutoFlowProperty =
  | 'dense'
  | 'row'
  | ['row', 'dense']
  | 'column'
  | ['column', 'dense'];
export type GridAutoRowsProperty = TrackSize;
export type GridColumnProperty = string;
export type GridColumnEndProperty = GridLine;
export type GridColumnStartProperty = GridLine;
export type GridRowProperty = string;
export type GridRowEndProperty = GridLine;
export type GridRowStartProperty = GridLine;
export type GridTemplateProperty = string;
export type GridTemplateAreasProperty = 'none' | string;
export type GridTemplateColumnsProperty = 'none' | TrackList | AutoTrackList;
export type GridTemplateRowsProperty = 'none' | TrackList | AutoTrackList;
export type HangingPunctuationProperty =
  | 'none'
  | 'last'
  | 'force-end'
  | ['force-end', 'last']
  | 'allow-end'
  | ['allow-end', 'last']
  | 'first'
  | ['first', 'last']
  | ['first', 'force-end']
  | ['first', 'force-end', 'last']
  | ['first', 'allow-end']
  | ['first', 'allow-end', 'last'];
export type HeightProperty<TLength = Length> =
  | TLength
  | [TLength, 'border-box']
  | [TLength, 'content-box']
  | Percentage
  | [Percentage, 'border-box']
  | [Percentage, 'content-box']
  | 'available'
  | 'min-content'
  | 'max-content'
  | 'fit-content'
  | 'auto';
export type HyphensProperty = 'none' | 'manual' | 'auto';
export type ImageOrientationProperty = 'from-image' | Angle | 'flip' | [Angle, 'flip'];
export type ImageRenderingProperty = 'auto' | 'crisp-edges' | 'pixelated';
export type InlineSizeProperty = WidthProperty;
export type InsetBlockEndProperty = LeftProperty;
export type InsetBlockStartProperty = LeftProperty;
export type InsetInlineEndProperty = LeftProperty;
export type InsetInlineStartProperty = LeftProperty;
export type IsolationProperty = 'auto' | 'isolate';
export type JustifyContentPropertyCombined =
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'unsafe left'
  | 'unsafe right'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe flex-start'
  | 'safe flex-end'
  | 'safe left'
  | 'safe right';
export type JustifyContentProperty =
  | 'normal'
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'right'
  | [OverflowPosition, ContentPosition]
  | [OverflowPosition, 'left']
  | [OverflowPosition, 'right'];
export type JustifyItemsPropertyCombined =
  | 'normal'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe self-start'
  | 'unsafe self-end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'unsafe left'
  | 'unsafe right'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe self-start'
  | 'safe self-end'
  | 'safe flex-start'
  | 'safe flex-end'
  | 'safe left'
  | 'safe right'
  | 'legacy'
  | 'legacy left'
  | 'legacy right'
  | 'legacy center';
export type JustifyItemsProperty =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | SelfPosition
  | 'left'
  | 'right'
  | [OverflowPosition, SelfPosition]
  | [OverflowPosition, 'left']
  | [OverflowPosition, 'right']
  | 'legacy'
  | ['legacy', 'left']
  | ['legacy', 'right']
  | ['legacy', 'center'];
export type JustifySelfPropertyCombined =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe self-start'
  | 'unsafe self-end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'unsafe left'
  | 'unsafe right'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe self-start'
  | 'safe self-end'
  | 'safe flex-start'
  | 'safe flex-end'
  | 'safe left'
  | 'safe right';
export type JustifySelfProperty =
  | 'auto'
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | SelfPosition
  | 'left'
  | 'right'
  | [OverflowPosition, SelfPosition]
  | [OverflowPosition, 'left']
  | [OverflowPosition, 'right'];
export type LeftProperty<TLength = Length> = TLength | Percentage | 'auto';
export type LetterSpacingProperty<TLength = Length> = 'normal' | TLength;
export type LineBreakProperty = 'auto' | 'loose' | 'normal' | 'strict';
export type LineHeightProperty<TLength = Length> = 'normal' | number | TLength | Percentage;
export type ListStyleProperty =
  | ListStyleImageProperty
  | ListStylePositionProperty
  | [ListStylePositionProperty, ListStyleImageProperty]
  | ListStyleTypeProperty
  | [ListStyleTypeProperty, ListStyleImageProperty]
  | [ListStyleTypeProperty, ListStylePositionProperty]
  | [ListStyleTypeProperty, ListStylePositionProperty, ListStyleImageProperty];
export type ListStyleImageProperty = Url | 'none';
export type ListStylePositionProperty = 'inside' | 'outside';
export type ListStyleTypeProperty = CounterStyle | string | 'none';
export type MarginProperty<TLength = Length> = TLength | Percentage | 'auto';
export type MarginBlockEndProperty = MarginLeftProperty;
export type MarginBlockStartProperty = MarginLeftProperty;
export type MarginBottomProperty<TLength = Length> = TLength | Percentage | 'auto';
export type MarginInlineEndProperty = MarginLeftProperty;
export type MarginInlineStartProperty = MarginLeftProperty;
export type MarginLeftProperty<TLength = Length> = TLength | Percentage | 'auto';
export type MarginRightProperty<TLength = Length> = TLength | Percentage | 'auto';
export type MarginTopProperty<TLength = Length> = TLength | Percentage | 'auto';
export type MaskProperty = string;
export type MaskClipProperty = string;
export type MaskCompositeProperty = string;
export type MaskImageProperty = string;
export type MaskModeProperty = string;
export type MaskOriginProperty = string;
export type MaskPositionProperty = string;
export type MaskRepeatProperty = string;
export type MaskSizeProperty = string;
export type MaskTypeProperty = 'luminance' | 'alpha';
export type MaxHeightProperty<TLength = Length> =
  | TLength
  | Percentage
  | 'none'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | 'fill-available';
export type MaxWidthProperty<TLength = Length> =
  | TLength
  | Percentage
  | 'none'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | 'fill-available';
export type MinBlockSizeProperty = MinWidthProperty;
export type MinHeightProperty<TLength = Length> =
  | TLength
  | Percentage
  | 'auto'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | 'fill-available';
export type MinInlineSizeProperty = MinWidthProperty;
export type MinWidthProperty<TLength = Length> =
  | TLength
  | Percentage
  | 'auto'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | 'fill-available';
export type MixBlendModePropertyCombined =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';
export type MixBlendModeProperty = BlendMode;
export type ObjectFitProperty = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export type ObjectPositionPropertyCombined =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'sticky'
  | 'fixed';
export type ObjectPositionProperty = Position;
export type OpacityProperty = number;
export type OrderProperty = Integer;
export type OrphansProperty = Integer;
export type OutlineProperty =
  | OutlineWidthProperty
  | OutlineStyleProperty
  | [OutlineStyleProperty, OutlineWidthProperty]
  | OutlineColorProperty
  | [OutlineColorProperty, OutlineWidthProperty]
  | [OutlineColorProperty, OutlineStyleProperty]
  | [OutlineColorProperty, OutlineStyleProperty, OutlineWidthProperty];
export type OutlineColorProperty = Color | 'invert';
export type OutlineOffsetProperty<TLength = Length> = TLength;
export type OutlineStylePropertyCombined =
  | 'auto'
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';
export type OutlineStyleProperty = 'auto' | BorderStyleProperty;
export type OutlineWidthProperty = LineWidth;
export type OverflowProperty = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';
export type OverflowWrapProperty = 'normal' | 'break-word';
export type OverflowXProperty = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';
export type OverflowYProperty = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';
export type PaddingProperty<TLength = Length> = TLength | Percentage;
export type PaddingBlockEndProperty = PaddingLeftProperty;
export type PaddingBlockStartProperty = PaddingLeftProperty;
export type PaddingBottomProperty<TLength = Length> = TLength | Percentage;
export type PaddingInlineEndProperty = PaddingLeftProperty;
export type PaddingInlineStartProperty = PaddingLeftProperty;
export type PaddingLeftProperty<TLength = Length> = TLength | Percentage;
export type PaddingRightProperty<TLength = Length> = TLength | Percentage;
export type PaddingTopProperty<TLength = Length> = TLength | Percentage;
export type PageBreakAfterProperty =
  | 'auto'
  | 'always'
  | 'avoid'
  | 'left'
  | 'right'
  | 'recto'
  | 'verso';
export type PageBreakBeforeProperty =
  | 'auto'
  | 'always'
  | 'avoid'
  | 'left'
  | 'right'
  | 'recto'
  | 'verso';
export type PageBreakInsideProperty = 'auto' | 'avoid';
export type PerspectiveProperty<TLength = Length> = 'none' | TLength;
export type PerspectiveOriginPropertyCombined =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'sticky'
  | 'fixed';
export type PerspectiveOriginProperty = Position;
export type PlaceContentPropertyCombined =
  | 'normal'
  | 'normal normal'
  | 'normal space-between'
  | 'normal space-around'
  | 'normal space-evenly'
  | 'normal stretch'
  | 'space-between'
  | 'space-between normal'
  | 'space-between space-between'
  | 'space-between space-around'
  | 'space-between space-evenly'
  | 'space-between stretch'
  | 'space-around'
  | 'space-around normal'
  | 'space-around space-between'
  | 'space-around space-around'
  | 'space-around space-evenly'
  | 'space-around stretch'
  | 'space-evenly'
  | 'space-evenly normal'
  | 'space-evenly space-between'
  | 'space-evenly space-around'
  | 'space-evenly space-evenly'
  | 'space-evenly stretch'
  | 'stretch'
  | 'stretch normal'
  | 'stretch space-between'
  | 'stretch space-around'
  | 'stretch space-evenly'
  | 'stretch stretch';
export type PlaceContentProperty =
  | AlignContentProperty
  | [AlignContentProperty, JustifyContentProperty];
export type PlaceItemsPropertyCombined =
  | 'normal'
  | 'normal normal'
  | 'normal stretch'
  | 'normal legacy'
  | 'stretch'
  | 'stretch normal'
  | 'stretch stretch'
  | 'stretch legacy';
export type PlaceItemsProperty = AlignItemsProperty | [AlignItemsProperty, JustifyItemsProperty];
export type PointerEventsProperty =
  | 'auto'
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | 'inherit';
export type PositionProperty = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
export type QuotesProperty = 'none' | [string, string];
export type ResizeProperty = 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline';
export type RightProperty<TLength = Length> = TLength | Percentage | 'auto';
export type RotateProperty =
  | 'none'
  | Angle
  | ['x', Angle]
  | ['y', Angle]
  | ['z', Angle]
  | [number, number, number, Angle];
export type RowGapProperty<TLength = Length> = 'normal' | LengthPercentage<TLength>;
export type ScaleProperty = 'none' | number | [number, number] | [number, number, number];
export type ScrollBehaviorProperty = 'auto' | 'smooth';
export type ScrollSnapTypeProperty = 'none' | 'mandatory' | 'proximity';
export type ShapeImageThresholdProperty = number;
export type ShapeMarginProperty<TLength = Length> = LengthPercentage<TLength>;
export type ShapeOutsideProperty = 'none' | BasicShape | ShapeBox | [ShapeBox, BasicShape] | Image;
export type TabSizeProperty<TLength = Length> = Integer | TLength;
export type TableLayoutProperty = 'auto' | 'fixed';
export type TextAlignProperty =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'match-parent';
export type TextAlignLastProperty =
  | 'auto'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify';
export type TextCombineUprightProperty = 'none' | 'all' | 'digits' | ['digits', Integer];
export type TextDecorationProperty =
  | TextDecorationColorProperty
  | TextDecorationStyleProperty
  | [TextDecorationStyleProperty, TextDecorationColorProperty]
  | TextDecorationLineProperty
  | [TextDecorationLineProperty, TextDecorationColorProperty]
  | [TextDecorationLineProperty, TextDecorationStyleProperty]
  | [TextDecorationLineProperty, TextDecorationStyleProperty, TextDecorationColorProperty];
export type TextDecorationColorProperty = Color;
export type TextDecorationLineProperty =
  | 'none'
  | 'blink'
  | 'line-through'
  | ['line-through', 'blink']
  | 'overline'
  | ['overline', 'blink']
  | ['overline', 'line-through']
  | ['overline', 'line-through', 'blink']
  | 'underline'
  | ['underline', 'blink']
  | ['underline', 'line-through']
  | ['underline', 'line-through', 'blink']
  | ['underline', 'overline']
  | ['underline', 'overline', 'blink']
  | ['underline', 'overline', 'line-through']
  | ['underline', 'overline', 'line-through', 'blink'];
export type TextDecorationStyleProperty = 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy';
export type TextEmphasisProperty =
  | TextEmphasisColorProperty
  | TextEmphasisStyleProperty
  | [TextEmphasisStyleProperty, TextEmphasisColorProperty];
export type TextEmphasisColorProperty = Color;
export type TextEmphasisPositionProperty =
  | ['over', 'right']
  | ['over', 'left']
  | ['under', 'right']
  | ['under', 'left'];
export type TextEmphasisStyleProperty =
  | 'none'
  | 'dot'
  | 'circle'
  | 'double-circle'
  | 'triangle'
  | 'sesame'
  | 'filled'
  | ['filled', 'dot']
  | ['filled', 'circle']
  | ['filled', 'double-circle']
  | ['filled', 'triangle']
  | ['filled', 'sesame']
  | 'open'
  | ['open', 'dot']
  | ['open', 'circle']
  | ['open', 'double-circle']
  | ['open', 'triangle']
  | ['open', 'sesame']
  | string;
export type TextIndentProperty<TLength = Length> =
  | LengthPercentage<TLength>
  | [LengthPercentage<TLength>, 'each-line']
  | [LengthPercentage<TLength>, 'hanging']
  | [LengthPercentage<TLength>, 'hanging', 'each-line'];
export type TextJustifyProperty = 'auto' | 'inter-character' | 'inter-word' | 'none';
export type TextOrientationProperty = 'mixed' | 'upright' | 'sideways';
export type TextOverflowProperty = 'clip' | 'ellipsis' | string;
export type TextRenderingProperty =
  | 'auto'
  | 'optimizeSpeed'
  | 'optimizeLegibility'
  | 'geometricPrecision';
export type TextShadowProperty = string;
export type TextTransformProperty =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width';
export type TextUnderlinePositionProperty =
  | 'auto'
  | 'left'
  | 'right'
  | 'under'
  | ['under', 'left']
  | ['under', 'right'];
export type TopProperty<TLength = Length> = TLength | Percentage | 'auto';
export type TouchActionProperty =
  | 'auto'
  | 'none'
  | 'pinch-zoom'
  | 'pan-y'
  | ['pan-y', 'pinch-zoom']
  | 'pan-up'
  | ['pan-up', 'pinch-zoom']
  | 'pan-down'
  | ['pan-down', 'pinch-zoom']
  | 'pan-x'
  | ['pan-x', 'pinch-zoom']
  | ['pan-x', 'pan-y']
  | ['pan-x', 'pan-y', 'pinch-zoom']
  | ['pan-x', 'pan-up']
  | ['pan-x', 'pan-up', 'pinch-zoom']
  | ['pan-x', 'pan-down']
  | ['pan-x', 'pan-down', 'pinch-zoom']
  | 'pan-left'
  | ['pan-left', 'pinch-zoom']
  | ['pan-left', 'pan-y']
  | ['pan-left', 'pan-y', 'pinch-zoom']
  | ['pan-left', 'pan-up']
  | ['pan-left', 'pan-up', 'pinch-zoom']
  | ['pan-left', 'pan-down']
  | ['pan-left', 'pan-down', 'pinch-zoom']
  | 'pan-right'
  | ['pan-right', 'pinch-zoom']
  | ['pan-right', 'pan-y']
  | ['pan-right', 'pan-y', 'pinch-zoom']
  | ['pan-right', 'pan-up']
  | ['pan-right', 'pan-up', 'pinch-zoom']
  | ['pan-right', 'pan-down']
  | ['pan-right', 'pan-down', 'pinch-zoom']
  | 'manipulation';
export type TransformProperty = 'none' | TransformList;
export type TransformBoxProperty = 'border-box' | 'fill-box' | 'view-box';
export type TransformOriginProperty<TLength = Length> =
  | LengthPercentage<TLength>
  | 'left'
  | 'center'
  | 'right'
  | 'top'
  | 'bottom'
  | [LengthPercentage<TLength>, LengthPercentage<TLength>]
  | [LengthPercentage<TLength>, LengthPercentage<TLength>, TLength]
  | [LengthPercentage<TLength>, 'top']
  | [LengthPercentage<TLength>, 'top', TLength]
  | [LengthPercentage<TLength>, 'center']
  | [LengthPercentage<TLength>, 'center', TLength]
  | [LengthPercentage<TLength>, 'bottom']
  | [LengthPercentage<TLength>, 'bottom', TLength]
  | ['left', LengthPercentage<TLength>]
  | ['left', LengthPercentage<TLength>, TLength]
  | ['left', 'top']
  | ['left', 'top', TLength]
  | ['left', 'center']
  | ['left', 'center', TLength]
  | ['left', 'bottom']
  | ['left', 'bottom', TLength]
  | ['center', LengthPercentage<TLength>]
  | ['center', LengthPercentage<TLength>, TLength]
  | ['center', 'top']
  | ['center', 'top', TLength]
  | ['center', 'center']
  | ['center', 'center', TLength]
  | ['center', 'bottom']
  | ['center', 'bottom', TLength]
  | ['right', LengthPercentage<TLength>]
  | ['right', LengthPercentage<TLength>, TLength]
  | ['right', 'top']
  | ['right', 'top', TLength]
  | ['right', 'center']
  | ['right', 'center', TLength]
  | ['right', 'bottom']
  | ['right', 'bottom', TLength];
export type TransformStyleProperty = 'flat' | 'preserve-3d';
export type TransitionProperty = string;
export type TransitionDelayProperty = string;
export type TransitionDurationProperty = string;
export type TransitionPropertyProperty = string;
export type TransitionTimingFunctionProperty = string;
export type TranslateProperty<TLength = Length> =
  | 'none'
  | LengthPercentage<TLength>
  | [LengthPercentage<TLength>, LengthPercentage<TLength>]
  | [LengthPercentage<TLength>, LengthPercentage<TLength>, TLength];
export type UnicodeBidiProperty =
  | 'normal'
  | 'embed'
  | 'isolate'
  | 'bidi-override'
  | 'isolate-override'
  | 'plaintext';
export type VerticalAlignProperty<TLength = Length> =
  | 'baseline'
  | 'sub'
  | 'super'
  | 'text-top'
  | 'text-bottom'
  | 'middle'
  | 'top'
  | 'bottom'
  | Percentage
  | TLength;
export type VisibilityProperty = 'visible' | 'hidden' | 'collapse';
export type WhiteSpaceProperty = 'normal' | 'pre' | 'nowrap' | 'pre-wrap' | 'pre-line';
export type WidowsProperty = Integer;
export type WidthProperty<TLength = Length> =
  | TLength
  | [TLength, 'border-box']
  | [TLength, 'content-box']
  | Percentage
  | [Percentage, 'border-box']
  | [Percentage, 'content-box']
  | 'available'
  | 'min-content'
  | 'max-content'
  | 'fit-content'
  | 'auto';
export type WillChangeProperty = string;
export type WordBreakProperty = 'normal' | 'break-all' | 'keep-all' | 'break-word';
export type WordSpacingProperty<TLength = Length> = 'normal' | LengthPercentage<TLength>;
export type WordWrapProperty = 'normal' | 'break-word';
export type WritingModeProperty =
  | 'horizontal-tb'
  | 'vertical-rl'
  | 'vertical-lr'
  | 'sideways-rl'
  | 'sideways-lr';
export type ZIndexProperty = 'auto' | Integer;
