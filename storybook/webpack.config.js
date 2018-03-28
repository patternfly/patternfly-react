const path = require('path');
const rootPckg = require('../package.json');
const {
  flatten,
  filterSassIncludes,
  readPackage,
  listPackages
} = require('./helperFunctions');

const folderLocation = '../packages';

const packages = listPackages(folderLocation);

module.exports = {
  module: {
    rules: [
      // Css
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: [
          ...packages.map(onePck => `${onePck}/src'`),
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
                ...flatten(
                  packages.map(onePkg => [
                    `${onePkg}/sass`,
                    ...filterSassIncludes(readPackage(onePkg))
                  ])
                ),
                ...filterSassIncludes(rootPckg)
              ]
            }
          }
        ]
      },
      // Images
      {
        test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192, // inline base64 URLs for <=8k images, direct URLs for the rest
          name: '[name].[ext]'
        }
      },

      // Fonts and svg images
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          mimetype: 'application/font-woff',
          name: '[name].[ext]'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          mimetype: 'application/octet-stream',
          name: '[name].[ext]'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        query: { name: '[name].[ext]' }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          mimetype: 'image/svg+xml',
          name: '[name].[ext]'
        }
      }
    ]
  }
};
