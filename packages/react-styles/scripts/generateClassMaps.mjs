import { camelCase } from 'change-case';
import { glob } from 'glob';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

/**
 * @param {string} cssString - CSS string
 */
function getCSSClasses(cssString) {
  return cssString.match(/(\.)(?!\d)([^\s.,{[>+~#:)]*)(?![^{]*})/g);
}

/**
 * @param {string} className - Class name
 */
function formatClassName(className) {
  return camelCase(className.replace(/pf-(v6-)?((c|l|m|u|is|has)-)?/g, ''));
}

/**
 * @param {string} className - Class name
 */
function isModifier(className) {
  return Boolean(className && className.startsWith) && className.startsWith('.pf-m-');
}

/**
 * @param {string} cssString - CSS string
 */
function getClassMaps(cssString) {
  const res = {};
  const distinctClasses = new Set(getCSSClasses(cssString));

  distinctClasses.forEach((className) => {
    const key = formatClassName(className);
    const value = className.replace('.', '').trim();
    if (isModifier(className)) {
      res.modifiers = res.modifiers || {};
      res.modifiers[key] = value;
    } else {
      res[key] = value;
    }
  });

  const ordered = {};
  Object.keys(res)
    .sort()
    .forEach((key) => (ordered[key] = res[key]));

  return ordered;
}

/**
 * @returns {any} Map of file names to classMaps
 */
export function generateClassMaps() {
  const pfStylesDir = path.dirname(url.fileURLToPath(import.meta.resolve('@patternfly/patternfly/patternfly.css')));

  const patternflyCSSFiles = glob.sync('**/*.css', {
    cwd: pfStylesDir,
    ignore: ['assets/**', '*.css', 'base/**'],
    absolute: true
  });
  const srcCSSFiles = glob.sync('src/css/**/*.css');

  const res = {};
  patternflyCSSFiles
    .concat(srcCSSFiles)
    .map((file) => path.resolve(file)) // Normalize path for Windows
    .forEach((file) => {
      res[file] = getClassMaps(fs.readFileSync(file, 'utf8'));
    });

  return res;
}
