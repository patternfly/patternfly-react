const babelENV = process.env.BABEL_ENV || 'development';
const modules = babelENV !== 'production:esm' ? 'commonjs' : false;

module.exports = {
  presets: [['env', { modules: modules }], 'react'],
  plugins: [
    'transform-class-properties',
    'transform-export-extensions',
    'transform-object-rest-spread',
    'transform-object-assign'
  ],
  ignore: (() => {
    const ignore = [
      'src/**/__snapshots__',
      'src/**/*.stories.js',
      'src/**/Stories'
    ];
    if (babelENV.includes('production')) {
      ignore.push('test.js', '__mocks__');
    }
    return ignore;
  })()
};
