/* eslint-disable global-require,import/no-dynamic-require */
const glob = require('glob');
const fs = require('fs');

const tsFiles = glob.sync('css/**/*.ts', { ignore: ['**/*.d.ts'] });

tsFiles.forEach(file => fs.unlinkSync(file));

