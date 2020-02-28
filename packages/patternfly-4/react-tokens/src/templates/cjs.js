const { join } = require('path');

module.exports = {
  getOutputPath: ({ outDir }) => join(outDir, 'js/index.js'),
  getContent: ({ tokens }) =>
    Object.keys(tokens).reduce((acc, key) => `${acc}module.exports.${key} = ${JSON.stringify(tokens[key], null, 2)}\n`, ''),
  getSingleOutputPath: ({ outDir, tokenName }) => join(outDir, `js/${tokenName}.js`),
  getSingleContent: ({ tokenValue }) => `module.exports = ${JSON.stringify(tokenValue, null, 2)}\n`
};
