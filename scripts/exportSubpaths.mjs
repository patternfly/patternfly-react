/* eslint-disable no-console */
import fse from 'fs-extra';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const root = process.cwd();
const packageJson = require(`${root}/package.json`);

if (!(process.argv.includes('--config') && process.argv.indexOf('--config') + 1 < process.argv.length)) {
  console.log('--config is required followed by the config file name');
  process.exit(1);
}

const configJson = require(`${root}/${process.argv[process.argv.indexOf('--config') + 1]}`);

if (!configJson.paths || configJson.paths.length === 0) {
  console.log('directories are required');
  process.exit(1);
}

const packageName = configJson.packageName;
if (!packageName) {
  console.log('packageName is required');
  process.exit(1);
}

/**
 * Re-export subpath modules into the package root directory for ease of access.
 */
async function createPackage(directoryName) {
  const content = {
    name: `${packageName}-${directoryName}`,
    main: `../dist/js/${directoryName}/index.js`,
    module: `../dist/esm/${directoryName}/index.js`,
    typings: `../dist/esm/${directoryName}/index.d.ts`,
    version: packageJson.version,
    private: true
  };

  const dirPath = path.join(root, directoryName);

  await fse.mkdir(dirPath);
  await fse.writeJSON(path.join(dirPath, 'package.json'), content);
}

configJson.paths.forEach((dirName) => {
  try {
    createPackage(dirName);
  } catch (error) {
    console.log('failed to create re-export package file');
    console.log(error);
  }
});
