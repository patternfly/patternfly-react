import { outputFileSync } from 'fs-extra/esm';
import { resolve, join } from 'node:path';
import { generateTokens } from './generateTokens.mjs';

const outDir = resolve(import.meta.dirname, '../dist');

// Words that cannot be used as binding identifiers in strict mode code (e.g. the
// `switch` component token), so `export const <token>` / `declare const <token>`
// would be a syntax error.
// prettier-ignore
const RESERVED_WORDS = new Set([
  'arguments', 'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger',
  'default', 'delete', 'do', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface', 'let',
  'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'static', 'super',
  'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield'
]);

const getLocalName = (tokenName) => (RESERVED_WORDS.has(tokenName) ? `_${tokenName}` : tokenName);

// `export default` already declares the `default` export name, so an extra
// `export { _default as default }` alias would be a duplicate export.
const getAliasExport = (localName, tokenName) =>
  localName === tokenName || tokenName === 'default' ? '' : `\nexport { ${localName} as ${tokenName} };`;

const writeESMExport = (tokenName, tokenString) => {
  const localName = getLocalName(tokenName);
  const declaration =
    localName === tokenName
      ? `export const ${tokenName} = ${tokenString};`
      : `const ${localName} = ${tokenString};`;
  outputFileSync(
    join(outDir, 'esm/', `${tokenName}.js`),
    `
${declaration}${getAliasExport(localName, tokenName)}
export default ${localName};
`.trim()
  );
};

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

const writeDTSExport = (tokenName, tokenString) => {
  const localName = getLocalName(tokenName);
  const declaration =
    localName === tokenName
      ? `export const ${tokenName}: ${tokenString};`
      : `declare const ${localName}: ${tokenString};`;
  const text = `
${declaration}${getAliasExport(localName, tokenName)}
export default ${localName};
`.trim();
  const filename = `${tokenName}.d.ts`;
  outputFileSync(join(outDir, 'esm', filename), text);
  outputFileSync(join(outDir, 'js', filename), text);
};

const allIndex = {};
const componentIndex = [];

const outputIndex = (index, indexFile) => {
  const esmIndexString = index.map((file) => `export { ${file} } from './${file}';`).join('\n');
  outputFileSync(join(outDir, 'esm', indexFile), esmIndexString);
  outputFileSync(
    join(outDir, 'js', indexFile),
    `
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
${index.map((file) => `__export(require('./${file}'));`).join('\n')}
`.trim()
  );
  outputFileSync(join(outDir, 'esm', indexFile.replace('.js', '.d.ts')), esmIndexString);
  outputFileSync(join(outDir, 'js', indexFile.replace('.js', '.d.ts')), esmIndexString);
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
    allIndex[tokenName] = true;
    componentIndex.push(tokenName);

    // Legacy token support -- values may be incorrect.
    Object.values(tokenValue)
      .map((values) => Object.entries(values))
      .reduce((acc, val) => acc.concat(val), []) // flatten
      .forEach(([oldTokenName, { name, value }]) => {
        const isChart = oldTokenName.includes('chart');
        const oldToken = {
          name,
          value: isChart && !isNaN(+value) ? +value : value,
          var: isChart ? `var(${name}, ${value})` : `var(${name})` // Include fallback value for chart vars
        };
        const oldTokenString = JSON.stringify(oldToken, null, 2);
        writeESMExport(oldTokenName, oldTokenString);
        writeCJSExport(oldTokenName, oldTokenString);
        writeDTSExport(oldTokenName, oldTokenString);
        allIndex[oldTokenName] = true;
      });
  });

  // Index files including legacy tokens
  outputIndex(Object.keys(allIndex), 'index.js');
  outputIndex(componentIndex, 'componentIndex.js');

  // eslint-disable-next-line no-console
  console.log('Wrote', Object.keys(allIndex).length * 4 + 4, 'token files');
}

writeTokens(generateTokens());
