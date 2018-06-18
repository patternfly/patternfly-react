const path = require(`path`);

exports.modifyWebpackConfig = ({ config, stage }) => {
  const oldCSSLoader = config._loaders.css;
  const pfStylesTest = /patternfly-next.*(components|layouts).*\.css$/;
  config.removeLoader('css');
  if (
    oldCSSLoader.config.loaders &&
    oldCSSLoader.config.loaders.includes('postcss')
  ) {
    oldCSSLoader.config.loaders.splice(
      oldCSSLoader.config.loaders.indexOf('postcss'),
      1
    );
  }
  config
    .loader('pf-styles', {
      test: pfStylesTest,
      loaders: [
        'babel-loader',
        require.resolve('@patternfly/react-styles/loader')
      ]
    })
    .loader('css', {
      ...oldCSSLoader.config,
      exclude: pfStylesTest
    });

  config.merge({
    resolve: {
      alias: {
        '@patternfly/react-core': path.resolve(__dirname, '../react-core/src'),
        '@patternfly/react-styles': path.resolve(
          __dirname,
          '../react-styles/src'
        ),
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
      }
    }
  });

  return config;
};
