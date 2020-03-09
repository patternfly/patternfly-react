import { cssToJSNew } from '../util';

/**
 * @param {string} source - Source
 * @param {string} cssOutputPath - CSS output path
 */
export default function pfStyleLoader(source, cssOutputPath) {
  return cssToJSNew(source, cssOutputPath, false);
}
