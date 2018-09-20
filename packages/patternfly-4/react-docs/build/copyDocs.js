/* eslint-disable global-require,import/no-dynamic-require */
const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');

const dest = path.resolve(__dirname, '../dist');

const packageDirs = ['react-core'];
const moduleTypes = ['js', 'esm'];

moduleTypes.forEach(moduleType => {
  packageDirs.forEach(packageDir => copyPackageDocs(packageDir, moduleType));
});

copyStyles();
copyAssets();

function copyStyles() {
  const packageDir = 'react-core';
  const moduleType = 'styles';
  const packageBase = path.resolve(__dirname, '../../', packageDir);
  const packageDist = path.join(packageBase, 'dist', moduleType);
  const { name } = require(path.join(packageBase, 'package.json'));

  const formattedName = name.replace('@patternfly/', '');
  const from = path.join(packageDist);
  const to = path.join(dest, moduleType, formattedName);
  fs.copySync(from, to);
}

function copyAssets() {
  const from = path.resolve(__dirname, '../dist/styles/react-core/assets');
  const to = path.resolve(__dirname, '../public/assets');
  fs.copySync(from, to);
}

function copyPackageDocs(packageDir, moduleType) {
  const packageBase = path.resolve(__dirname, '../../', packageDir);
  const packageDist = path.join(packageBase, 'dist', moduleType);
  const { name } = require(path.join(packageBase, 'package.json'));

  const formattedName = name.replace('@patternfly/', '');

  const docFiles = glob.sync('**/*.docs.js', { cwd: packageDist });
  const exampleFiles = glob.sync('**/examples/**', { cwd: packageDist });
  const copyDocFile = createCopyFunction(formattedName, packageDist, moduleType);

  docFiles.forEach(copyDocFile);
  exampleFiles.forEach(copyDocFile);
}

function createCopyFunction(packageName, packageDist, moduleType) {
  return filePath => {
    const from = path.join(packageDist, filePath);
    const to = path.join(dest, moduleType, packageName, filePath);
    fs.copySync(from, to);
  };
}
