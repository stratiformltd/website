// @flow

const {
  DefinePlugin,
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
} = require('webpack')
const BabiliPlugin = require('babili-webpack-plugin')
const path = require('path')

const resolve = require('./resolve')

module.exports = function createConfig ({ bundleName, entry, module }) {
  if (!bundleName) {
    throw new Error('`bundleName` needs to be specified.')
  }

  if (!Array.isArray(entry)) {
    throw new Error('`entry` needs to be an array')
  }

  let output

  const externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
  }

  const plugins = [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: process.env.NODE_ENV !== 'production',
      __SERVER__: 'false',
    }),
  ]

  if (process.env.NODE_ENV === 'production') {
    output = {
      filename: `${bundleName}.[hash].bundle.js`,
      chunkFilename: '[id].[chunkhash].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
    }

    plugins.push(new BabiliPlugin())
  } else {
    entry = [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      ...entry,
    ]

    output = {
      filename: `${bundleName}.bundle.js`,
      chunkFilename: '[id].js',
      path: path.resolve(__dirname, '../dev'),
      publicPath: '/',
    }

    plugins.push(new HotModuleReplacementPlugin(), new NamedModulesPlugin())
  }

  return {
    entry,
    output,
    externals,
    module: {
      rules: [...module.rules,
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
    resolve,
    devtool:
      process.env.NODE_ENV === 'production' ? false : 'cheap-module-source-map',
    plugins,
    devServer: {
      hot: true,
      contentBase: [
        path.resolve(__dirname, '../dev'),
        path.resolve(__dirname, '../public'),
      ],
      host: '0.0.0.0',
      publicPath: '/',
      historyApiFallback: {
        index: 'index.html',
      },
    },
  }
}
