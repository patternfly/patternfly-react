import { PaddingProps } from 'victory-core';

/**
 * Helper function to return padding style properties
 * @private
 */
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
