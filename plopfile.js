const { setActionTypes } = require('./scripts/generators/actionTypes');
const { setHelpers } = require('./scripts/generators/helpers');
const setPF3Generators = require('./scripts/generators/patternfly-3-component');
const setPackageGenerators = require('./scripts/generators/package');

module.exports = plop => {
  setHelpers(plop);
  setActionTypes(plop);

  setPF3Generators(plop);
  setPackageGenerators(plop);
};
