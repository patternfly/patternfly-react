const { copySync, readFileSync, writeFileSync } = require('fs-extra');
const { resolve, dirname, join } = require('path');

const stylesDir = resolve(__dirname, '../dist/styles');
const pfDir = dirname(
  require.resolve('@patternfly/patternfly-next/patternfly.css')
);

copySync(join(pfDir, 'assets/'), stylesDir);
const css = readFileSync(join(pfDir, 'patternfly.css'), 'utf8').replace(
  /\/assets\//gi,
  './'
);
writeFileSync(join(stylesDir, 'patternfly.css'), css);
