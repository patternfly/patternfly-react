import { minifyCSS, cssToJS } from '../util';

export function process(src) {
  return cssToJS(minifyCSS(src), false);
}
