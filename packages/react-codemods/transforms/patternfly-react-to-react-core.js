const oldPackage = 'patternfly-react';
const newPackage = '@patternfly/react-core';

module.exports = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  let hasModifications = false;

  root.find(j.ImportDeclaration).forEach(path => {
    if (path.node.source.value === oldPackage) {
      hasModifications = true;
      path.node.source.value = newPackage;
    }
  });

  return hasModifications
    ? root.toSource({
        quote: 'single',
        tabWidth: 2
      })
    : null;
};
