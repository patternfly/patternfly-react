/*
 * Custom loader for node-sass to allow paths in the sass files to
 * be prefixed with '@' for a custom mapping (contained in this file)
 * of to be prefixed with '~' for a mapping to a node_modules package.
 */
const path = require('path');
const findParentDir = require('find-parent-dir');
const nodeSassTildeImporter = require('node-sass-tilde-importer');

const mappings = {
  '@patternfly': 'node_modules/patternfly/dist/sass',
  '@bootstrap': 'node_modules/patternfly/node_modules/bootstrap-sass/assets/stylesheets',
  '@fontAwesome': 'node_modules/patternfly/node_modules/font-awesome-sass/assets/stylesheets'
};

module.exports = function importer(url, prev, done) {
  const url__ = url;

  if (url[0] === '@') {
    const packageRoot = findParentDir.sync(prev, 'node_modules');
    if (!packageRoot) return null;

    const mapTarget = url.substr(0, url.indexOf('/'));
    if (mappings[mapTarget]) {
      url = path.resolve(packageRoot, mappings[mapTarget], url.substr(1));
    }
  } else if (url[0] === '~') {
    return nodeSassTildeImporter(url, prev, done);
  }

  // console.log(`url "${url__}" ==> "${url}"`);
  return { file: url };
};
