import { outputFileSync } from 'fs-extra/esm';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { generateClassMaps } from './generateClassMaps.mjs';

const outDir = path.resolve(import.meta.dirname, '../css');

const writeCJSExport = (file, classMap) =>
  outputFileSync(
    path.join(outDir, file.replace(/.css$/, '.js')),
    `
"use strict";
exports.__esModule = true;
require('./${path.basename(file, '.css.js')}');
exports.default = ${JSON.stringify(classMap, null, 2)};
`.trim()
  );

const writeESMExport = (file, classMap) =>
  outputFileSync(
    path.join(outDir, file.replace(/.css$/, '.mjs')),
    `
import './${path.basename(file, '.css.js')}';
export default ${JSON.stringify(classMap, null, 2)};
`.trim()
  );

const writeDTSExport = (file, classMap) =>
  outputFileSync(
    path.join(outDir, file.replace(/.css$/, '.d.ts')),
    `
import './${path.basename(file, '.css.js')}';
declare const _default: ${JSON.stringify(classMap, null, 2)};
export default _default;
`.trim()
  );

/**
 * @param {any} classMaps Map of file names to classMaps
 */
function writeClassMaps(classMaps) {
  const pfStylesDir = path.dirname(url.fileURLToPath(import.meta.resolve('@patternfly/patternfly/patternfly.css')));

  Object.entries(classMaps).forEach(([file, classMap]) => {
    const outPath = file.includes(pfStylesDir) ? path.relative(pfStylesDir, file) : path.relative('src/css', file);

    writeCJSExport(outPath, classMap);
    writeDTSExport(outPath, classMap);
    writeESMExport(outPath, classMap);
    fs.copyFileSync(file, path.join(outDir, outPath));
  });

  // eslint-disable-next-line no-console
  console.log('Wrote', Object.keys(classMaps).length * 3, 'CSS-in-JS files');
}

writeClassMaps(generateClassMaps());
