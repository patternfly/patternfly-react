const { join } = require('path');

module.exports = {
  getOutputPath: outDir => join(outDir, 'js/icons/index.d.ts'),
  getContent: fnames =>
    fnames
      .sort()
      .map(fname => `export * from './${fname}';`)
      .join('\n') + '\n',
  getSingleOutputPath: (outDir, fname) => join(outDir, `js/icons/${fname}.d.ts`),
  getSingleContent: jsName => `"use strict";
import React from 'react';
import { SVGIconProps } from '../SVGIcon';
export declare const ${jsName}Config: {
    name: string;
    height: number;
    width: number;
    svgPath: string;
    yOffset: number;
    xOffset: number;
    transform: string;
};
export declare const ${jsName}: React.FunctionComponent<Omit<SVGIconProps, 'config'>>;
export default ${jsName};
`
};
