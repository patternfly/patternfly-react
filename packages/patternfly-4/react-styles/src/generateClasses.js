/* eslint-disable global-require,import/no-dynamic-require */
const camelcase = require('camel-case');

const glob = require('glob');
const { dirname, basename, resolve, join, parse } = require('path');
const { readFileSync } = require('fs');
const { outputFileSync } = require('fs-extra');

const outDir = resolve(__dirname, '../css');
const pfStylesDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));

const cssFiles = glob.sync('**/*.css', {
  cwd: pfStylesDir,
  ignore: ['assets/**', '*ie11*.css']
});

cssFiles.forEach(filePath => {
  const absFilePath = resolve(pfStylesDir, filePath);
  const cssContent = readFileSync(absFilePath, 'utf8');
  const cssOutputPath = getCSSOutputPath(outDir, filePath);
  const newClass = cssToJSNew(cssContent, `./${basename(cssOutputPath)}`);

  outputFileSync(cssOutputPath, cssContent);
  outputFileSync(cssOutputPath.replace('.css', '.ts'), newClass);
});

function cssToJSNew(cssString, cssOutputPath = '') {
  const cssClasses = getCSSClasses(cssString);
  const distinctValues = [...new Set(cssClasses)];
  const classDeclaration = [];
  const modifiersDeclaration = [];

  distinctValues.forEach(className => {
    const key = formatClassName(className);
    const cleanClass = className.replace('.', '').trim();
    if (isModifier(className)) {
      modifiersDeclaration.push(`'${key}': '${cleanClass}'`);
    } else {
      classDeclaration.push(`${key}: '${cleanClass}'`);
    }
  });
  const classSection = classDeclaration.length > 0 ? `${classDeclaration.join(',\n  ')},` : '';

  return `import '${cssOutputPath}';

export default {
  ${classSection}
  modifiers: {
    ${modifiersDeclaration.join(',\n    ')}
  }
}`;
}

function getCSSClasses(cssString) {
  return cssString.match(/(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/g); //eslint-disable-line
}

function formatClassName(className) {
  return camelcase(className.replace(/pf-((c|l|m|u|is|has)-)?/g, ''));
}

function isModifier(className) {
  return Boolean(className && className.startsWith) && className.startsWith('.pf-m-');
}

function getCSSOutputPath(absFilePath, pathToCSSFile) {
  return join(absFilePath, getFormattedCSSOutputPath(pathToCSSFile));
}

function getFormattedCSSOutputPath(pathToCSSFile) {
  const { dir, name } = parse(pathToCSSFile);
  let formattedDir = dir;
  const nodeText = 'node_modules';
  const nodeIndex = formattedDir.lastIndexOf(nodeText);
  if (nodeIndex !== -1) {
    formattedDir = formattedDir.substring(nodeIndex + nodeText.length);
  }
  return join(formattedDir, `${name}.css`);
}
