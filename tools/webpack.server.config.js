// @flow

const { DefinePlugin, NamedModulesPlugin } = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const resolve = require('./resolve')

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: path.resolve(__dirname, '../scripts/build-pages.js'),
  },
  output: {
    filename: 'app.js',
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, '../server/dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  'env',
                  {
                    modules: false,
                    targets: {
                      node: 'current',
                    },
                  },
                ],
                'react',
                'stage-2',
              ],
              plugins: [
                [
                  'import-inspector',
                  {
                    serverSideRequirePath: true,
                    webpackRequireWeakId: true,
                  },
                ],
                ['styled-components', { ssr: true }],
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|eot|otf|webp|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  externals: [
    nodeExternals({
      whitelist: [
        'react-loadable',
        'webpack-require-weak',
        'is-webpack-bundle',
      ],
    }),
  ],
  target: 'node',
  resolve,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: process.env.NODE_ENV !== 'production',
      __SERVER__: 'true',
      __dirname: JSON.stringify(path.resolve(__dirname, '../src')),
      window: 'undefined',
    }),
    new NamedModulesPlugin(),
  ],
}
