const path = require('path');

module.exports = {
  module: {
    rules: [
      // Css
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, './'),
        ],
      },
      // Less
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
        include: [
          path.resolve(__dirname, '../less'),
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, './'),
        ],
      },
      // Images
      {
        test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192, // inline base64 URLs for <=8k images, direct URLs for the rest
          name: '[name].[ext]',
        },
      },

      // Fonts and svg images
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          mimetype: 'application/font-woff',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          mimetype: 'application/octet-stream',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        query: { name: '[name].[ext]' },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          mimetype: 'image/svg+xml',
          name: '[name].[ext]',
        },
      },
    ],
  },
};
