const { readFileSync, statSync, readdirSync } = require('fs');
const { resolve, parse } = require('path');

function isRelative(pathString) {
  return pathString.substr(0, 2) === '..' || pathString.substr(0, 2) === './';
}

/**
 * Helper function to map package's sass includes to array of paths. Path should be relevant to root folder.
 * @example
 *   Package object:
 *   {
 *     name: 'some-name',
 *     sassIncludes: {
 *       onePath: 'node_modules/somePkg/its/sass/folder'
 *     }
 *   }
 *
 *   Will be mapped to:
 *   ['node_modules/somePkg/its/sass/folder']
 * @param pkg as object.
 * @returns {Array} of sass include paths.
 */
function filterSassIncludes(pkg) {
  if (pkg.sassIncludes) {
    return Object.keys(pkg.sassIncludes).map(oneInclude => {
      const prefix = isRelative(pkg.sassIncludes[oneInclude]) ? '' : '../';
      return resolve(__dirname, `${prefix}${pkg.sassIncludes[oneInclude]}`);
    });
  }
  return [];
}

/**
 * Helper function for flattening arrays [[1, 2], [3]] -> [1, 2, 3].
 * @param array to flatten.
 * @returns {Array.<*>} one level flattened array.
 */
function flatten(array) {
  return [].concat(...array);
}

/**
 * Helper function to read nad parse package.json of one monorepo's package.
 * @param pkgLocation path to package.
 * @return Object package.json as object.
 */
function readPackage(pkgLocation) {
  return JSON.parse(readFileSync(`${pkgLocation}/package.json`, 'utf8'));
}

/**
 * Helper function to resolve paths to each package. It takes folderLocation which is ../packages and maps only folders.
 * @param packagesLocation
 */
function listPackages(packagesLocation) {
  return readdirSync(resolve(__dirname, packagesLocation))
    .filter(onePkg =>
      statSync(
        resolve(__dirname, `${packagesLocation}/${onePkg}`)
      ).isDirectory()
    )
    .map(file => resolve(__dirname, `${packagesLocation}/${parse(file).name}`));
}

module.exports = {
  filterSassIncludes,
  flatten,
  readPackage,
  listPackages
};
