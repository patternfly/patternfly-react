const { join } = require('path');

module.exports = {
  getOutputPath: outDir => join(outDir, 'js/icons/index.js'),
  getContent: fnames => `"use strict";
function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
${fnames.map(fname => `__export(require("./${fname}"));`)}
`,
  getSingleOutputPath: (outDir, fname) => join(outDir, `js/icons/${fname}.js`),
  getSingleContent: (jsName, icon) => `"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SVGIcon_1 = require("../SVGIcon");
exports.${jsName}Config = {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: '${icon.svgPathData}',
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0},
  transform: '${icon.transform || ''}'
};
exports.${jsName} = function (props) {
  var newProps = Object.assign({ config: exports.${jsName}Config }, props);
  return react_1.default.createElement(SVGIcon_1.SVGIcon, newProps);
};
exports.default = exports.${jsName};
`
};
