const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const camelcase = require('camel-case');

/**
 * @param {string} cssString - CSS string
 */
function cssToJSNew(cssString) {
  const res = {};
  const distinctClasses = new Set(getCSSClasses(cssString));

  distinctClasses.forEach(className => {
    const key = formatClassName(className);
    const value = className.replace('.', '').trim();
    if (isModifier(className)) {
      res.modifiers = res.modifiers || {};
      res.modifiers[key] = value;
    } else {
      res[key] = value;
    }
  });

  return res;
}

/**
 * @param {string} cssString - CSS string
 */
function getCSSClasses(cssString) {
  return cssString.match(/(.)(?!\d)([^\s.,{[>+~#:)]*)(?![^{]*})/g);
}

/**
 * @param {string} className - Class name
 */
function formatClassName(className) {
  return camelcase(className.replace(/pf-((c|l|m|u|is|has)-)?/g, ''));
}

/**
 * @param {string} className - Class name
 */
function isModifier(className) {
  return Boolean(className && className.startsWith) && className.startsWith('.pf-m-');
}

/**
 *
 */
function generateCSSinJS() {
  const outDir = path.resolve(__dirname, '../css');
  const pfStylesDir = path.dirname(require.resolve('@patternfly/patternfly/patternfly.css'));
  if (fs.existsSync(outDir)) {
    // eslint-disable-next-line no-console
    console.log('Not overwriting generated CSS-in-JS files.');
    return;
  }

  const patternflyCSSFiles = glob.sync('**/*.css', {
    cwd: pfStylesDir,
    ignore: ['assets/**', '*.css'],
    absolute: true
  });
  const srcCSSFiles = glob.sync('src/css/**/*.css');
  const combinedCSSFiles = [...patternflyCSSFiles, ...srcCSSFiles];

  combinedCSSFiles.forEach(filePath => {
    const cssContent = fs.readFileSync(filePath, 'utf8');
    const cssOutputPath = path.join(outDir, filePath.replace(pfStylesDir, '').replace('src/css', ''));
    const cssOutputFilename = path.basename(cssOutputPath);
    const classMap = cssToJSNew(cssContent);

    const jsonString = JSON.stringify(classMap, null, 2);
    fs.outputFileSync(cssOutputPath, cssContent);
    fs.outputFileSync(
      cssOutputPath.replace(/.css$/, '.js'),
      `require('./${cssOutputFilename}');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ${jsonString};`
    );
    fs.outputFileSync(
      cssOutputPath.replace(/.css$/, '.d.ts'),
      `import './${cssOutputFilename}';
declare const _default: ${jsonString};
export default _default;`
    );
  });

  // eslint-disable-next-line no-console
  console.log('Generated files for', combinedCSSFiles.length, 'CSS files.');
}

generateCSSinJS();
