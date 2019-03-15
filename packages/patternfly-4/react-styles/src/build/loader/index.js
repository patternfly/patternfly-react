import { cssToJS } from '../util';

export default function pfStyleLoader(source, cssOutputPath) {
  return cssToJS(source, cssOutputPath, false);
}
