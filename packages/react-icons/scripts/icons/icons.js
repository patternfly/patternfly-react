const { fas } = require('@fortawesome/free-solid-svg-icons');
const { far } = require('@fortawesome/free-regular-svg-icons');
const { fab } = require('@fortawesome/free-brands-svg-icons');
const { custom } = require('./customIcons');
const { patternflyIcons } = require('./patternflyIcons');

function generateIcon(iconDef, iconName) {
  return {
    id: `${iconName}-icon`,
    name: iconName,
    width: iconDef.width,
    height: iconDef.height,
    yOffset: iconDef.yOffset,
    xOffset: iconDef.xOffset,
    svgPath: iconDef.svgPathData,
    transform: iconDef.transform
  };
}



module.exports = {

  custom,
};
