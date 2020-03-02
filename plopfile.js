const { setActionTypes } = require('./scripts/generators/actionTypes');
const { setHelpers } = require('./scripts/generators/helpers');
const setPF4Generators = require('./scripts/generators/patternfly-4-component');
const setPackageGenerators = require('./scripts/generators/package');

module.exports = plop => {
  setHelpers(plop);
  setActionTypes(plop);

  setPF4Generators(plop);
  setPackageGenerators(plop);
};
