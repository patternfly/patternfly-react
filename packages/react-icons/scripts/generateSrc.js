const path = require('path');
const fs = require('fs');
const icons = require('./icons');

const destDir = path.join(__dirname, '../src/icons');

const removeSnake = s =>
  s
    .toUpperCase()
    .replace('-', '')
    .replace('_', '');
const toCamel = s => `${s[0].toUpperCase()}${s.substr(1).replace(/([-_][a-z])/gi, removeSnake)}`;

/**
 * @param {string} val possibly undefined value to transform into a string
 */
function stringify(val) {
  return val ? val : '';
}

/**
 * Generates src/icons/*.tsx files
 */
function generateSrc() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }

  const index = [];
  Object.entries(icons).forEach(([iconName, icon]) => {
    const fname = `${iconName}-icon.tsx`;
    const jsName = `${toCamel(iconName)}Icon`;
    fs.writeFileSync(
      path.join(destDir, fname),
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

export const ${jsName}: React.FunctionComponent<Omit<SVGIconProps, 'config'>> = (
  props
) => {
  const newProps = Object.assign({ config: ${jsName}Config }, props) as SVGIconProps;
  return React.createElement(SVGIcon, newProps);
};

export default ${jsName};\n`
    );

    index.push(path.basename(fname, '.tsx'));
  });

  fs.writeFileSync(
    path.join(destDir, 'index.ts'),
    `${index
      .sort()
      .map(fname => `export * from './${fname}';`)
      .join('\n')}\n`
  );

  // eslint-disable-next-line no-console
  console.log('Generated', index.length, 'icons.');
}

generateSrc();
