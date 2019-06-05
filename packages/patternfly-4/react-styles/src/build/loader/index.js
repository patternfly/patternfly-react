import { cssToJSNew } from '../util';

export default function pfStyleLoader(source, cssOutputPath) {
  return cssToJSNew(source, cssOutputPath, false);
}
