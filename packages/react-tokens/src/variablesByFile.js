const glob = require('glob');
const { dirname, resolve, join, basename } = require('path');
const { parse } = require('css');
const { readFileSync, readdirSync } = require('fs');
const { outputFileSync } = require('fs-extra');

const outDir = resolve(__dirname, '../dist/variables');
const pfStylesDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));
const templateDir = resolve(__dirname, './templates');

const cssFiles = glob.sync('{**/{components,layouts}/**/*.css,**/patternfly-charts.css,**/patternfly-variables.css}', {
  cwd: pfStylesDir,
  ignore: ['assets/**']
});

const formatCustomPropertyName = key => key.replace('--pf-', '').replace(/-+/g, '_');

// various lookup tables to resolve variables

const varsRegex = /(--.*):\s*#{(\$pf-[^\s]+)}/g;
const variables = readFileSync(require.resolve('@patternfly/patternfly/_variables.scss'), 'utf8');
let matches;
let cssGlobalsToScssVarsMap = {};
while ((matches = varsRegex.exec(variables))) {
  cssGlobalsToScssVarsMap[matches[1]] = matches[2];
}

const scssVarsRegex = /(\$.*):\s*([^;^!]+)/g;
// contains default values and mappings to colors.scss for color values
const scssVariables = readFileSync(
  require.resolve('@patternfly/patternfly/sass-utilities/scss-variables.scss'),
  'utf8'
);
matches = null;
let scssVarsMap = {};
while ((matches = scssVarsRegex.exec(scssVariables))) {
  scssVarsMap[matches[1]] = matches[2].trim();
}

const colorsRegex = /(\$.*):\s*([^;^!]+)/g;
// contains default values and mappings to colors.scss for color values
const scssColorVariables = readFileSync(require.resolve('@patternfly/patternfly/sass-utilities/colors.scss'), 'utf8');
matches = null;
let scssColorsMap = {};
while ((matches = colorsRegex.exec(scssColorVariables))) {
  scssColorsMap[matches[1]] = matches[2].trim();
}

const cssGlobalVariablesRegex = /(--.*):\s*(.*);/g;
// contains default values and mappings to colors.scss for color values
const cssGlobalVariables = readFileSync(require.resolve('@patternfly/patternfly/patternfly-variables.css'), 'utf8');
matches = null;
let cssGlobalVariablesMap = {};
while ((matches = cssGlobalVariablesRegex.exec(cssGlobalVariables))) {
  cssGlobalVariablesMap[matches[1]] = matches[2].trim();
}

const combinedScssVarsColorsMap = {
  ...scssVarsMap,
  ...scssColorsMap
};

const formatFilePathToName = filePath => {
  // const filePathArr = filePath.split('/');
  let prefix = '';
  if (filePath.indexOf('components/') > -1) {
    prefix = 'c_';
  } else if (filePath.indexOf('layouts/') > -1) {
    prefix = 'l_';
  }
  return `${prefix}${basename(filePath, '.css').replace(/-+/g, '_')}`;
};

// pre-populate the localVarsMap so we can lookup local variables within or across files, e.g. if we have the declaration:
// --pf-c-chip-group--MarginBottom: calc(var(--pf-c-chip-group--c-chip--MarginBottom) * -1);
// then we need to find:
// --pf-c-chip-group--c-chip--MarginBottom: var(--pf-global--spacer--xs);
let localVarsMap = {};
cssFiles.forEach(filePath => {
  const absFilePath = resolve(pfStylesDir, filePath);
  const cssAst = parse(readFileSync(absFilePath, 'utf8'));

  cssAst.stylesheet.rules.forEach(node => {
    if (node.type !== 'rule' || node.selectors.indexOf('.pf-t-dark') !== -1) {
      return;
    }

    node.declarations.forEach(decl => {
      if (decl.type !== 'declaration') {
        return;
      }
      const { property, value, parent } = decl;
      if (property.startsWith('--pf')) {
        localVarsMap[property] = {
          ...localVarsMap[property],
          [parent.selectors[0]]: value
        };
      }
    });
  });
});

const getFromLocalMap = (match, selector) => {
  if (localVarsMap[match]) {
    // have exact selectors match
    if (localVarsMap[match][selector]) {
      return localVarsMap[match][selector];
    } else if (Object.keys(localVarsMap[match]).length === 1) {
      // only one match, return its value
      return Object.values(localVarsMap[match])[0];
    } else {
      // find the nearest parent selector and return its value
      let bestMatch = '';
      let bestValue = '';
      for (let key in localVarsMap[match]) {
        // remove trailing * from key to compare
        let sanitizedKey = key.replace(/\*$/, '').trim();
        sanitizedKey = sanitizedKey.replace(/\>$/, '').trim();
        sanitizedKey = sanitizedKey.replace(/\[.*\]$/, '').trim();
        // is key a parent of selector?
        if (selector.indexOf(sanitizedKey) > -1) {
          if (sanitizedKey.length > bestMatch.length) {
            // longest matching key is the winner
            bestMatch = key;
            bestValue = localVarsMap[match][key];
          }
        }
      }
      if (!bestMatch) {
        console.error(`no matching selector found for ${match} in localVarsMap`);
      }
      return bestValue;
    }
  } else {
    console.error(`no matching property found for ${match} in localVarsMap`);
  }
};

const getComputedCssVarValue = (value, selector) => {
  return value.replace(/var\(([\w|-]*)\)/g, (full, match) => {
    if (match.startsWith('--pf-global')) {
      if (cssGlobalsToScssVarsMap[match]) {
        return cssGlobalsToScssVarsMap[match];
      } else {
        return full;
      }
    } else {
      if (selector) {
        return getFromLocalMap(match, selector);
      }
    }
  });
};

const getFinalValue = (value, selector) => {
  return value.replace(/var\(([\w|-]*)\)/g, (full, match) => {
    if (match.startsWith('--pf-global')) {
      if (cssGlobalVariablesMap[match]) {
        return cssGlobalVariablesMap[match];
      } else {
        return full;
      }
    } else {
      if (selector) {
        return getFromLocalMap(match, selector);
      }
    }
  });
};

const getComputedScssVarValue = value => {
  return value.replace(/\$pf[^,)\s\*\/]*/g, match => {
    if (combinedScssVarsColorsMap[match]) {
      return combinedScssVarsColorsMap[match];
    } else {
      debugger;
      return match;
    }
  });
};

const getVarsMap = (value, selector) => {
  // evaluate the value and follow the variable chain
  let varsMap = [value];

  let computedValue = value;
  let finalValue = value;
  while (
    finalValue.indexOf('var(--pf') > -1 ||
    computedValue.indexOf('var(--pf') > -1 ||
    computedValue.indexOf('$pf-') > -1
  ) {
    // keep following the variable chain until we get to a value
    if (finalValue.indexOf('var(--pf') > -1) {
      finalValue = getFinalValue(finalValue, selector);
    }
    if (computedValue.indexOf('var(--pf') > -1) {
      computedValue = getComputedCssVarValue(computedValue, selector);
    } else {
      computedValue = getComputedScssVarValue(computedValue);
    }
    varsMap.push(computedValue);
  }
  const lastElement = varsMap[varsMap.length - 1];
  if (lastElement.indexOf('pf-') > -1) {
    varsMap.push(finalValue);
  }
  // all values should not be boxed by var()
  varsMap = varsMap.map(variable => variable.replace(/var\(([\w|-]*)\)/g, (full, match) => match));

  return varsMap
}

const tokens = {};
cssFiles.forEach(filePath => {
  const absFilePath = resolve(pfStylesDir, filePath);
  const cssAst = parse(readFileSync(absFilePath, 'utf8'));
  // key is the formatted file name, e.g. c_about_modal_box
  const key = formatFilePathToName(filePath);

  cssAst.stylesheet.rules.forEach(node => {
    if (node.type !== 'rule' || node.selectors.indexOf('.pf-t-dark') !== -1) {
      return;
    }

    node.declarations.forEach(decl => {
      if (decl.type !== 'declaration') {
        return;
      }
      const { property, value, parent } = decl;
      if (property.startsWith('--pf')) {

        const selector = parent.selectors[0];

        const varsMap = getVarsMap(value, selector);
        let propertyObj = {
          property,
          value: varsMap[varsMap.length - 1],
          token: formatCustomPropertyName(property)
        };
        if (varsMap.length > 1) {
          propertyObj.values = varsMap;
        }

        if (tokens[key]) {
          if (tokens[key][selector]) {
            tokens[key][selector].push(propertyObj)
          } else {
            tokens[key][selector] = [propertyObj]
          }
        } else {
          tokens[key] = {
            [selector]: [propertyObj]
          }
        }
      }
    });
  });
});

readdirSync(templateDir).forEach(templateFile => {
  const template = require(join(templateDir, templateFile));
  outputFileSync(template.getOutputPath({ outDir }), template.getContent({ tokens }));
  Object.entries(tokens).forEach(([tokenName, tokenValue]) => {
    outputFileSync(
      template.getSingleOutputPath({ outDir, tokenName }),
      template.getSingleContent({ tokenName, tokenValue })
    );
  });
});
