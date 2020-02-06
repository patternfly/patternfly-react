/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const glob = require('glob');
const fse = require('fs-extra');
const regex = require('./convertComponentHelpers');
/* eslint-enable @typescript-eslint/no-var-requires */

// Usage: node scripts/convertComponentToTS.js src/components/Alert
const srcDir = process.argv[2];

const testFiles = glob.sync('*.test.js', {
  cwd: srcDir
});
testFiles.forEach(file => {
  const from = path.join(srcDir, file);
  fse.moveSync(from, from.replace('.test.js', '.test.tsx'));
});

const typeFiles = glob.sync('*.d.ts', {
  cwd: srcDir
});
typeFiles.forEach(file => {
  const from = path.join(srcDir, file);
  fse.removeSync(from);
});

const indexFile = path.join(srcDir, 'index.js');
if (fse.pathExistsSync(indexFile)) {
  fse.moveSync(indexFile, path.join(srcDir, 'index.ts'));
}

const files = glob.sync('*.js', {
  cwd: srcDir
});
files
  .filter(file => file.indexOf('.docs') === -1)
  .forEach(file => {
    // eslint-disable-next-line no-console
    console.log('Converting file', file);
    const from = path.join(srcDir, file);
    const sourceText = fse.readFileSync(from).toString();
    const outTest = regex.convertToTS(sourceText);
    // process.exit(0);
    fse.removeSync(from);
    fse.writeFileSync(from.replace('.js', '.tsx'), outTest);
  });
