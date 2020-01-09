module.exports = {
  extends: './packages/patternfly-4/babel.config.js',
  presets: [['@babel/env', {'modules': 'commonjs'}], '@babel/react'],
};
