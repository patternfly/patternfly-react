const path = require('path');
const { readdirSync, statSync } = require('fs');
const { parse } = require('path');

const ROOT_DIR = '..';
const PCKGS = `${ROOT_DIR}/packages/patternfly-3`;

// TODO: Use lerna helpers instead
const packages = readdirSync(path.resolve(__dirname, PCKGS))
  .filter(onePckg => statSync(path.resolve(__dirname, `${PCKGS}/${onePckg}`)).isDirectory())
  .map(file => parse(file).name)
  .reduce((acc, curr) => [...acc, path.resolve(__dirname, `${PCKGS}/${curr}`)], []);

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
              parser: 'babel' //The default prettier parser
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
            importer: require('../packages/patternfly-3/node-sass-patternfly-importer.js')
          }
        }
      ]
    }
  );

  config.resolve.alias = {
    ...config.resolve.alias,
    'patternfly-react': path.resolve(__dirname, '../packages/patternfly-3/patternfly-react/src')
  };

  return config;
};
