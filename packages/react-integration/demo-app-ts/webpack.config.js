const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const staticDir = path.join(process.cwd(), 'static/');

module.exports = (_env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve('public'),
      publicPath: '/',
      filename: '[name].[fullhash].bundle.js',
      pathinfo: false // https://webpack.js.org/guides/build-performance/#output-without-path-info,
    },
    devServer: {
      hot: true,
      historyApiFallback: true,
      port: 3000,
      open: true,
      client: {
        logging: 'info'
      }
    },
    amd: false, // We don't use any AMD modules, helps performance
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [!isProd && ReactRefreshTypeScript()].filter(Boolean)
            })
          },
          type: 'javascript/auto'
        },
        {
          test: /\.css$/,
          use: !isProd
            ? ['style-loader', 'css-loader']
            : [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: !isProd
                  }
                },
                {
                  loader: 'css-loader'
                }
              ]
        },
        {
          test: /\.(png|jpe?g|webp|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1024,
              fallback: 'file-loader',
              name: '[name].[fullhash].[ext]',
              outputPath: 'images/'
            }
          }
        },
        {
          test: /.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: isProd
        ? {}
        : {
            '@patternfly/react-core$': path.resolve(__dirname, '../../../packages/react-core/src/index'),
            // '@patternfly/react-charts$': path.resolve(__dirname, '../../../packages/react-charts/src/index'),
            '@patternfly/react-code-editor$': path.resolve(__dirname, '../../../packages/react-code-editor/src/index'),
            '@patternfly/react-table$': path.resolve(__dirname, '../../../packages/react-table/src/index'),
            '@patternfly/react-topology$': path.resolve(__dirname, '../../../packages/react-topology/src/index')
          }
    },
    plugins: [
      new MiniCssExtractPlugin(
        !isProd
          ? {}
          : {
              filename: '[name].[contenthash].css',
              chunkFilename: '[name].[contenthash].css'
            }
      ),
      !isProd && new ReactRefreshWebpackPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html')
      }),
      new CopyPlugin({
        patterns: [{ from: staticDir, to: '' }]
      })
    ].filter(Boolean),
    stats: 'minimal'
  };
};
