import { Padding } from '../geom/types';

export const maxPadding = (padding?: Padding): number => {
  if (typeof padding === 'number') {
    return +padding;
  }
  if (Array.isArray(padding)) {
    return padding.reduce((max, p) => Math.max(max, p), 0);
  }
  return 0;
};
