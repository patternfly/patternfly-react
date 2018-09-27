const path = require('path');
const pkg = require('../package.json');

const PackageUtilities = require('lerna/lib/PackageUtilities');
const Repository = require('lerna/lib/Repository');

const packages = PackageUtilities.getPackages(new Repository()).map(p => p.location);

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
              parser: 'babylon' //The default prettier parser
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
            includePaths: [
              ...packages.map(onePck => `${onePck}/sass/`),
              ...Object.values(pkg.sassIncludes).map(includePath => path.resolve(__dirname, `../${includePath}`))
            ]
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
