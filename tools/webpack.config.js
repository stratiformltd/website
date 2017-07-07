// @flow

const path = require('path')
const commonConfig = require('./common.webpack.config')

module.exports = commonConfig({
  bundleName: 'app',
  entry: ['babel-polyfill', path.resolve(__dirname, '../index.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(unsupported|node_modules)/,
        use: ['babel-loader'],
      }
    ]
  }
})
