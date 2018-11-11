import { BasicMultiplier, IBasicMultiplier } from '../types';

export function createBasicMultiplier(type: BasicMultiplier): IBasicMultiplier {
  return {
    type,
  };
}
