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
export function ch(value: number): IChValue {
  return `${value}ch` as any;
}
export function cm(value: number): ICmValue {
  return `${value}cm` as any;
}
export function deg(value: number): IDegValue {
  return `${value}deg` as any;
}
export function dpcm(value: number): IDpcmValue {
  return `${value}dpcm` as any;
}
export function dpi(value: number): IDpiValue {
  return `${value}dpi` as any;
}
export function dppx(value: number): IDppxValue {
  return `${value}dppx` as any;
}
export function em(value: number): IEmValue {
  return `${value}em` as any;
}
export function ex(value: number): IExValue {
  return `${value}ex` as any;
}
export function fr(value: number): IFrValue {
  return `${value}fr` as any;
}
export function grad(value: number): IGradValue {
  return `${value}grad` as any;
}
export function hz(value: number): IHzValue {
  return `${value}hz` as any;
}
export function inch(value: number): IInchValue {
  return `${value}in` as any;
}
export function khz(value: number): IKhzValue {
  return `${value}khz` as any;
}
export function mm(value: number): IMmValue {
  return `${value}mm` as any;
}
export function ms(value: number): IMsValue {
  return `${value}ms` as any;
}
export function pc(value: number): IPcValue {
  return `${value}pc` as any;
}
export function percentage(value: number): IPercentageValue {
  return `${value}%` as any;
}
export function pt(value: number): IPtValue {
  return `${value}pt` as any;
}
export function px(value: number): IPxValue {
  return `${value}px` as any;
}
export function q(value: number): IQValue {
  return `${value}q` as any;
}
export function rad(value: number): IRadValue {
  return `${value}rad` as any;
}
export function rem(value: number): IRemValue {
  return `${value}rem` as any;
}
export function s(value: number): ISValue {
  return `${value}s` as any;
}
export function turn(value: number): ITurnValue {
  return `${value}turn` as any;
}
export function vh(value: number): IVhValue {
  return `${value}vh` as any;
}
export function vmax(value: number): IVmaxValue {
  return `${value}vmax` as any;
}
export function vmin(value: number): IVminValue {
  return `${value}vmin` as any;
}
export function vw(value: number): IVwValue {
  return `${value}vw` as any;
}
export function x(value: number): IXValue {
  return `${value}x` as any;
}
