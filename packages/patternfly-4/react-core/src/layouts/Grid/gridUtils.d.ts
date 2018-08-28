import { OneOf } from '../../typeUtils';
import { DeviceSizes } from '../../styles/sizes';

export const gridSpans: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const getRowSpanKey: (size: number) => string;

export const getOffsetKey: (size: number) => string;

export const getSizeSuffix: (size: number) => string;

export const getSpanModifier: (
  value: number,
  size?: OneOf<typeof DeviceSizes, keyof typeof DeviceSizes>
) => string;

export const getGridSpanModifier: (
  value: number,
  size?: OneOf<typeof DeviceSizes, keyof typeof DeviceSizes>
) => string;

export const getRowSpanModifier: (
  value: number,
  size?: OneOf<typeof DeviceSizes, keyof typeof DeviceSizes>
) => string;

export const getOffsetModifier: (
  value: number,
  size?: OneOf<typeof DeviceSizes, keyof typeof DeviceSizes>
) => string;
