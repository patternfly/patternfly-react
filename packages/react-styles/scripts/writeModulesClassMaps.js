const { join, basename, resolve, relative, dirname } = require('path');
const { outputFileSync, copyFileSync, readFileSync, writeFileSync } = require('fs-extra');
const { generateClassMaps } = require('./generateClassMaps');

const outDir = resolve(__dirname, '../css');

const writeCJSExport = (file, classMap) =>
  outputFileSync(
    join(outDir, file.replace(/.css$/, '.module.js')),
    `
"use strict";
exports.__esModule = true;
exports.default = ${JSON.stringify(classMap, null, 2)};
`.trim()
  );

const writeESMExport = (file, classMap) =>
  outputFileSync(
    join(outDir, file.replace(/.css$/, '.module.mjs')),
    `
export default ${JSON.stringify(classMap, null, 2)};
`.trim()
  );

const writeDTSExport = (file, classMap) =>
  outputFileSync(
    join(outDir, file.replace(/.css$/, '.module.d.ts')),
    `
import './${basename(file, '.css')}.module.css';
declare const _default: ${JSON.stringify(classMap, null, 2)};
export default _default;
`.trim()
  );

/**
 * @param {any} classMaps Map of file names to classMaps
 */
function writeModulesClassMaps(classMaps) {
  const pfStylesDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));

  Object.entries(classMaps).forEach(([file, classMap]) => {
    const outPath = file.includes(pfStylesDir) ? relative(pfStylesDir, file) : relative('src/css', file);
    const moduleOutPath = outPath.replace('.css', '.module.css');

    writeCJSExport(outPath, classMap);
    writeDTSExport(outPath, classMap);
    writeESMExport(outPath, classMap);

    if (outPath.includes('button')) {
      console.log(outPath);
      let data = readFileSync(file, 'utf-8');
      data = data.replaceAll(/:where\(\.pf-theme-dark\) /g, '.pf-theme-dark');
      data = data.replace(
        '--pf-c-button--m-primary--BackgroundColor: var(--pf-global--primary-color--100);',
        '--pf-c-button--m-primary--BackgroundColor: purple;'
      );
      data = data.replace(
        '--pf-c-button--m-primary--Color: var(--pf-global--Color--light-100);',
        '--pf-c-button--m-primary--Color: yellow;'
      );
      writeFileSync(join(outDir, moduleOutPath), data, 'utf-8');
    } else {
      copyFileSync(file, join(outDir, moduleOutPath));
    }
  });

  // eslint-disable-next-line no-console
  console.log('Wrote', Object.keys(classMaps).length * 3, 'CSS-in-JS files');
}

writeModulesClassMaps(generateClassMaps());
