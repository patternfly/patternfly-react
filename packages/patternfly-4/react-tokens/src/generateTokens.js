const glob = require('glob');
const { dirname, resolve, join } = require('path');
const { parse } = require('css');
const { readFileSync, readdirSync } = require('fs');
const { outputFileSync } = require('fs-extra');

const outDir = resolve(__dirname, '../dist');
const pfStylesDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));
const templateDir = resolve(__dirname, './templates');

// const cssFiles = glob.sync('**/*.css', {
//   cwd: pfStylesDir,
//   ignore: ['assets/**']
// });
const cssFiles = glob.sync('**/{components,layouts}/**/*.css', {
  cwd: pfStylesDir,
  ignore: ['assets/**']
});

// need 2 lookup tables
// first lookup table (cssVarsMap): global variable -> variable, e.g. (Global variable): --pf-global--BackgroundColor--100 --> (Variable): $pf-global--BackgroundColor--100
// second lookup table (scssVarsMap): variable -> color, e.g. (Variable): $pf-global--BackgroundColor--100 --> (Palette color): $pf-color-white

const varsRegex = /(--.*):\s*#{(\$pf-[^\s]+)}/g;
const variables = readFileSync(require.resolve('@patternfly/patternfly/_variables.scss'), 'utf8');
let matches;
let cssVarsMap = {};
while ((matches = varsRegex.exec(variables))) {
  cssVarsMap[matches[1]] = matches[2];
}

// this regex captures the variables name and the variable value, example:
// given: $pf-global--BackgroundColor--100: $pf-color-white !default;
// extract: group 1: $pf-global--BackgroundColor--100, group 2: $pf-color-white
// const scssVarsRegex = /(\$.*):\s*(\$pf-color[^\s]+)/g;
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
const colorVariables = readFileSync(require.resolve('@patternfly/patternfly/sass-utilities/colors.scss'), 'utf8');
matches = null;
let colorsMap = {};
while ((matches = colorsRegex.exec(colorVariables))) {
  colorsMap[matches[1]] = matches[2].trim();
}

const allVariablesRegex = /(--.*):\s*(.*);/g;
// contains default values and mappings to colors.scss for color values
const allVariables = readFileSync(require.resolve('@patternfly/patternfly/patternfly-variables.css'), 'utf8');
matches = null;
let allVariablesMap = {};
while ((matches = allVariablesRegex.exec(allVariables))) {
  allVariablesMap[matches[1]] = matches[2].trim();
}

const formatCustomPropertyName = key => key.replace('--pf-', '').replace(/-+/g, '_');

const getGlobalVar = (tokenObj, value, property) => {
  // check if the value starts with --pf-global
  const innerValueMatch = /var\(([\w|-]*)\)/g.exec(value);
  let globalVar;
  if (innerValueMatch && innerValueMatch[1] && innerValueMatch[1].startsWith('--pf-global')) {
    // component token that has a global variable value
    globalVar = innerValueMatch[1]; // e.g. --pf-global--BackgroundColor--100
    const scssVariable = scssVarsMap[cssVarsMap[globalVar]]; // e.g. $pf-color-white
    tokenObj.globalVar = globalVar;
    if (cssVarsMap[globalVar]) {
      tokenObj.scssKey = cssVarsMap[globalVar];
      tokenObj.scssValue = scssVariable;
    } else {
      console.log(`${key}: ${cssVariable}`);
    }
  } else if (property && property.startsWith('--pf-global')) {
    // global variable token
    globalVar = property;
    const scssVariable = scssVarsMap[cssVarsMap[globalVar]]; // e.g. $pf-color-white
    tokenObj.globalVar = globalVar;
    if (cssVarsMap[globalVar]) {
      tokenObj.scssKey = cssVarsMap[globalVar];
      tokenObj.scssValue = scssVariable;
    } else {
      console.log(`${key}: ${cssVariable}`);
    }
  }
  return globalVar ? allVariablesMap[globalVar] : value;
};

const tokens = {};
cssFiles.forEach(filePath => {
  const absFilePath = resolve(pfStylesDir, filePath);
  const cssAst = parse(readFileSync(absFilePath, 'utf8'));
  // keeps a mapping of the locally used variables
  const localVarsMap = {};
  cssAst.stylesheet.rules.forEach(node => {
    if (node.type !== 'rule' || node.selectors.indexOf('.pf-t-dark') !== -1) {
      return;
    }

    node.declarations.forEach(decl => {
      if (decl.type !== 'declaration') {
        return;
      }
      const { property, value, parent } = decl;
      if (decl.property.startsWith('--') && !decl.property.startsWith('--pf-global')) {
        const key = formatCustomPropertyName(property);
        localVarsMap[property] = value;
        let computedValueObjects = [];
        const computedValue = value.replace(/var\(([\w|-]*)\)/g, (full, match) => {
          let valueObj = {};
          let populatedValue;
          if (match.startsWith('--pf-global')) {
            populatedValue = getGlobalVar(valueObj, `var(${match})`);
          } else {
            populatedValue = localVarsMap[match];
            if (populatedValue) {
              if (populatedValue.startsWith('var(--pf-global')) {
                populatedValue = getGlobalVar(valueObj, populatedValue);
              }
              valueObj.localVar = match;
            }
          }
          const checkedForNumValue = !isNaN(populatedValue) ? Number(populatedValue).valueOf() : populatedValue;
          computedValueObjects.push(valueObj);
          return populatedValue || full;
        });
        // Avoid stringifying numeric chart values
        const chartNum = decl.property.startsWith('--pf-chart-') && !isNaN(computedValue);
        const checkedValue = chartNum ? Number(computedValue).valueOf() : computedValue;

        // if the token already exists, it means that we are pushing the variable again but in a different context (different CSS selectors)
        // we need to keep a list of the values

        let newValue;
        if (tokens[key]) {
          newValue = {
            selector: parent.selectors[0],
            value: checkedValue
          };
          if (computedValueObjects.length === 1) {
            newValue = {
              ...newValue,
              ...computedValueObjects[0]
            }
          } else {
            newValue.computedValueObjects = computedValueObjects;
          }
          tokens[key].values.push(newValue);
        } else {
          newValue = {
            selector: parent.selectors[0],
            value: checkedValue
          };
          if (computedValueObjects.length === 1) {
            newValue = {
              ...newValue,
              ...computedValueObjects[0]
            }
          } else {
            newValue.computedValueObjects = computedValueObjects;
          }
          tokens[key] = {
            name: property,
            value: checkedValue,
            var: `var(${property})`,
            values: [newValue]
          };
        }
      }
    });
  });
});

Object.entries(allVariablesMap).forEach(globalVar => {
  const key = formatCustomPropertyName(globalVar[0]);
  const variable = globalVar[0];
  const value = globalVar[1];
  tokens[key] = {
    name: variable,
    var: `var(${variable})`,
    value
  };
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
