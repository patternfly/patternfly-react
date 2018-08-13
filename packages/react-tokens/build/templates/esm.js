const { join } = require('path');

module.exports = {
  getOutputPath: ({ outDir }) => join(outDir, 'esm/index.js'),
  getContent: ({ tokens }) =>
    Object.keys(tokens).reduce((acc, key) => `${acc}export const ${key} = ${JSON.stringify(tokens[key])}\n`, '')
};
