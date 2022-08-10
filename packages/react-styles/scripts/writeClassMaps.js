const { join, basename, resolve, relative, dirname } = require('path');
const { outputFileSync, readFileSync, writeFileSync } = require('fs-extra');
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
import('./${basename(file, '.css.js')}');
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

    // Convert relative urls to absolute from /node_modules ex: url('../../assets/images...image.svg') => url('/nodes_modules/...image.svg')
    let code = readFileSync(file).toString();
    const relImportRegex = /url\(['"]((?:\.+\/)+.*)['"]/gm;
    let relImportMatch;
    while ((relImportMatch = relImportRegex.exec(code))) {
      const relImportPath = relImportMatch[1];
      const absImportPath = /(\/node_modules\/.*)/gm.exec(resolve(dirname(file), relImportPath))[1];
      code = code.replace(relImportPath, absImportPath);
    }
    writeFileSync(join(outDir, outPath), code);
  });

  // eslint-disable-next-line no-console
  console.log('Wrote', Object.keys(classMaps).length * 3, 'CSS-in-JS files');
}

writeClassMaps(generateClassMaps());
