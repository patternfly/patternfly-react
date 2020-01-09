const envDistMapping = {
  cjs: 'js',
  esm: 'esm',
  umd: 'umd'
}

const createIconsTransformPlugin = (env) => [
  "transform-imports",
  {
    "@patternfly/react-icons": {
      transform: (importName, matches) =>
        `@patternfly/react-icons/dist/${envDistMapping[env]}/icons/${importName.split(/(?=[A-Z])/).join('-').toLowerCase()}`,
      preventFullImport: true
    }
  }
]

module.exports = {
  "presets": ["@babel/react"],
  "ignore": ["**/__snapshots__", "**/*.d.ts", "**/*.test.*"],
  "plugins": [
    "@babel/plugin-transform-typescript",
    "babel-plugin-typescript-to-proptypes",
    "@babel/plugin-proposal-export-default-from",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ],
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
}

