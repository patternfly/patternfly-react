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

const formatCustomPropertyName = (key, filePath) => {
  const formattedKey = key.replace('--pf-', '').replace(/-+/g, '_');
  // if (parent) {
  //   const selectors = parent.selectors[0].split('.'); // .pf-c-alert | .pf-c-alert.pf-m-success
  //   if (selectors.length >= 3) {
  //     const subSelector = selectors[2].replace('pf-', '').replace(/-+/g, '_'); // m_success
  //     if (selectors.length >= 4) {
  //       console.log(parent.selectors[0])
  //     }
  //     return `${formattedKey}_${subSelector}`
  //   }
  // }
  // return formattedKey;
  
  // filePath: 'components/AboutModalBox/about-modal-box.css'
  const filePathArr = filePath.split('/');
  return `${filePathArr[0] === 'components' ? 'c_' : 'l_'}${filePathArr[1]}`;
  // return parent.selectors[0].split(/[\s, ]+/)[0].replace('.pf-', '').replace(/-+/g, '_');
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
  // if (property === '--pf-c-alert__icon--BackgroundColor') {
  //   debugger;
  // }
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
  // debugger;
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
        const key = formatCustomPropertyName(property, filePath);
        // if (parent.selectors[0] === '.pf-c-alert.pf-m-success') {
        //   debugger;
        // }
        localVarsMap[property] = value;
        let newSelector;
        if (property === '--pf-c-alert--m-inline__icon--PaddingTop') {
          debugger;
        }
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
            // if (value.startsWith('var(') && localVarsMap[value]) {
            //   newProperty.computedValue = localVarsMap[value];
            // }
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
            // if (value.startsWith('var(') && localVarsMap[value]) {
            //   newSelector.properties[0].computedValue = localVarsMap[value];
            // }
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
          // if (value.startsWith('var(') && localVarsMap[value]) {
          //   newSelector.properties[0].computedValue = localVarsMap[value];
          // }
          tokens[key] = [newSelector]
        }
      }
    });

    /*node.declarations.forEach(decl => {
      if (decl.type !== 'declaration') {
        return;
      }
      const { property, value, parent } = decl;
      if (decl.property.startsWith('--')) {
        debugger;
        const key = formatCustomPropertyName(property, parent);
        // const populatedValue = value.replace(/var\(([\w|-]*)\)/g, (full, match) => {
        //   const computedValue = tokens[formatCustomPropertyName(match)];
        //   return computedValue ? computedValue.value : `var(${match})`;
        // });
        const populatedValue = value;
        // let calculatedValue;
        // if (!isNaN(populatedValue)) {
        //   // Avoid stringifying numeric values
        //   calculatedValue = Number(populatedValue).valueOf()
        // } else {

        // }
        const calculatedValue = !isNaN(populatedValue) ? Number(populatedValue).valueOf() : populatedValue;
        // if (property === '--pf-c-alert__icon--BackgroundColor') {
        //   console.log(decl.parent.selectors[0]);
        //   console.log(JSON.stringify({
        //     key: key,
        //     name: property,
        //     value: calculatedValue,
        //     var: `var(${property})`,
        //     selectors: parent.selectors[0]
        //   }, null, 2))
        // }
        if (!tokens[key]) {
          // new token
          tokens[key] = {
            name: property,
            // value: calculatedValue,
            var: `var(${property})`
          };
          if (!property.startsWith('--pf-global')) {
            tokens[key].selectors = parent.selectors[0];
          }
          getGlobalVar(tokens[key], calculatedValue, property);
        } else {
          // existing token
          if (!property.startsWith('--pf-global')) {
            const asd = tokens[key];
            const hasValueAlready =
              (tokens[key].value === calculatedValue && tokens[key].selectors === parent.selectors[0]) ||
              (tokens[key].otherValues &&
                tokens[key].otherValues.some(
                  value => {
                    if (!value) {
                      const bbb = asd;
                      debugger;
                    }
                    return (value.value === calculatedValue && value.selectors === parent.selectors[0]);
                  }
                ));
            if (!hasValueAlready) {
              const globalVarObjMatch = /var\(([\w|-]*)\)/g.exec(value);
              if (!tokens[key].otherValues) {
                tokens[key].otherValues = [];
              }
              if (globalVarObjMatch) {
                const globalVarObj = tokens[formatCustomPropertyName(globalVarObjMatch[1])];
                tokens[key].otherValues.push(globalVarObj);
              } else {
                // does not have a global value associated
                tokens[key].otherValues.push({
                  value,
                  selectors: parent.selectors[0]
                });
                // debugger;
              }

              // let otherValue = {
              //   ...globalVarObj
              // };
              // getGlobalVar(otherValue, globalVar, property);
              // const scssVariable = scssVarsMap[cssVarsMap[globalVar]]; // e.g. $pf-color-white
              // tokenObj.globalVar = globalVar;
              // if (cssVarsMap[globalVar]) {
              //   tokenObj.scssKey = cssVarsMap[globalVar];
              //   tokenObj.scssValue = scssVariable;
              // } else {
              //   console.log(`${key}: ${cssVariable}`)
              // }
            }
          }
        }
      }
    }); */
  });
});

// const asd = tokens;
// debugger;

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
