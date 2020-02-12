const path = require('path');

module.exports = {
  entry: './cypress/plugins/index.js',
  module: {
    rules: [
      {
        exclude: /node_modules|demo-app-ts/,
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  }
};
