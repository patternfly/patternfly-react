const { join } = require('path');
const { outputFileSync } = require('fs-extra');
const { generateIcons } = require('./generateIcons');

const outDir = join(__dirname, '../dist');

const removeSnake = s =>
  s
    .toUpperCase()
    .replace('-', '')
    .replace('_', '');
const toCamel = s => `${s[0].toUpperCase()}${s.substr(1).replace(/([-_][a-z])/gi, removeSnake)}`;

const writeCJSExport = (fname, jsName, icon) => {
  outputFileSync(
    join(outDir, 'js/icons', `${fname}.js`),
    `"use strict"
exports.__esModule = true;
exports.${jsName}Config = {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: '${icon.svgPathData}',
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0},
  transform: '${icon.transform || ''}'
};
exports.${jsName} = require('../createIcon').createIcon(exports.${jsName}Config);
exports["default"] = exports.${jsName};
    `.trim()
  );
};

const writeESMExport = (fname, jsName, icon) => {
  outputFileSync(
    join(outDir, 'esm/icons', `${fname}.js`),
    `import { createIcon } from '../createIcon';

export const ${jsName}Config = {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: '${icon.svgPathData}',
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0},
  transform: '${icon.transform || ''}'
};

export const ${jsName} = createIcon(${jsName}Config);

export default ${jsName};
    `.trim()
  );
};

const writeDTSExport = (fname, jsName, icon) => {
  outputFileSync(
    join(outDir, 'js/icons', `${fname}.d.ts`),
    `import React from 'react';
import { SVGIconProps } from '../createIcon';
export declare const ${jsName}Config: {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: '${icon.svgPathData}',
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0},
  transform: '${icon.transform || ''}'
};
export declare const ${jsName}: React.ComponentClass<SVGIconProps>;
export default ${jsName};
    `.trim()
  );
};

/**
 * Writes CJS and ESM icons to `dist` directory
 *
 * @param {any} icons icons from generateIcons
 */
function writeIcons(icons) {
  const index = [];
  Object.entries(icons).forEach(([iconName, icon]) => {
    const fname = `${iconName}-icon`;
    const jsName = `${toCamel(iconName)}Icon`;
    writeESMExport(fname, jsName, icon);
    writeCJSExport(fname, jsName, icon);
    writeDTSExport(fname, jsName, icon);

    index.push(fname);
  });

  const esmIndexString = index
    .sort()
    .map(file => `export * from './${file}';`)
    .join('\n');
  outputFileSync(join(outDir, 'esm', 'icons/index.js'), esmIndexString);
  outputFileSync(join(outDir, 'js', 'icons/index.d.ts'), esmIndexString);
  outputFileSync(
    join(outDir, 'js', 'icons/index.js'),
    `"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
${index
  .sort()
  .map(file => `__export(require('./${file}'));`)
  .join('\n')}
`.trim()
  );

  // eslint-disable-next-line no-console
  console.log('Wrote', index.length * 3 + 3, 'icon files.');
}

writeIcons(generateIcons());
