// @flow

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import { injectGlobal } from 'styled-components'

import Navigation from 'shared/Navigation'
import LoadingPage from 'shared/LoadingPage'

import ROUTES from './routes'
import './fonts'

injectGlobal`
  body {
    margin: 0;
    font-family: 'Avenir Next', Avenir, Helvetica, Arial, sans-serif;
  }
`

const loading = () => <LoadingPage />

function generateRoute(loader) {
  return Loadable({
    loader,
    loading,
    delay: false, // to silence the warning when building pages
  })
}

export default class AppComponent extends Component {
  render() {
    return (
      <div>
        {
          Object.keys(ROUTES).map((route) => {
            return <Route
              key={route}
              exact
              path={route}
              component={generateRoute(ROUTES[route])}
            />
          })
        }
      </div>
    )
  }
}
