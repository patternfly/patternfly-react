const glob = require('glob');
const { dirname, resolve, join } = require('path');
const { parse } = require('css');
const fs = require('fs');
const { outputFileSync } = require('fs-extra');

const formatCustomPropertyName = key => key.replace('--pf-', '').replace(/-+/g, '_');

function getTokens() {
  const tokens = {};
  const pfStylesDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));
  const cssFiles = glob.sync('**/*.css', {
    cwd: pfStylesDir,
    ignore: ['assets/**']
  });
  cssFiles.forEach(filePath => {
    const absFilePath = resolve(pfStylesDir, filePath);
    const cssAst = parse(fs.readFileSync(absFilePath, 'utf8'));
    cssAst.stylesheet.rules.forEach(node => {
      if (node.type !== 'rule' || node.selectors.indexOf('.pf-t-dark') !== -1) {
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
          // Avoid stringifying numeric chart values
          const chartNum = decl.property.startsWith('--pf-chart-') && !isNaN(populatedValue);
          tokens[key] = {
            name: property,
            value: chartNum ? Number(populatedValue).valueOf() : populatedValue,
            var: `var(${property})`
          };
        }
      });
    });
  });

  return tokens;
}

function generateTokens() {
  const outDir = resolve(__dirname, '../dist');
  if (fs.existsSync(outDir)) {
    console.log('Not overwriting generated tokens files.');
    return;
  }

  const templateDir = resolve(__dirname, './templates');
  const tokens = getTokens();

  fs.readdirSync(templateDir).forEach(templateFile => {
    const template = require(join(templateDir, templateFile));
    outputFileSync(template.getOutputPath({ outDir }), template.getContent({ tokens }));
    Object.entries(tokens).forEach(([tokenName, tokenValue]) => {
      outputFileSync(
        template.getSingleOutputPath({ outDir, tokenName }),
        template.getSingleContent({ tokenName, tokenValue })
      );
    });
  });
  
  console.log('Generated files for', Object.keys(tokens).length, 'tokens.');
}

generateTokens();
