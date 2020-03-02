/* eslint-disable no-console, import/no-extraneous-dependencies */
const helpers = require('./lernaHelpers');

const versions = new Map();
const corePackageName = '@patternfly/patternfly';

async function verify() {
  const packages = await helpers.getPfPackages(false);
  const pkgConfigs = packages.map(pkg => pkg.toJSON());
  pkgConfigs.forEach(
    ({ name, dependencies = {}, devDependencies = {}, optionalDependencies = {}, peerDependencies = {} }) => {
      [
        ...Object.entries(dependencies),
        ...Object.entries(devDependencies),
        ...Object.entries(optionalDependencies),
        ...Object.entries(peerDependencies)
      ]
        .filter(dep => dep[0] === corePackageName)
        .forEach(([, version]) => {
          versions.set(version, [...(versions.get(version) || []), name]);
        });
    }
  );
  if (versions.size > 1) {
    console.error(`error: @patternfly/patternfly versions must match for all packages`);
    console.error('-'.repeat(10));
    versions.forEach((packagesNames, version) => {
      console.error(`v${version}: ${packagesNames.join(', ')}`);
    });
    console.error('-'.repeat(10));
    process.exit(1);
  }
}
verify();
