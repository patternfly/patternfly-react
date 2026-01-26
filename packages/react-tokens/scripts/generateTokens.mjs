import { glob } from 'glob';
import { createRequire } from 'node:module';
import { dirname, basename, sep } from 'node:path';
import { parse, stringify } from '@adobe/css-tools';
import { readFileSync } from 'node:fs';

const require = createRequire(import.meta.url);
const pfStylesDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));
const version = 'v6';

// Helpers
const formatCustomPropertyName = (key) =>
  key.replace(`--pf-${version}-`, '').replace('--pf-t--', 't_').replace(/-+/g, '_');

const getRegexMatches = (string, regex) => {
  const res = {};
  let matches;
  while ((matches = regex.exec(string))) {
    res[matches[1]] = matches[2].trim();
  }
  return res;
};

const getLightThemeDeclarations = (cssAst) =>
  cssAst.stylesheet.rules
    .filter(
      (node) =>
        node.type === 'rule' &&
        !node.selectors.includes(`.pf-${version}-t-dark`) &&
        (!node.selectors || !node.selectors.some((item) => item.includes(`.pf-${version}-theme-dark`))) // exclude dark theme blocks since dark theme variable values override default token values
    )
    .map((node) => node.declarations.filter((decl) => decl.type === 'declaration'))
    .reduce((acc, val) => acc.concat(val), []); // flatten

const getDarkThemeDeclarations = (cssAst) =>
  cssAst.stylesheet.rules
    .filter(
      (node) =>
        node.type === 'rule' &&
        node.selectors &&
        node.selectors.some((item) => item.includes(`:where(.pf-${version}-theme-dark)`))
    )
    .map((node) => node.declarations.filter((decl) => decl.type === 'declaration'))
    .reduce((acc, val) => acc.concat(val), []); // flatten

const formatFilePathToName = (filePath) => {
  // const filePathArr = filePath.split('/');
  let prefix = '';
  if (filePath.includes('components/')) {
    prefix = 'c_';
  } else if (filePath.includes('layouts/')) {
    prefix = 'l_';
  }
  return `${prefix}${basename(filePath, '.css').replace(/-+/g, '_')}`;
};

const getLocalVarsMap = (cssFiles) => {
  const res = {};

  cssFiles.forEach((filePath) => {
    const cssAst = parse(readFileSync(filePath, 'utf8'));

    getLightThemeDeclarations(cssAst).forEach(({ property, value, parent }) => {
      if (res[property]) {
        // Accounts for multiple delcarations out of root scope.
        // TODO: revamp CSS var mapping
        return;
      }
      if (property.startsWith(`--pf-${version}`)) {
        res[property] = {
          ...res[property],
          [parent.selectors[0]]: value
        };
      } else if (property.startsWith('--pf-t')) {
        res[property] = {
          ...res[property],
          [parent.selectors[0]]: value
        };
      }
    });
  });

  return res;
};

const getDarkLocalVarsMap = (cssFiles) => {
  const res = {};

  cssFiles.forEach((filePath) => {
    const cssAst = parse(readFileSync(filePath, 'utf8'));

    getDarkThemeDeclarations(cssAst).forEach(({ property, value, parent }) => {
      if (property.startsWith(`--pf-${version}`) || property.startsWith('--pf-t')) {
        res[property] = {
          ...res[property],
          [parent.selectors[0]]: value
        };
      }
    });
  });

  return res;
};

/**
 * Generates tokens from CSS in node_modules/@patternfly/patternfly/**
 *
 * @returns {object} of form {
 *   c_about_modal_box: {
 *     ".pf-c-about-modal-box" : {
 *       "global_Color_100": {
 *         "name": "--pf-${version}-global--Color--100",
 *         "value": "#fff",
 *         "values": [
 *           "--pf-${version}-global--Color--light-100",
 *           "$pf-global--Color--light-100",
 *           "$pf-color-white",
 *           "#fff"
 *         ]
 *       },
 *     },
 *     ".pf-c-about-modal-box .pf-c-card": {}
 *   }
 * }
 */
export function generateTokens() {
  const cssFiles = glob
    .sync(['{**/{components,layouts}/**/*.css', '**/patternfly-charts.css', '**/patternfly-variables.css}'].join(','), {
      cwd: pfStylesDir,
      ignore: ['assets/**', '/**/_index.css'],
      absolute: true
    })
    // Sort to put variables and charts at END of list so getLocalVarsMap returns correct values
    .sort((a, b) => (a.split(sep).length < b.split(sep).length ? 1 : -1));

  // various lookup tables to resolve variables
  const scssVariables = readFileSync(
    require.resolve('@patternfly/patternfly/sass-utilities/scss-variables.scss'),
    'utf8'
  );
  const scssVarsMap = getRegexMatches(scssVariables, /(\$.*):\s*([^;^!]+)/g);

  const cssGlobalVariablesAst = parse(
    readFileSync(require.resolve('@patternfly/patternfly/base/patternfly-variables.css'), 'utf8')
  );

  // Get dark theme variables map BEFORE filtering out dark theme rules
  const cssGlobalVariablesDarkMap = {};
  getDarkThemeDeclarations(cssGlobalVariablesAst).forEach(({ property, value }) => {
    if (property.startsWith('--pf')) {
      cssGlobalVariablesDarkMap[property] = value;
    }
  });

  // Filter light theme variables (exclude dark theme)
  cssGlobalVariablesAst.stylesheet.rules = cssGlobalVariablesAst.stylesheet.rules.filter(
    (node) => !node.selectors || !node.selectors.some((item) => item.includes(`.pf-${version}-theme-dark`))
  );

  const cssGlobalVariablesMap = {
    ...getRegexMatches(stringify(cssGlobalVariablesAst), /(--pf-v6-[\w-]*):\s*([\w -_().]+);/g),
    ...getRegexMatches(stringify(cssGlobalVariablesAst), /(--pf-t--[\w-]*):\s*([^;]+);/g)
  };

  const getComputedCSSVarValue = (value, selector, varMap, isDark = false) =>
    value.replace(/var\(([\w-]*)(,.*)?\)/g, (full, m1, m2) => {
      if (m1.startsWith(`--pf-${version}-global`)) {
        if (varMap[m1]) {
          return varMap[m1] + (m2 || '');
        } else {
          return full;
        }
      } else if (m1.startsWith('--pf-t')) {
        // For semantic tokens, check if they exist in the map
        if (varMap[m1]) {
          return varMap[m1] + (m2 || '');
        } else {
          // If not found in global map, try to resolve from local variables (e.g., chart tokens)
          if (selector) {
            return getFromLocalVarsMap(m1, selector, isDark) + (m2 || '');
          } else {
            return full;
          }
        }
      } else {
        if (selector) {
          return getFromLocalVarsMap(m1, selector, isDark) + (m2 || '');
        }
      }
    });

  const getComputedScssVarValue = (value) =>
    value.replace(/\$pf[^,)\s*/]*/g, (match) => {
      if (scssVarsMap[match]) {
        return scssVarsMap[match];
      } else {
        return match;
      }
    });

  const getVarsMap = (value, selector, isDark = false) => {
    // evaluate the value and follow the variable chain
    const varsMap = [value];
    const varMapToUse = isDark ? { ...cssGlobalVariablesMap, ...cssGlobalVariablesDarkMap } : cssGlobalVariablesMap;

    let computedValue = value;
    let finalValue = value;
    while (finalValue.includes('var(--pf') || computedValue.includes('var(--pf') || computedValue.includes('$pf-')) {
      // keep following the variable chain until we get to a value
      if (finalValue.includes('var(--pf')) {
        finalValue = getComputedCSSVarValue(finalValue, selector, varMapToUse, isDark);
      }
      if (computedValue.includes('var(--pf')) {
        computedValue = getComputedCSSVarValue(computedValue, selector, varMapToUse, isDark);
      } else {
        computedValue = getComputedScssVarValue(computedValue);
      }

      // error out if variable doesn't exist to avoid infinite loop
      if (finalValue === value && computedValue === value) {
        // eslint-disable-next-line no-console
        console.error(`Error: "${value}" variable not found`);
        throw Error;
      }

      varsMap.push(computedValue);
    }
    const lastElement = varsMap[varsMap.length - 1];
    if (lastElement.includes('pf-')) {
      varsMap.push(finalValue);
    }
    // all values should not be boxed by var()
    return varsMap.map((variable) => variable.replace(/var\(([\w-]*)\)/g, (_, match) => match));
  };

  // pre-populate the localVarsMap so we can lookup local variables within or across files, e.g. if we have the declaration:
  // --pf-${version}-c-chip-group--MarginBottom: calc(var(--pf-${version}-c-chip-group--c-chip--MarginBottom) * -1);
  // then we need to find:
  // --pf-${version}-c-chip-group--c-chip--MarginBottom: var(--pf-${version}-global--spacer--xs);
  const localVarsMap = getLocalVarsMap(cssFiles);
  const darkLocalVarsMap = getDarkLocalVarsMap(cssFiles);

  const getFromLocalVarsMap = (match, selector, isDark = false) => {
    const varsMap = isDark ? { ...localVarsMap, ...darkLocalVarsMap } : localVarsMap;
    if (varsMap[match]) {
      // have exact selectors match
      if (varsMap[match][selector]) {
        return varsMap[match][selector];
      } else if (Object.keys(varsMap[match]).length === 1) {
        // only one match, return its value
        return Object.values(varsMap[match])[0];
      } else {
        // find the nearest parent selector and return its value
        let bestMatch = '';
        let bestValue = '';
        for (const key in varsMap[match]) {
          if (varsMap[match].hasOwnProperty(key)) {
            // remove trailing * from key to compare
            let sanitizedKey = key.replace(/\*$/, '').trim();
            sanitizedKey = sanitizedKey.replace(/>$/, '').trim();
            sanitizedKey = sanitizedKey.replace(/\[.*\]$/, '').trim();
            // is key a parent of selector?
            if (selector.indexOf(sanitizedKey) > -1) {
              if (sanitizedKey.length > bestMatch.length) {
                // longest matching key is the winner
                bestMatch = key;
                bestValue = varsMap[match][key];
              }
            }
          }
        }
        if (!bestMatch) {
          // eslint-disable-next-line no-console
          console.error(`no matching selector found for ${match} in localVarsMap`);
        }
        return bestValue;
      }
    } else {
      // eslint-disable-next-line no-console
      console.error(`no matching property found for ${match} in localVarsMap`);
    }
  };

  const fileTokens = {};
  cssFiles.forEach((filePath) => {
    const cssAst = parse(readFileSync(filePath, 'utf8'));
    // key is the formatted file name, e.g. c_about_modal_box
    const key = formatFilePathToName(filePath);
    // darkDeclarations are the dark theme properties within this file
    const darkDeclarations = getDarkThemeDeclarations(cssAst);

    getLightThemeDeclarations(cssAst)
      .filter(({ property }) => property.startsWith('--pf'))
      .forEach(({ property, value, parent }) => {
        const selector = parent.selectors[0];

        const varsMap = getVarsMap(value, selector);
        const propertyObj = {
          name: property,
          value: varsMap[varsMap.length - 1]
        };
        if (varsMap.length > 1) {
          propertyObj.values = varsMap;
        }

        // Check if there's a dark theme override for this property
        const darkDecl = darkDeclarations.find((decl) => decl.property === property);
        if (darkDecl) {
          try {
            const darkVarsMap = getVarsMap(darkDecl.value, selector, true);
            propertyObj.darkValue = darkVarsMap[darkVarsMap.length - 1];
            if (darkVarsMap.length > 1) {
              propertyObj.darkValues = darkVarsMap;
            }
          } catch (e) {
            // Skip dark value if it can't be resolved
            // This can happen when dark theme uses variables that don't exist in the light theme
          }
        } else if (value.includes('var(--pf')) {
          // No explicit dark override, but the value references other variables.
          // Try to resolve the dark value through the dependency chain.
          try {
            const darkVarsMap = getVarsMap(value, selector, true);
            const resolvedDarkValue = darkVarsMap[darkVarsMap.length - 1];
            // Only add darkValue if it differs from the light value
            if (resolvedDarkValue !== propertyObj.value) {
              propertyObj.darkValue = resolvedDarkValue;
              if (darkVarsMap.length > 1) {
                propertyObj.darkValues = darkVarsMap;
              }
            }
          } catch (e) {
            // Skip if dark value can't be resolved through the chain
          }
        }

        fileTokens[key] = fileTokens[key] || {};
        fileTokens[key][selector] = fileTokens[key][selector] || {};
        fileTokens[key][selector][formatCustomPropertyName(property)] = propertyObj;
      });
  });

  return fileTokens;
}
