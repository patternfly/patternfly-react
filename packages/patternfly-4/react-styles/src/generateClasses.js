/* eslint-disable global-require,import/no-dynamic-require */
const camelcase = require('camel-case');

const glob = require('glob');
const { dirname, resolve, join, parse } = require('path');
//const { parse } = require('css');
const { readFileSync, readdirSync } = require('fs');
const { outputFileSync } = require('fs-extra');

const outDir = resolve(__dirname, '../dist');
const pfStylesDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));
//const templateDir = resolve(__dirname, './templates');

const cssFiles = glob.sync('**/*.css', {
  cwd: pfStylesDir,
  ignore: ['assets/**']
});

// const formatCustomPropertyName = key => key.replace('--pf-', '').replace(/-+/g, '_');

const tokens = {};
cssFiles.forEach(filePath => {
  const absFilePath = resolve(pfStylesDir, filePath);
  const cssContent = readFileSync(absFilePath, 'utf8');
  let newClass = cssToJSNew(cssContent);
  const cssOutputPath = getCSSOutputPath(resolve(outDir, '@patternfly'), filePath);
  const cssJsOutputPath = `${cssOutputPath}.js`;
  console.log(cssJsOutputPath);
  outputFileSync(cssOutputPath, cssContent);
  outputFileSync(cssJsOutputPath, newClass);
});

// readdirSync(templateDir).forEach(templateFile => {
//   const template = require(join(templateDir, templateFile));
//   outputFileSync(template.getOutputPath({ outDir }), template.getContent({ tokens }));
// });


// import path from 'path';
// import { readFileSync } from 'fs';
// import css from 'css';
// import { outputFileSync, copyFileSync, ensureDir } from 'fs-extra';
// import relative from 'relative';
// import { getCSSClasses, isModifier, formatClassName } from '../utils';

// export const packageName = '@patternfly/react-styles';
// export const styleSheetToken = 'StyleSheet';
//
// export function cssToJS(cssString, cssOutputPath = '', useModules = false) {
//   let cssRequire = '';
//   let cssImport = '';
//   if (cssOutputPath) {
//     cssRequire = `require('${cssOutputPath}');`;
//     cssImport = `import '${cssOutputPath}';`;
//   }
//   if (useModules) {
//     return `import { ${styleSheetToken} } from '${packageName}';
// ${cssImport}
//
// export default ${styleSheetToken}.parse(\`${cssString}\`);
// `;
//   }
//
//   return `const { ${styleSheetToken} } = require('${packageName}');
// ${cssRequire}
//
// module.exports = ${styleSheetToken}.parse(\`${cssString}\`);
// `;
// }

function cssToJSNew(cssString, cssOutputPath = '', useModules = false) {
  let cssRequire = '';
  let cssImport = '';
  if (cssOutputPath) {
    cssRequire = `require('${cssOutputPath}');`;
    cssImport = `import '${cssOutputPath}';`;
  }

  const cssClasses = getCSSClasses(cssString);
  const distinctValues = [...new Set(cssClasses)];
  let classDeclaration = [];
  let modifiersDeclaration = [];

  distinctValues.forEach((className) => {
    const key = formatClassName(className);
    let cleanClass = className.replace('.', '').trim();
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
