import createCacheKeyFunction from 'fbjs-scripts/jest/createCacheKeyFunction';

import { minifyCSS, cssToJS } from '../util';

export function process(src) {
  return cssToJS(minifyCSS(src), false);
}

export const getCacheKey = createCacheKeyFunction([]);
