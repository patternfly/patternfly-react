const path = require('path');
const sass = require('sass');
const fs = require('fs');

const outDir = 'dist/css';

/**
 * @param {string} url - Url string
 */
function importer(url) {
  // Assume yarn hoists these.
  if (url.startsWith('patternfly')) {
    url = path.join(__dirname, `../../node_modules/patternfly/dist/sass/${url}`);
  } else if (url.startsWith('font-awesome')) {
    // font-awesome is for pf3 docs
    url = path.join(__dirname, `../../node_modules/font-awesome/scss/${url}`);
  } else if (url.startsWith('~')) {
    url = path.join(__dirname, `../../node_modules/${url.substr(1)}`);
  }
  return { file: url };
}

const res = sass.renderSync({
  file: 'sass/react-catalog-view-extension.scss',
  outputStyle: 'compressed',
  importer
});
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'react-catalog-view-extension.css'), res.css);
