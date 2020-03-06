/* eslint-disable no-console,jsdoc/require-jsdoc */
const colors = require('colors');
const componentConfigs = require('../componentConfig');

let prettier;
try {
  // not all projects use prettier, but we want to use it if possible
  prettier = require('prettier'); // eslint-disable-line
} catch (err) {
  prettier = null;
}

const oldPackage = 'patternfly-react';
const newPackage = '@patternfly/react-core';

function getFilteredComponentConfig(specifiedComponents = '*') {
  if (specifiedComponents === '*') {
    return componentConfigs;
  }

  return specifiedComponents
    .split(',')
    .map(k => k.trim())
    .reduce((conf, key) => {
      if (!componentConfigs[key]) {
        throw new Error(`${key} is not a supported component`);
      }
      return {
        ...conf,
        [key]: componentConfigs[key]
      };
    }, {});
}

module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const filteredConfig = getFilteredComponentConfig(options.components);

  function addComponentToReactCoreImport(importName, localName) {
    const reactCoreImport = getReactCoreImport();
    if (reactCoreImport.length > 0) {
      reactCoreImport.get().node.specifiers.push(j.importSpecifier(j.identifier(importName), j.identifier(localName)));
      return;
    }

    const path = findImportAfterReactCore();
    if (path) {
      const importStatement = j.importDeclaration(
        [j.importSpecifier(j.identifier(importName), j.identifier(localName))],
        j.literal(newPackage)
      );

      // If there is a leading comment, retain it
      // https://github.com/facebook/jscodeshift/blob/master/recipes/retain-first-comment.md
      const firstNode = root.find(j.Program).get('body', 0).node;
      if (firstNode === path.node) {
        const { comments } = firstNode;
        if (comments) {
          delete firstNode.comments;
          importStatement.leadingComments = comments;
        }
      }

      j(path).insertBefore(importStatement);
    }
  }

  function findImportAfterReactCore() {
    let target;
    let targetName;

    root.find(j.ImportDeclaration).forEach(path => {
      const name = path.value.source.value.toLowerCase();
      if (name > newPackage && (!target || name < targetName)) {
        targetName = name;
        target = path;
      }
    });

    return target;
  }

  function getReactCoreImport() {
    return root.find(j.ImportDeclaration, {
      source: { value: newPackage }
    });
  }

  function getPatternflyReactImport() {
    return root.find(j.ImportDeclaration, {
      source: { value: oldPackage }
    });
  }

  function verifyNoUnsupportedPropReferences(jsxElements, unsupportedProps) {
    let hasSupportedPropReferences = false;
    jsxElements.find(j.JSXAttribute).forEach(attrPath => {
      const propName = attrPath.node.name.name;
      if (unsupportedProps.includes(propName)) {
        const { start } = attrPath.node.name.loc;
        console.log(colors.yellow(`UnsupportedProp: ${propName} (./${file.path}:${start.line}:${start.column})`));
        hasSupportedPropReferences = true;
      }
    });
    return hasSupportedPropReferences;
  }

  function getConfigForProp(componentConfig, propName) {
    const propConfig = componentConfig.props[propName];
    return typeof propConfig === 'string' ? { name: propConfig } : propConfig;
  }

  function transformProp(prop, jsxElementPath, propConfig) {
    const propInstances = j(jsxElementPath).find(j.JSXAttribute, {
      name: { name: prop }
    });

    if (propConfig.defaultValue && propInstances.length === 0) {
      jsxElementPath.node.openingElement.attributes.push(
        j.jsxAttribute(j.jsxIdentifier(propConfig.name), j.literal(propConfig.defaultValue))
      );
      return;
    }

    propInstances.forEach(propPath => {
      if (propConfig.remove) {
        j(propPath).remove();
        return;
      }

      propPath.node.name.name = propConfig.name;
    });
  }

  function removePatternflyReactImport() {
    getPatternflyReactImport().forEach(path => {
      if (path.node.specifiers.length === 0) {
        j(path).remove();
      }
    });
  }

  function getPrettySource() {
    const transformedSource = root.toSource({
      quote: 'auto',
      tabWidth: 2
    });

    return prettier
      ? prettier.format(transformedSource, {
          parser: 'babel',
          ...prettier.resolveConfig.sync(process.cwd())
        })
      : transformedSource;
  }

  let hasModifications = false;

  getPatternflyReactImport()
    .find(j.ImportSpecifier)
    .forEach(path => {
      const importedName = path.node.imported.name;
      const localName = path.node.local.name;
      const transformConfig = filteredConfig[importedName];

      if (!transformConfig) {
        return;
      }

      const allElements = root.findJSXElements(localName);

      if (verifyNoUnsupportedPropReferences(allElements, transformConfig.unsupportedProps)) {
        return;
      }

      hasModifications = true;

      allElements.forEach(elementPath => {
        Object.keys(transformConfig.props).forEach(prop => {
          transformProp(prop, elementPath, getConfigForProp(transformConfig, prop));
        });
      });
      addComponentToReactCoreImport(importedName, localName);
      j(path).remove();
    });

  if (hasModifications) {
    removePatternflyReactImport();
    return getPrettySource();
  }

  return null;
};
