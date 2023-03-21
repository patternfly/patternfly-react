const fse = require('fs-extra');
const glob = require('glob');

const root = process.cwd();
const packageJson = require(`${root}/package.json`);

const foldersBlackList = [`${root}/dist/esm/deprecated/index.js`];
const esmComponents = glob
  .sync(`${root}/dist/esm/**/**/index.js`)
  .filter((item) => !foldersBlackList.some((name) => item.includes(name)))
  .map((name) => name.replace(/\/$/, ''));

const cjsComponents = glob
  .sync(`${root}/dist/js/**/**/index.js`)
  .filter((item) => !foldersBlackList.some((name) => item.includes(name)))
  .map((name) => name.replace(/\/$/, ''));

async function createPackage(component, dist) {
  const cmds = [];
  const destFile = component.replace(/index.js/g, 'package.json');
  const pathAsArray = component.split('/');
  const esmRelative = `.${component.split(`${root}`)[1]}`;
  const packageNameIndex = process.argv.indexOf('--packageName');
  
  let packageName = '';
  if(packageNameIndex + 1 < process.argv.length) {
     packageName=process.argv[packageNameIndex + 1];
  } else {
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
    // eslint-disable-next-line no-console
    console.log(error)
    process.exit(1);
  }
}

run(esmComponents, 'esm');
run(cjsComponents, 'cjs')
