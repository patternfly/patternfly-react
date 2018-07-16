const icons = require('./icons');
const path = require('path');
const nodePlop = require('node-plop');

const plop = nodePlop(path.resolve(__dirname, './generatorConfig.js'));
const pascalCase = plop.getHelper('pascalCase');
const camelCase = plop.getHelper('camelCase');

const allIcons = icons.fontAwesome.map(getFontAwesomeIcon);

plop
  .getGenerator('icons')
  .runActions({ icons: allIcons })
  .catch(console.log); // eslint-disable-line

function getFontAwesomeIcon(name) {
  const faIconName = camelCase(`fa-${name}`);
  const faIconDef = require(`@fortawesome/free-solid-svg-icons/${faIconName}`); // eslint-disable-line

  return {
    id: name,
    name: pascalCase(`${name}-icon`),
    width: faIconDef.width,
    height: faIconDef.height,
    svgPath: faIconDef.svgPathData
  };
}
