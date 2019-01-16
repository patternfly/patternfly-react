const filterPackages = require('@lerna/filter-packages');
const { getPackages } = require('@lerna/project');
const minimist = require('minimist');

module.exports = {
  getPfPackages
};

async function getPfPackages(ignorePrivatePackages) {
  const { scope, ignore } = minimist(process.argv.slice(2));
  const packages = await getPackages(__dirname);
  const filtered = filterPackages(packages, scope, ignore, ignorePrivatePackages);
  return filtered;
}
