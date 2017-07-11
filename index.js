// @flow

import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './src'
import ROUTES from './src/routes'

if (!__SERVER__) {
  let path = window.location.pathname

  if (path !== '/' && path.endsWith('/')) {
    path = path.replace(/\/$/, '')
  }

  const route = ROUTES[path]

  if (route) {
    route().then(renderApp, renderApp)
  } else {
    renderApp()
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
