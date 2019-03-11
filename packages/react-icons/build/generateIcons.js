const icons = require('./icons');
const path = require('path');
const nodePlop = require('node-plop');

const plop = nodePlop(path.resolve(__dirname, './generatorConfig.js'));
const pascalCase = plop.getHelper('pascalCase');
const kebabCase = plop.getHelper('kebabCase');

const allIcons = [
  ...icons.fontAwesome.solid.map((icon) => getFontAwesomeIcon(icon, 'solid')),
  ...icons.fontAwesome.regular.map((icon) => getFontAwesomeIcon(icon, 'regular', 'outlined')),
  ...Object.keys(icons.custom).map((iconName) => generateIcon(icons.custom[iconName], iconName)),
  ...Object.keys(icons.pfIcons).map(getPfIcon)
];

plop
  .getGenerator('icons')
  .runActions({ icons: allIcons })
  .catch(console.log); // eslint-disable-line

function getPfIcon(iconName) {
  const currentIcon = icons.pfIcons[iconName];
  currentIcon.yOffset = 64;
  currentIcon.transform = `rotate(180 0 ${currentIcon.height / 2}) scale(-1 1)`
  return generateIcon(currentIcon, `${iconName}`)
}

function getFontAwesomeIcon(name, packageType, prefix = '') {
  const faIconDef = require(`@fortawesome/free-${packageType}-svg-icons/${name}`); // eslint-disable-line
  const iconName = kebabCase(`${prefix}${name.substr(2)}`); // remove fa and make name kebab cased

  return generateIcon(faIconDef, iconName);
}

function generateIcon(iconDef, iconName) {
  return {
    id: `${iconName}-icon`,
    name: pascalCase(`${iconName}-icon`),
    width: iconDef.width,
    height: iconDef.height,
    yOffset: iconDef.yOffset,
    xOffset: iconDef.xOffset,
    svgPath: iconDef.svgPathData,
    transform: iconDef.transform
  };
}
