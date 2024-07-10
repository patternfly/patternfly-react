const { setActionTypes } = require('./scripts/generators/actionTypes');
const { setHelpers } = require('./scripts/generators/helpers');
const setPFGenerators = require('./scripts/generators/patternfly-component');
const setPackageGenerators = require('./scripts/generators/package');

module.exports = (plop) => {
  setHelpers(plop);
  setActionTypes(plop);

  setPFGenerators(plop);
  setPackageGenerators(plop);
};
