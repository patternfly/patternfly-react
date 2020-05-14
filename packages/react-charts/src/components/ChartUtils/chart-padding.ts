import { get, isEmpty, isFinite } from 'lodash';
import { PaddingProps } from 'victory-core';

export const getPaddingForSide = (
  side: 'bottom' | 'left' | 'right' | 'top',
  padding: PaddingProps,
  fallback: PaddingProps
): number => {
  if (!isEmpty(padding)) {
    return get(padding, side, 0);
  }

  if (isFinite(padding)) {
    return padding as number;
  }

  return getPaddingForSide(side, fallback, 0);
};
