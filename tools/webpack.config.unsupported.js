// @flow

const path = require('path')
const commonConfig = require('./common.webpack.config')

module.exports = commonConfig({
  bundleName: 'unsupported',
  entry: ['babel-polyfill', path.resolve(__dirname, '../unsupported.js')],
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
                      browsers: ['IE 10'],
                    },
                    useBuiltIns: true,
                  },
                ],
                'react',
                'stage-2',
              ],
              plugins: [['styled-components', { ssr: true }]],
            },
          },
        ],
      }
    ]
  }
})
