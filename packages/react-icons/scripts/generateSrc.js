const path = require('path');
const fs = require('fs');
const icons = require('./icons');

const destDir = path.join(__dirname, '../src/icons');

const removeSnake = s => s.toUpperCase().replace('-', '').replace('_', '');
const toCamel = s => `${s[0].toUpperCase()}${s.substr(1).replace(/([-_][a-z])/ig, removeSnake)}`;

function stringify(val) {
  return Boolean(val) ? val : '';
}

function generateSrc() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }

  const index = [];
  Object.entries(icons).forEach(([iconName, icon]) => {
    const fname = `${iconName}-icon.tsx`;
    const jsName = `${toCamel(iconName)}Icon`;
    fs.writeFileSync(path.join(destDir, fname),
`import * as React from 'react';
import { SVGIcon, SVGIconProps } from '../SVGIcon';

export const ${jsName}Config = {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: '${icon.svgPathData}',
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0},
  transform: '${stringify(icon.transform)}'
};

export const ${jsName}: React.FunctionComponent<SVGIconProps> = (
  props: SVGIconProps
) => {
  // Avoid spread operator helper.
  props.config = ${jsName}Config;
  return React.createElement(SVGIcon, props);
};\n`);
  
    index.push(path.basename(fname, '.tsx'));
  });
  
  fs.writeFileSync(
    path.join(destDir, 'index.ts'),
    `${index.sort().map(fname => `export * from './${fname}';`).join('\n')}\n`
  );

  console.log('Generated', index.length, 'icons.');
}

generateSrc();
