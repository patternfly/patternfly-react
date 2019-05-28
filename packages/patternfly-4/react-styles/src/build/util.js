import path from 'path';
import { readFileSync } from 'fs';
import css from 'css';
import { outputFileSync, ensureDir } from 'fs-extra';
import relative from 'relative';
import { getCSSClasses, isModifier, formatClassName } from '../utils';

export const packageName = '@patternfly/react-styles';
export const styleSheetToken = 'StyleSheet';

export function cssToJS(cssString, cssOutputPath = '', useModules = false) {
  let cssRequire = '';
  let cssImport = '';
  if (cssOutputPath) {
    cssRequire = `require('${cssOutputPath}');`;
    cssImport = `import '${cssOutputPath}';`;
  }
  if (useModules) {
    return `import { ${styleSheetToken} } from '${packageName}';
${cssImport}

export default ${styleSheetToken}.parse(\`${cssString}\`);
`;
  }

  return `const { ${styleSheetToken} } = require('${packageName}');
${cssRequire}

module.exports = ${styleSheetToken}.parse(\`${cssString}\`);
`;
}

export function cssToJSNew(cssString, cssOutputPath = '', useModules = false) {
  let cssRequire = '';
  let cssImport = '';
  if (cssOutputPath) {
    cssRequire = `require('${cssOutputPath}');`;
    cssImport = `import '${cssOutputPath}';`;
  }

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

  if (useModules) {
    return `${cssImport}

export default {
  ${classSection}
  modifiers: {
    ${modifiersDeclaration.join(',\n    ')}
  }
}
`;
  }

  return `${cssRequire}

module.exports = {
  ${classSection}
  modifiers: {
    ${modifiersDeclaration.join(',\n    ')}
  }
}

`;
}

export function getFullCSS(pathToCSSFile) {
  const rawCss = readFileSync(pathToCSSFile, 'utf8').replace('@charset "UTF-8";', '');
  return rawCss;
}

export function getCSS(pathToCSSFile) {
  const rawCss = readFileSync(pathToCSSFile, 'utf8').replace('@charset "UTF-8";', '');
  return minifyCSS(rawCss);
}

export function minifyCSS(cssString) {
  return css.stringify(css.parse(cssString.replace('@charset "UTF-8";', '')), {
    compress: true
  });
}

export function writeCSSFile(destinationPath, contents) {
  ensureDir(path.dirname(destinationPath)).then(() => {
    const replacementString = contents.replace(/..\/..\/assets/g, '../../../../../styles/assets');
    outputFileSync(destinationPath, replacementString);
  });
}

export function writeCSSJSFile(rootPath, originalPath, destinationPath, contents) {
  outputFileSync(destinationPath, contents);
}

export function getRelativeImportPath(from, to) {
  const parsedTo = path.parse(to);
  const newImportPath = path.normalize(path.join(relative(from, parsedTo.dir), parsedTo.base));
  return newImportPath.startsWith('.') ? newImportPath : `./${newImportPath}`;
}

export function getCSSOutputPath(outDir, rootPath, pathToCSSFile) {
  return path.join(path.resolve(rootPath, outDir), getFormattedCSSOutputPath(pathToCSSFile));
}

function getFormattedCSSOutputPath(pathToCSSFile) {
  const { dir, name } = path.parse(pathToCSSFile);
  let formattedDir = dir;
  const nodeText = 'node_modules';
  const nodeIndex = formattedDir.lastIndexOf(nodeText);
  if (nodeIndex !== -1) {
    formattedDir = formattedDir.substring(nodeIndex + nodeText.length);
  }
  return path.join(formattedDir, `${name}.css`);
}
