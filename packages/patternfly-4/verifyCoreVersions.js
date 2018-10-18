/* eslint-disable no-console, import/no-extraneous-dependencies */
const Repository = require('lerna/lib/Repository');
const PackageUtilities = require('lerna/lib/PackageUtilities');

const packages = PackageUtilities.getPackages(new Repository());

const versions = new Map();
const corePackageName = '@patternfly/patternfly-next';

packages
  .forEach(({ name, dependencies = {}, devDependencies = {}, optionalDependencies = {}, peerDependencies = {} }) => {
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
  });

if (versions.size > 1) {
  console.error(`error: @patternfly/patternfly-next versions must match for all packages`);
  console.error('-'.repeat(10));
  versions.forEach((packagesNames, version) => {
    console.error(`v${version}: ${packagesNames.join(', ')}`);
  });
  console.error('-'.repeat(10));
  process.exit(1);
}
