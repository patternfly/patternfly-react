const path = require('path');
const glob = require('glob');
const fse = require('fs-extra');
const Repository = require('lerna/lib/Repository');
const PackageUtilities = require('lerna/lib/PackageUtilities');
const log = require('npmlog');

const packages = PackageUtilities.getPackages(new Repository());

packages.forEach(pkg => {
  const pkgRoot = pkg.location;
  const srcDir = path.resolve(pkgRoot, './src');
  const distDir = path.resolve(pkgRoot, './dist/js');

  const files = glob.sync('**/*.d.ts', {
    cwd: srcDir
  });
  files.forEach(file => {
    const from = path.join(srcDir, file);
    const to = path.join(distDir, file);
    log.info('copyTS', `${from} --> ${to}`);
    fse.copySync(from, to);
  });
});
