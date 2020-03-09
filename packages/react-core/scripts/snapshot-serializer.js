/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { createSerializer } = require('@patternfly/react-styles/snapshot-serializer');
/* eslint-enable @typescript-eslint/no-var-requires */

const pf4CSS = fs.readFileSync(require.resolve('@patternfly/patternfly/patternfly-base.css'), 'utf8');

module.exports = createSerializer({
  globalCSS: pf4CSS.match(/:root\W?\{(.|\n)*?\}/)[0]
});
