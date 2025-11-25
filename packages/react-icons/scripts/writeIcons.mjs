import { join } from 'path';
import { outputFileSync, ensureDirSync } from 'fs-extra/esm';
import { generateIcons } from './generateIcons.mjs';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Import createIcon from compiled dist (build:esm must run first)
const createIconModule = await import('../dist/esm/createIcon.js');
const createIcon = createIconModule.createIcon;

const outDir = join(__dirname, '../dist');
const staticDir = join(outDir, 'static');

const removeSnake = (s) => s.toUpperCase().replace('-', '').replace('_', '');
const toCamel = (s) => `${s[0].toUpperCase()}${s.substr(1).replace(/([-_][\w])/gi, removeSnake)}`;

const writeCJSExport = (fname, jsName, icon) => {
  outputFileSync(
    join(outDir, 'js/icons', `${fname}.js`),
    `"use strict"
exports.__esModule = true;
exports.${jsName}Config = {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: ${JSON.stringify(icon.svgPathData)},
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0},
  svgClassName: ${JSON.stringify(icon.svgClassName)},
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
  svgPath: ${JSON.stringify(icon.svgPathData)},
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0},
  svgClassName: ${JSON.stringify(icon.svgClassName)},
};

export const ${jsName} = createIcon(${jsName}Config);

export default ${jsName};
    `.trim()
  );
};

const writeDTSExport = (fname, jsName, icon) => {
  const text = `import { ComponentClass } from 'react';
import { SVGIconProps } from '../createIcon';
export declare const ${jsName}Config: {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: ${JSON.stringify(icon.svgPathData)},
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0},
  svgClassName: ${JSON.stringify(icon.svgClassName)},
};
export declare const ${jsName}: ComponentClass<SVGIconProps>;
export default ${jsName};
    `.trim();
  const filename = `${fname}.d.ts`;
  outputFileSync(join(outDir, 'js/icons', filename), text);
  outputFileSync(join(outDir, 'esm/icons', filename), text);
};

/**
 * Generates a static SVG string from icon data using createIcon
 * @param {string} iconName The name of the icon
 * @param {object} icon The icon data object
 * @returns {string} Static SVG markup
 */
function generateStaticSVG(iconName, icon) {
  const jsName = `${toCamel(iconName)}Icon`;

  // Create icon component using createIcon
  const IconComponent = createIcon({
    name: jsName,
    width: icon.width,
    height: icon.height,
    svgPath: icon.svgPathData,
    xOffset: icon.xOffset || 0,
    yOffset: icon.yOffset || 0,
    svgClassName: icon.svgClassName
  });

  // Render the component to string
  const svgString = renderToString(createElement(IconComponent));

  // Convert React's className to class for static SVG
  return svgString.replace(/className=/g, 'class=');
}

/**
 * Writes static SVG files to dist/static directory
 * @param {object} icons icons from generateIcons
 */
function writeStaticSVGs(icons) {
  ensureDirSync(staticDir);

  Object.entries(icons).forEach(([iconName, icon]) => {
    const svgContent = generateStaticSVG(iconName, icon);
    const svgFileName = `${iconName}.svg`;
    outputFileSync(join(staticDir, svgFileName), svgContent, 'utf-8');
  });

  // eslint-disable-next-line no-console
  console.log(`Wrote ${Object.keys(icons).length} static SVG files to ${staticDir}`);
}

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

    index.push({ fname, jsName });
  });

  const esmIndexString = index
    .map(({ fname, jsName }) => `export { ${jsName}, ${jsName}Config } from './${fname}';`)
    .sort()
    .join('\n');
  outputFileSync(join(outDir, 'esm', 'icons/index.js'), esmIndexString);
  outputFileSync(join(outDir, 'esm', 'icons/index.d.ts'), esmIndexString);
  outputFileSync(join(outDir, 'js', 'icons/index.d.ts'), esmIndexString);
  outputFileSync(
    join(outDir, 'js', 'icons/index.js'),
    `"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
${index
  .map(({ fname }) => `__export(require('./${fname}'));`)
  .sort()
  .join('\n')}
`.trim()
  );

  // eslint-disable-next-line no-console
  console.log('Wrote', index.length * 3 + 3, 'icon files.');
}

const icons = generateIcons();
writeIcons(icons);
writeStaticSVGs(icons);
