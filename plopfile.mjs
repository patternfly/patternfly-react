import { setActionTypes } from './scripts/generators/actionTypes.mjs';
import { setHelpers } from './scripts/generators/helpers.mjs';
import setPFGenerators from './scripts/generators/patternfly-component/index.mjs';
import setPackageGenerators from './scripts/generators/package/index.mjs';

export default function (plop) {
  setHelpers(plop);
  setActionTypes(plop);

  setPFGenerators(plop);
  setPackageGenerators(plop);
}
