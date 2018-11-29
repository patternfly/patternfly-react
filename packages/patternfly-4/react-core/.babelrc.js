const babelENV = process.env.BABEL_ENV || 'development';
const modules = babelENV !== 'production:esm' ? 'commonjs' : false;

module.exports = {
  presets: [['@babel/env', { modules }], '@babel/react'],
  env: {
    "production:esm": {
      plugins: [
        [
          "@patternfly/react-styles/babel",
          {
            srcDir: "./src",
            outDir: "./dist/esm",
            useModules: true
          }
        ]
      ]
    },
    "production:cjs": {
      plugins: [
        [
          "@patternfly/react-styles/babel",
          {
            srcDir: "./src",
            outDir: "./dist/js",
            useModules: false
          }
        ]
      ]
    }
  }
}
