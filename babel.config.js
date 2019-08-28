module.exports = {
  extends: './packages/patternfly-4/.babelrc',
  presets: [['@babel/env', {'modules': 'commonjs'}], '@babel/react'],
};
