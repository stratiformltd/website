// @flow

import React, { Component } from 'react'
import { transform } from 'babel-core'

const JS_LIBS = [
  'https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/4.1.1/react-router-dom.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/styled-components/2.1.1/styled-components.min.js',
]

export default class HTMLComponent extends Component {
  render() {
    // Defer all JS loading as the page is statically rendered and these JS assets are preloaded
    const loadingScript = transform(
      `
      setTimeout(function() {
        var script = document.createElement('script');

        ${JS_LIBS.map(lib => {
          return `
            script.setAttribute('src', ${JSON.stringify(lib)});
            document.body.appendChild(script);
            script = document.createElement('script');
          `
        }).join('\n')}

        if (window.CSS && window.CSS.supports && window.CSS.supports('display', 'flex')) {
          script.setAttribute('src', '/${this.props.appBundle}')
        } else {
          script.setAttribute('src', '/${this.props.unsupportedBundle}')
        }

        document.body.appendChild(script);

        window['GoogleAnalyticsObject'] = 'ga';
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
      }, 0)
    `,
      {
        babelrc: false,
        presets: ['babili'],
      }
    ).code

    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />

          {JS_LIBS.map(lib => {
            return <link key={lib} rel="preload" as="script" href={lib} />
          })}

          <link rel="preload" as="script" href={`/${this.props.appBundle}`} />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#19274e" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          {this.props.initialCSS}

          <title>Stratiform</title>
        </head>
        <body>
          <div
            id="app"
            dangerouslySetInnerHTML={{ __html: this.props.initialHTML }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/4.1.1/react-router-dom.min.js" />
          <script dangerouslySetInnerHTML={{ __html: loadingScript }} />
          <script async src="https://www.google-analytics.com/analytics.js" />
        </body>
      </html>
    )
  }
}
