const { join } = require('path');

module.exports = {
  getOutputPath: ({ outDir }) => join(outDir, 'js/index.d.ts'),
  getContent: ({ tokens }) =>
    Object.keys(tokens).reduce((acc, key) => {
      const token = tokens[key];
      const tokenTypeValue = Object.keys(token)
        .map(tokenKey => `${JSON.stringify(tokenKey)}: ${JSON.stringify(token[tokenKey])};`)
        .join(' ');
      return `${acc}export const ${key}: { ${tokenTypeValue} }\n`;
    }, '')
};
