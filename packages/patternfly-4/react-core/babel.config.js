const envDistMapping = {
  cjs: 'js',
  esm: 'esm',
  umd: 'umd'
};

const createIconsTransformPlugin = env => [
  'transform-imports',
  {
    '@patternfly/react-icons': {
      transform: (importName, matches) =>
        `@patternfly/react-icons/dist/${envDistMapping[env]}/icons/${importName
          .split(/(?=[A-Z])/)
          .join('-')
          .toLowerCase()}`,
      preventFullImport: true
    }
  }
];

module.exports = {
  extends: '../.babelrc',
  env: {
    cjs: {
      plugins: [createIconsTransformPlugin('cjs')]
    },
    esm: {
      plugins: [createIconsTransformPlugin('esm')]
    },
    umd: {
      plugins: [createIconsTransformPlugin('umd')]
    }
  }
};
