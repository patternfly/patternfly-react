const { name } = require('./package.json');
const baseConfig = require('../rollup.base');

module.exports = baseConfig({
  packageName: name.replace('@patternfly/', ''),
  name: 'PatternFlyTable'
});
