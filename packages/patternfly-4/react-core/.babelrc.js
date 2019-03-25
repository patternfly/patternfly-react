const babelENV = process.env.BABEL_ENV || 'development';
const modules = babelENV !== 'production:esm' ? 'commonjs' : false;

module.exports = {
  presets: [['@babel/env', { modules }], '@babel/react'],
  ignore: (() => {
    const ignore = ['src/**/__snapshots__'];
    ignore.push('src/**/*.d.ts');
    if (babelENV.includes('production')) {
      ignore.push('test.js', '__mocks__');
    }
    return ignore;
  })(),
  env: {
    'production:esm': {
      plugins: [
        '@babel/plugin-transform-typescript',
        'babel-plugin-typescript-to-proptypes',
        '@babel/plugin-proposal-export-default-from',
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        [
          '@patternfly/react-styles/babel',
          {
            srcDir: './src',
            outDir: './dist/esm',
            useModules: true
          }
        ]
      ]
    },
    'production:cjs': {
      plugins: [
        '@babel/plugin-transform-typescript',
        'babel-plugin-typescript-to-proptypes',
        '@babel/plugin-proposal-export-default-from',
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        [
          '@patternfly/react-styles/babel',
          {
            srcDir: './src',
            outDir: './dist/js',
            useModules: false
          }
        ]
      ]
    }
  }
};
