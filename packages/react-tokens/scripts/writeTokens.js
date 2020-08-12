const { outputFileSync } = require('fs-extra');
const { resolve, join } = require('path');
const { generateTokens } = require('./generateTokens');

const outDir = resolve(__dirname, '../dist');

const writeESMExport = (tokenName, tokenString) =>
  outputFileSync(
    join(outDir, 'esm/', `${tokenName}.js`),
    `
export const ${tokenName} = ${tokenString};
export default ${tokenName};
`.trim()
  );

const writeCJSExport = (tokenName, tokenString) =>
  outputFileSync(
    join(outDir, 'js', `${tokenName}.js`),
    `
"use strict";
exports.__esModule = true;
exports.${tokenName} = ${tokenString};
exports["default"] = exports.${tokenName};
`.trim()
  );

const writeDTSExport = (tokenName, tokenString) =>
  outputFileSync(
    join(outDir, 'js', `${tokenName}.d.ts`),
    `
export const ${tokenName}: ${tokenString};
export default ${tokenName};
`.trim()
  );

const allIndex = [];
const componentIndex = [];

const outputIndex = (index, indexFile) => {
  const esmIndexString = index.map(file => `export * from './${file}';`).join('\n');
  outputFileSync(join(outDir, 'esm', indexFile), esmIndexString);
  outputFileSync(join(outDir, 'js', indexFile.replace('.js', '.d.ts')), esmIndexString);
  outputFileSync(
    join(outDir, 'js', indexFile),
    `
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
${index.map(file => `__export(require('./${file}'));`).join('\n')}
`.trim()
  );
};

/**
 * Writes CJS and ESM tokens to `dist` directory
 *
 * @param {any} tokens tokens from generateTokens
 */
function writeTokens(tokens) {
  Object.entries(tokens).forEach(([tokenName, tokenValue]) => {
    const tokenString = JSON.stringify(tokenValue, null, 2);

    writeESMExport(tokenName, tokenString);
    writeCJSExport(tokenName, tokenString);
    writeDTSExport(tokenName, tokenString);
    allIndex.push(tokenName);
    componentIndex.push(tokenName);

    // Legacy token support -- values may be incorrect.
    Object.values(tokenValue)
      .map(values => Object.entries(values))
      .reduce((acc, val) => acc.concat(val), []) // flatten
      .forEach(([oldTokenName, { name, value }]) => {
        const oldToken = {
          name,
          value: oldTokenName.includes('chart') && !isNaN(+value) ? +value : value,
          var: `var(${name})`
        };
        const oldTokenString = JSON.stringify(oldToken, null, 2);
        writeESMExport(oldTokenName, oldTokenString);
        writeCJSExport(oldTokenName, oldTokenString);
        writeDTSExport(oldTokenName, oldTokenString);
        allIndex.push(oldTokenName);
      });
  });

  // Index files including legacy tokens
  outputIndex(allIndex, 'index.js');
  outputIndex(componentIndex, 'componentIndex.js');

  // eslint-disable-next-line no-console
  console.log('Wrote', allIndex.length * 3 + 3, 'token files');
}

writeTokens(generateTokens());
