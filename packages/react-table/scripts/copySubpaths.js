/**
 * Copy subpath modules into the package root directory for ease of access.
 */
const { copySync } = require('fs-extra');
const { resolve, dirname } = require('path');

['deprecated', 'components'].forEach(subPathName => {
  const source = dirname(require.resolve(`@patternfly/react-table/dist/esm/${subPathName}`));
  const destination = resolve(__dirname, `../${subPathName}`);

  copySync(source, destination);
});
