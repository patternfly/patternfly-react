const { join, basename, resolve, relative, dirname } = require('path');
const { outputFileSync, copyFileSync, readFileSync, writeFileSync } = require('fs-extra');
const { generateClassMaps } = require('./generateClassMaps');

const outDir = resolve(__dirname, '../css');

const writeCJSExport = (file, classMap) =>
  outputFileSync(
    join(outDir, file.replace(/.css$/, '.js')),
    `
"use strict";
exports.__esModule = true;
require('./${basename(file, '.css.js')}');
exports.default = ${JSON.stringify(classMap, null, 2)};
`.trim()
  );

const writeESMExport = (file, classMap) =>
  outputFileSync(
    join(outDir, file.replace(/.css$/, '.mjs')),
    `
import './${basename(file, '.css.js')}';
export default ${JSON.stringify(classMap, null, 2)};
`.trim()
  );

const writeDTSExport = (file, classMap) =>
  outputFileSync(
    join(outDir, file.replace(/.css$/, '.d.ts')),
    `
import './${basename(file, '.css.js')}';
declare const _default: ${JSON.stringify(classMap, null, 2)};
export default _default;
`.trim()
  );

/**
 * @param {any} classMaps Map of file names to classMaps
 */
function writeClassMaps(classMaps) {
  const pfStylesDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));

  Object.entries(classMaps).forEach(([file, classMap]) => {
    const outPath = file.includes(pfStylesDir) ? relative(pfStylesDir, file) : relative('src/css', file);

    writeCJSExport(outPath, classMap);
    writeDTSExport(outPath, classMap);
    writeESMExport(outPath, classMap);

    if (outPath.includes('button')) {
      console.log(outPath);
      let data = readFileSync(file, 'utf-8');
      data = data.replace(
        '--pf-c-button--m-primary--BackgroundColor: var(--pf-global--primary-color--100);',
        '--pf-c-button--m-primary--BackgroundColor: purple;'
      );
      data = data.replace(
        '--pf-c-button--m-primary--Color: var(--pf-global--Color--light-100);',
        '--pf-c-button--m-primary--Color: yellow;'
      );
      writeFileSync(join(outDir, outPath), data, 'utf-8');
    } else {
      copyFileSync(file, join(outDir, outPath));
    }
  });

  // eslint-disable-next-line no-console
  console.log('Wrote', Object.keys(classMaps).length * 3, 'CSS-in-JS files');
}

writeClassMaps(generateClassMaps());
