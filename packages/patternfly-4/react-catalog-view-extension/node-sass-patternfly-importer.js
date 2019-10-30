const path = require('path');

function importer(url) {
  // Assume yarn hoists these.
  if (url.startsWith('bootstrap')) {
    url = path.join(__dirname, require.resolve(`bootstrap-sass/assets/stylesheets/${url}`));
  } else if (url.startsWith('patternfly')) {
    url = path.join(__dirname, require.resolve(`patternfly/dist/sass/${url}`));
  } else if (url.startsWith('font-awesome')) {
    // font-awesome is for pf3 docs
    url = path.join(__dirname, require.resolve(`font-awesome/scss/${url}`));
  } else if (url.startsWith('~')) {
    url = path.join(__dirname, require.resolve(`${url.substr(1)}`));
  }
  return { file: url };
}

module.exports = importer;
