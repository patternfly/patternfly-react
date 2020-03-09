module.exports = {
  extends: './packages/.babelrc',
  presets: [['@babel/env', {'modules': 'commonjs'}], '@babel/react'],
};
