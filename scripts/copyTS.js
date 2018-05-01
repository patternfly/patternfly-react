/* eslint-disable no-console */
const path = require('path');
const glob = require('glob');
const fse = require('fs-extra');

const outDir = path.resolve(__dirname, '../dist/js');
const srcDir = path.resolve(__dirname, '../src');
const files = glob.sync('**/*.d.ts', { cwd: srcDir });

Promise.all(
  files.map(file => {
    const from = path.join(srcDir, file);
    const to = path.join(outDir, file);
    return fse.copy(from, to);
  })
)
  .then(() => {
    console.log('Successfully copied TypeScript definition files');
  })
  .catch(err => {
    console.log('Failed to copy TypeScript definition files');
    console.log(JSON.stringify(err, null, 2));
    process.exit(1);
  });
