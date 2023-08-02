/* eslint-disable no-console */
const fs = require('fs');
const glob = require('glob');

const importFile = 'packages/react-docs/patternfly-docs/patternfly-docs.css.js'

const currentImports = fs.readFileSync(importFile, 'utf-8');

const newCssFiles = glob.sync('packages/react-docs/*.css');

newCssFiles.forEach((filePath) => {
  const fileName = filePath.split('/')[2]

  if (currentImports.includes(fileName)) {
    return;
  }
  console.log('adding import for ', fileName)
  fs.appendFileSync('packages/react-docs/patternfly-docs/patternfly-docs.css.js', `\nimport '../${fileName}';`);
});
