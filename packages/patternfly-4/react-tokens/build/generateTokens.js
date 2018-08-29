/* eslint-disable global-require,import/no-dynamic-require */
const glob = require('glob');
const { dirname, resolve, join } = require('path');
const { parse } = require('css');
const { readFileSync, readdirSync } = require('fs');
const { outputFileSync } = require('fs-extra');

const outDir = resolve(__dirname, '../dist');
const pfStylesDir = dirname(require.resolve('@patternfly/patternfly-next/patternfly.css'));
const templateDir = resolve(__dirname, './templates');

const cssFiles = glob.sync('**/*.css', {
  cwd: pfStylesDir,
  ignore: ['assets/**']
});

const formatCustomPropertyName = key => key.replace('--pf-', '').replace(/-+/g, '_');

const tokens = {};
cssFiles.forEach(filePath => {
  const absFilePath = resolve(pfStylesDir, filePath);
  const cssAst = parse(readFileSync(absFilePath, 'utf8'));
  cssAst.stylesheet.rules.forEach(node => {
    if (node.type !== 'rule') {
      return;
    }
    node.declarations.forEach(decl => {
      if (decl.type !== 'declaration') {
        return;
      }
      const { property, value } = decl;
      if (decl.property.startsWith('--')) {
        const key = formatCustomPropertyName(property);
        const populatedValue = value.replace(/var\(([\w|-]*)\)/g, (full, match) => {
          const computedValue = tokens[formatCustomPropertyName(match)];
          return computedValue ? computedValue.value : `var(${match})`;
        });
        tokens[key] = {
          name: property,
          value: populatedValue,
          var: `var(${property})`
        };
      }
    });
  });
});

readdirSync(templateDir).forEach(templateFile => {
  const template = require(join(templateDir, templateFile));
  outputFileSync(template.getOutputPath({ outDir }), template.getContent({ tokens }));
});
