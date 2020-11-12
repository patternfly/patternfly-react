const path = require('path');

/**
 * @param {string} url - Url string
 */
function importer(url) {
  // Assume yarn hoists these.
  if (url.startsWith('~')) {
    url = path.join(__dirname, `../../node_modules/${url.substr(1)}`);
  }
  return { file: url };
}

module.exports = importer;
