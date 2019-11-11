const path = require('path');

function importer(url) {
  // Assume yarn hoists these.
  if (url.startsWith('bootstrap')) {
    url = path.join(__dirname, `../../../node_modules/bootstrap-sass/assets/stylesheets/${url}`);
  } else if (url.startsWith('patternfly')) {
    url = path.join(__dirname, `../../../node_modules/patternfly/dist/sass/${url}`);
  } else if (url.startsWith('font-awesome')) {
    // font-awesome is for pf3 docs
    url = path.join(__dirname, `../../../node_modules/font-awesome/scss/${url}`);
  } else if (url.startsWith('~')) {
    url = path.join(__dirname, `../../../node_modules/${url.substr(1)}`);
  }
  return { file: url };
}

module.exports = importer;
