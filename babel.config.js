module.exports = {
  extends: './packages/babel.config.js',
  presets: [['@babel/env', {'modules': 'commonjs'}], '@babel/react'],
};
