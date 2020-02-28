const babelENV = process.env.BABEL_ENV || 'development';
const modules = babelENV !== 'production:esm' ? 'commonjs' : false;

module.exports = {
  presets: [['env', { modules }], 'react'],
  plugins: [
    'transform-class-properties',
    'transform-export-extensions',
    'transform-object-rest-spread',
    'transform-object-assign',
    babelENV !== 'development' && [
      'transform-imports',
      {
        'react-bootstrap': {
          preventFullImport: true,
          transform: importName => {
            const moduleDir = !modules ? 'es' : 'lib';
            return `react-bootstrap/${moduleDir}/${importName}`;
          }
        },
        'patternfly-react': {
          preventFullImport: true,
          transform: importName => {
            const moduleDir = !modules ? 'esm' : 'js';
            const srcDir = importName === 'helpers' ? 'common' : `components/${importName}`;
            return `patternfly-react/dist/${moduleDir}/${srcDir}/${importName}`;
          }
        }
      }
    ]
  ].filter(Boolean),
  ignore: (() => {
    const ignore = ['src/**/__snapshots__', 'src/**/*.stories.js', 'src/**/Stories'];
    if (babelENV.includes('production')) {
      ignore.push('test.js', '__mocks__');
    }
    return ignore;
  })()
};
