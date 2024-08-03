export const REMOVE_NPM_SCOPE = 'removeNPMScope';

export function setHelpers(plop) {
  plop.setHelper(REMOVE_NPM_SCOPE, (text) => text.replace(/^@patternfly\//i, ''));
}
