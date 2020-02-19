import createCacheKeyFunction from 'fbjs-scripts/jest/createCacheKeyFunction';

import { minifyCSS, cssToJS } from '../util';

/**
 * @param {string} src - Src string
 */
export function process(src) {
  return cssToJS(minifyCSS(src), false);
}

export const getCacheKey = createCacheKeyFunction([]);
