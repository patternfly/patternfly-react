import { cssToJS } from '../util';

export default function pfStyleLoader(source) {
  return cssToJS(source, false);
}
