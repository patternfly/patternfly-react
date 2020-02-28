const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, '../'));

  // Remove storybook's SASS rule
  config.module.rules = config.module.rules.filter(rule => !rule.test.test('.scss'));
  config.module.rules.push(
    // Storysource Addon
    {
      test: /\.stories\.jsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: {
            prettierConfig: {
              parser: 'babel'
            }
          }
        }
      ],
      enforce: 'pre'
    },
    // Sass
    {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'sass-loader',
          options: {
            importer: require('../packages/node-sass-patternfly-importer.js')
          }
        }
      ]
    }
  );

  config.resolve.alias = {
    ...config.resolve.alias,
    'patternfly-react': path.resolve(__dirname, '../packages/patternfly-react/src')
  };

  console.log('config', config.module.rules[0].use[0].options);
  return config;
};
