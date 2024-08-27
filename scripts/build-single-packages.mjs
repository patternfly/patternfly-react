/* eslint-disable no-console */
import fse from 'fs-extra';
import { createRequire } from 'node:module';
import path from 'node:path';
import { glob } from 'glob';
import getDynamicModuleMap from './parse-dynamic-modules.mjs';

const require = createRequire(import.meta.url);
const root = process.cwd();
const packageJson = require(`${root}/package.json`);

if (!(process.argv.includes('--config') && process.argv.indexOf('--config') + 1 < process.argv.length)) {
  console.log('--config is required followed by the config file name');
  process.exit(1);
}

const configJson = require(`${root}/${process.argv[process.argv.indexOf('--config') + 1]}`);

const foldersExclude = configJson.exclude ? configJson.exclude : [];

let moduleGlob = configJson.moduleGlob;

if (moduleGlob && !Array.isArray(moduleGlob)) {
  moduleGlob = [moduleGlob];
} else if (!moduleGlob) {
  moduleGlob = ['/dist/esm/*/*/**/index.js'];
}

const components = {
  // need the /*/*/ to avoid grabbing top level index files
  /**
   * We don't want the /index.js or /components/index.js to be have packages
   * These files will not help with tree shaking in module federation environments
   */
  files: moduleGlob
    .map((pattern) =>
      glob
        .sync(`${root}${pattern}`)
        .filter((item) => !foldersExclude.some((name) => item.includes(name)))
        .map((name) => name.replace(/\/$/, ''))
    )
    .flat()
};

async function createPackage(component) {
  const cmds = [];
  let destFile = component.replace(/[^/]+\.js$/g, 'package.json').replace('/dist/esm/', '/dist/dynamic/');

  if (component.match(/index\.js$/)) {
    destFile = component.replace(/[^/]+\.js$/g, 'package.json').replace('/dist/esm/', '/dist/dynamic/');
  } else {
    destFile = component.replace(/\.js$/g, '/package.json').replace('/dist/esm/', '/dist/dynamic/');
  }

  const pathAsArray = component.split('/');
  const destDir = destFile.replace(/package\.json$/, '');
  const esmRelative = path.relative(destDir, component);
  const cjsRelative = path.relative(destDir, component.replace('/dist/esm/', '/dist/js/'));
  const typesRelative = path.relative(destDir, component.replace(/\.js$/, '.d.ts'));

  const packageName = configJson.packageName;

  if (!packageName) {
    console.log('packageName is required!');
    process.exit(1);
  }

  let componentName = pathAsArray[pathAsArray.length - (component.match(/index\.js$/) ? 2 : 1)];

  if (pathAsArray.includes('next')) {
    componentName = `${componentName.toLowerCase()}-next-dynamic`;
  } else if (pathAsArray.includes('deprecated')) {
    componentName = `${componentName.toLowerCase()}-deprecated-dynamic`;
  } else {
    componentName = `${componentName.toLowerCase()}-dynamic`;
  }

  const content = {
    name: `${packageName}-${componentName}`,
    main: cjsRelative,
    module: esmRelative,
    typings: typesRelative,
    version: packageJson.version,
    private: true
  };

  // use ensureFile to not having to create all the directories
  fse.ensureDirSync(destDir);
  cmds.push(fse.writeJSON(destFile, content));

  return Promise.all(cmds);
}

async function generatePackages(components) {
  const cmds = components.map((component) => createPackage(component));
  return Promise.all(cmds);
}

async function generateDynamicModuleMap() {
  const moduleMap = getDynamicModuleMap(root);

  if (Object.keys(moduleMap).length === 0) {
    return Promise.resolve();
  }

  const moduleMapSorted = Object.keys(moduleMap)
    .sort()
    .reduce((acc, key) => ({ ...acc, [key]: moduleMap[key] }), {});

  return fse.writeJSON(path.resolve(root, 'dist/dynamic-modules.json'), moduleMapSorted, { spaces: 2 });
}

async function run() {
  try {
    await generatePackages(components.files);
    await generateDynamicModuleMap();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

run();
