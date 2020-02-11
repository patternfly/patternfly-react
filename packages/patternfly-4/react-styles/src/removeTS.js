/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require('glob');
const fs = require('fs');
/* eslint-enable @typescript-eslint/no-var-requires */

glob.sync('css/**/*.ts', { ignore: ['**/*.d.ts'] }).forEach(file => fs.unlinkSync(file));
