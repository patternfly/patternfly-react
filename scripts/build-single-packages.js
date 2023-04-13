/* eslint-disable no-console */
const fse = require('fs-extra');
const glob = require('glob');

const root = process.cwd();
const packageJson = require(`${root}/package.json`);

if (!(process.argv.includes('--config')  && process.argv.indexOf('--config') + 1 < process.argv.length)) {
  console.log('--config is required followed by the config file name');
  process.exit(1);
}

const configJson = require(`${root}/${process.argv[process.argv.indexOf('--config') + 1]}`);

const foldersexclude = configJson.exclude ? configJson.exclude : []

if (!configJson.modules || configJson.modules.length === 0) {
  console.log('modules are required');
  process.exit(1);
}

const components = configJson.modules.map(module => ({
    files: glob
      .sync(`${root}/${module.name}/**/**/index.js`)
      .filter((item) => !foldersexclude.some((name) => item.includes(name)))
      .map((name) => name.replace(/\/$/, '')),
    type: module.type
  }));

async function createPackage(component, dist) {
  const cmds = [];
  const destFile = component.replace(/index.js/g, 'package.json');
  const pathAsArray = component.split('/');
  const esmRelative = `.${component.split(`${root}`)[1]}`;

  const packageName = configJson.packageName;
  if (!packageName) {
    console.log("packageName is required!")
    process.exit(1);
  }

  let componentName = pathAsArray[pathAsArray.length - 2];
  if (pathAsArray.includes("next")) {
    componentName = `${componentName.toLowerCase()}-next-${dist}`;
  } else if (pathAsArray.includes("deprecated")) {
    componentName = `${componentName.toLowerCase()}-deprecated-${dist}`;
  } else {
    componentName = `${componentName.toLowerCase()}-${dist}`;
  }

  const content = {
    name: `${packageName}-${componentName}`,
    main: 'index.js',
    module: esmRelative,
    typings: 'index.d.ts',
    version: packageJson.version
  };

  cmds.push(fse.writeJSON(destFile, content));

  return Promise.all(cmds);
}

async function generatePackages(components, dist) {
  const cmds = components.map((component) => createPackage(component, dist));
  return Promise.all(cmds);
}

async function run(components, dist) {
  try {
    await generatePackages(components, dist);
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
}

components.forEach(component => {
  run(component.files, component.type);
});

