const path = require('path');
const pkg = require('../package.json');
const { readdirSync, statSync } = require('fs');
const { parse } = require('path');

const ROOT_DIR = '..';
const PCKGS = `${ROOT_DIR}/packages/patternfly-3`;

// TODO: Use lerna helpers instead
const packages = readdirSync(path.resolve(__dirname, PCKGS))
  .filter(onePckg => statSync(path.resolve(__dirname, `${PCKGS}/${onePckg}`)).isDirectory())
  .map(file => parse(file).name)
  .reduce((acc, curr) => [...acc, path.resolve(__dirname, `${PCKGS}/${curr}`)], []);

module.exports = (baseConfig, env, defaultConfig) => {
  // add the root path so root references can be used in stories
  defaultConfig.resolve.modules.push(path.resolve(__dirname, '../'));

  defaultConfig.module.rules.push(
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
    // Css
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: [
        ...packages.map(onePck => `${onePck}/src'`),
        ...packages.map(onePck => `${onePck}/'`),
        path.resolve(__dirname, './')
      ]
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

  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,
    'patternfly-react': path.resolve(__dirname, '../packages/patternfly-3/patternfly-react/src')
  };

  return defaultConfig;
};
