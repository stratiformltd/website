// @flow

const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const mkdirPromise = promisify(fs.mkdir)
const writeFilePromise = promisify(fs.writeFile)

const webpack = require('webpack')

const React = require('react')

const { StaticRouter } = require('react-router-dom')
const { renderToString, renderToStaticMarkup } = require('react-dom/server')
const { ServerStyleSheet } = require('styled-components')

const webpackConfig = require('../tools/webpack.config')
const webpackUnsupportedConfig = require('../tools/webpack.config.unsupported')

const HTML = require('../server/HTML').default
const App = require('../src').default

const ROUTES = require('../src/routes').default

const pages = Object.keys(ROUTES)

const distDir = path.join(__dirname, '../dist')

Promise.all([buildWebpack(webpackConfig), buildWebpack(webpackUnsupportedConfig)]).then(([appInfo, unsupportedInfo]) => {
  const appBundle = appInfo.assetsByChunkName.main
  const unsupportedBundle = unsupportedInfo.assetsByChunkName.main

  return Promise.all(
    pages.map(page => {
      return new Promise(resolve => {
        const outputDir = path.join(distDir, page)
        const outputFile = path.join(outputDir, 'index.html')

        console.log(`Building ${page} => ${outputFile}`)

        const sheet = new ServerStyleSheet()
        const html = renderToString(
          sheet.collectStyles(
            <StaticRouter location={page} context={{}}>
              <App />
            </StaticRouter>
          )
        )

        const output = renderToStaticMarkup(
          <HTML
            initialHTML={html}
            initialCSS={sheet.getStyleElement()}
            appBundle={appBundle}
            unsupportedBundle={unsupportedBundle}
          />
        )

        resolve(
          mkdirRecursive(
            outputDir.replace(distDir, '').split('/'),
            distDir
          ).then(() =>
            writeFilePromise(outputFile, `<!DOCTYPE html>\n${output}`)
          )
        )
      })
    })
  ).then(
    () => {
      console.log('Successfully built all pages!')
    },
    error => {
      console.error('Error while building pages')
      console.error(error)
    }
  )
}).catch((errors) => {
  console.error('Failed to build Webpack project')
  console.error(errors)
})

function buildWebpack(config) {
  return new Promise((resolve, reject) => {
    webpack(config).run((error, stats) => {
      if (error) {
        console.error('Webpack Failure')
        console.error(error)
        reject(error)
        return
      }

      const info = stats.toJson()

      if (stats.hasErrors()) {
        console.error('Build Errors')
        console.error(info.errors)
        reject(error)
        return
      }

      if (stats.hasWarnings()) {
        console.warn('Build Warnings')
        console.warn(info.warnings)
      }

      resolve(info)
    })
  })
}

function mkdirRecursive(directories, path) {
  if (directories.length) {
    const [currentDirectory, ...remainingDirectories] = directories

    if (currentDirectory) {
      const currentPath = `${path}/${currentDirectory}`

      return mkdirPromise(currentPath).then(
        () => {
          return mkdirRecursive(remainingDirectories, currentPath)
        },
        error => {
          if (error.code === 'EEXIST') {
            return mkdirRecursive(remainingDirectories, currentPath)
          }

          throw error
        }
      )
    } else {
      return mkdirRecursive(remainingDirectories, path)
    }
  } else {
    return Promise.resolve()
  }
}
