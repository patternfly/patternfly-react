const faIcons = require('./icons/fontawesomeIcons');
const patternflyIcons = require('./icons/patternflyIcons');
const customIcons = require('./icons/customIcons');

function generateIcons() {
  return {
    ...faIcons,
    ...patternflyIcons,
    ...customIcons
  };
}

module.exports = {
  generateIcons
}
