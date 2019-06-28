const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const tippyPath = resolve(__dirname, '../../../../node_modules/tippy.js/index.css');
writeFileSync(
  tippyPath,
  readFileSync(tippyPath, 'utf8')
    .replace("import tippy from 'tippy.js'", "import tippy from 'tippy.js/esm'")
    .replace("export { default as tippy } from 'tippy.js';", "export { default as tippy } from 'tippy.js/esm';")
);
