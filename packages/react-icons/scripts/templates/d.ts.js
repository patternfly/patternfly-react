const { join } = require('path');

module.exports = {
  getOutputPath: ({ outDir }) => join(outDir, 'js/index.js'),
  getContent: ({ tokens }) => `export * from './accessible-icon-icon';
`,
  getSingleOutputPath: ({ outDir, tokenName }) => join(outDir, `js/${tokenName}.js`),
  getSingleContent: ({ tokenValue }) => `"use strict";
  import React from 'react';
  import { SVGIconProps } from '../SVGIcon';
  export declare const IndentIconConfig: {
      name: string;
      height: number;
      width: number;
      svgPath: string;
      yOffset: number;
      xOffset: number;
      transform: string;
  };
  export declare const IndentIcon: React.FunctionComponent<Omit<SVGIconProps, 'config'>>;
  export default IndentIcon;  
`
};
