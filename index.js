// @flow

import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './src'
import ROUTES from './src/routes'

if (!__SERVER__) {
  if (window && window.location) {
    const route = ROUTES[window.location.pathname]

    if (route) {
      route().then(renderApp, renderApp)
    } else {
      renderApp()
    }
  }

  import('./src/tracking')
}

function renderApp() {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  )
}
