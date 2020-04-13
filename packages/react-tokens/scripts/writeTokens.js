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

const index = [];

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
    index.push(tokenName);

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
        index.push(oldTokenName);
      });
  });

  // Index files including legacy tokens
  const esmIndexString = index.map(file => `export * from './${file}';`).join('\n');
  outputFileSync(join(outDir, 'esm', 'index.js'), esmIndexString);
  outputFileSync(join(outDir, 'js', 'index.d.ts'), esmIndexString);
  outputFileSync(
    join(outDir, 'js', 'index.js'),
    `
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
${index.map(file => `__export(require('./${file}'));`).join('\n')}
`.trim()
  );

  // eslint-disable-next-line no-console
  console.log('Wrote', index.length * 3 + 3, 'token files');
}

writeTokens(generateTokens());
