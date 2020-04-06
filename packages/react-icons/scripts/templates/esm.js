const { join } = require('path');

module.exports = {
  getOutputPath: outDir => join(outDir, 'esm/icons/index.js'),
  getContent: fnames =>
    fnames
      .sort()
      .map(fname => `export * from './${fname}';`)
      .join('\n') + '\n',
  getSingleOutputPath: (outDir, fname) => join(outDir, `esm/icons/${fname}.js`),
  getSingleContent: (jsName, icon) => `import React from 'react';
import { SVGIcon } from '../SVGIcon';
export var ${jsName}Config = {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: '${icon.svgPathData}',
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0},
  transform: '${icon.transform || ''}'
};
export var ${jsName} = function (props) {
  var newProps = Object.assign({ config: ${jsName}Config }, props);
  return React.createElement(SVGIcon, newProps);
};
export default ${jsName};\n`
};
