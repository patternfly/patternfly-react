const glob = require('glob');
const { dirname, resolve, join } = require('path');
const { parse } = require('css');
const { readFileSync, readdirSync } = require('fs');
const { outputFileSync } = require('fs-extra');

const outDir = resolve(__dirname, '../dist');
const pfStylesDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));
const templateDir = resolve(__dirname, './templates');

const cssFiles = glob.sync('**/{components,layouts}/**/*.css', {
  cwd: pfStylesDir,
  ignore: ['assets/**']
});

const formatCustomPropertyName = filePath => {
  const filePathArr = filePath.split('/');
  return `${filePathArr[0] === 'components' ? 'c_' : 'l_'}${filePathArr[1]}`;
};

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
  tokenObj.computedValue = globalVar ? allVariablesMap[globalVar] : value;
};

const tokens = {};
cssFiles.forEach(filePath => {
  const absFilePath = resolve(pfStylesDir, filePath);
  const cssAst = parse(readFileSync(absFilePath, 'utf8'));
  console.log(filePath);
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
        // parse variables
        // each token we create will have the form of:
        /*
        [{
          selector: '.pf-c-about-modal-box',
          properties: [{
            name: '--pf-global--Color--100',
            value: 'var(--pf-global--Color--light-100)'
          }]
        }, {
          selector: '.pf-c-about-modal-box .button',
          properties: [{
            name: '--pf-c-button--m-primary--Color',
            value: 'var(--pf-global--primary-color--dark-100)'
          }, {
            name: '--pf-c-button--m-primary--hover--Color',
            value: 'var(--pf-global--primary-color--dark-100)'
          }]
        }]
        */

        // key is the root of the selector, e.g. c_about_modal_box
        const key = formatCustomPropertyName(filePath);
        localVarsMap[property] = value;
        let newSelector;
        let computedValueObjects = [];
        const computedValue = value.replace(/var\(([\w|-]*)\)/g, (full, match) => {
          let valueObj = {};
          if (match.startsWith('--pf-global')) {
            getGlobalVar(valueObj, `var(${match})`);
          } else {
            const computedValue = localVarsMap[match];
            if (computedValue) {
              if (computedValue.startsWith('var(--pf-global')) {
                getGlobalVar(valueObj, computedValue);
              } else {
                valueObj.computedValue = computedValue;
              }
              valueObj.localVar = match;
            }
          }
          computedValueObjects.push(valueObj);
          return (valueObj && valueObj.computedValue) || full;
        });
        if (tokens[key]) {
          // check if selector exists
          const index = tokens[key].findIndex(item => item.selector === parent.selectors[0]);
          if (index >= 0) {
            let newProperty = {
              name: property,
              value,
              computedValue,
              computedValueObjects
            };
            tokens[key][index].properties.push(newProperty);
          } else {
            newSelector = {
              selector: parent.selectors[0],
              properties: [{
                name: property,
                value,
                computedValue,
                computedValueObjects
              }]
            };
            tokens[key].push(newSelector);
          }
        } else {
          newSelector = {
            selector: parent.selectors[0],
            properties: [{
              name: property,
              value,
              computedValue,
              computedValueObjects
            }]
          };
          tokens[key] = [newSelector]
        }
      }
    });
  });
});
