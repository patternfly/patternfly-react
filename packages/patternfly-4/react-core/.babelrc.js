const babelENV = process.env.BABEL_ENV || 'development';
const modules = babelENV !== 'production:esm' ? 'commonjs' : false;

module.exports = {
  presets: [['@babel/env', { modules }], '@babel/react'],
  ignore: (() => {
    const ignore = ['**/__snapshots__', '**/*.d.ts'];
    if (babelENV.includes('production')) {
      ignore.push('test.js', '__mocks__');
    }
    return ignore;
  })(),
  plugins: [
    '@babel/plugin-transform-typescript',
    'babel-plugin-typescript-to-proptypes',
    '@babel/plugin-proposal-export-default-from',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ]
};
