const { join } = require('path');

module.exports = {
  getOutputPath: ({ outDir }) => join(outDir, 'js/index.js'),
  getContent: ({ tokens }) =>
    Object.keys(tokens).reduce((acc, key) => `${acc}module.exports.${key} = ${JSON.stringify(tokens[key])}\n`, '')
};
