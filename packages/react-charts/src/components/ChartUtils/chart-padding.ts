import { PaddingProps } from 'victory-core';

export const getPaddingForSide = (
  side: 'bottom' | 'left' | 'right' | 'top',
  padding: PaddingProps,
  fallback: PaddingProps
): number => {
  if (typeof padding == 'number') {
    return padding as number;
  } else if (typeof padding == 'object' && Object.keys(padding).length > 0) {
    return padding[side] || 0;
  }

  return getPaddingForSide(side, fallback, 0);
};
