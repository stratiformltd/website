// @flow

import React, { Component } from 'react'
import { render } from 'react-dom'

import styled, { injectGlobal } from 'styled-components'

import './src/fonts'

import Header from 'shared/Header'
import Container from 'shared/Container'
import Footer from 'shared/Footer'

import('./src/tracking')

injectGlobal`
  html {
    height: 100%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    position: relative;
    margin: 0;
    padding-bottom: 90px;
    min-height: 100%;
    font-family: 'Avenir Next', Avenir, Helvetica, Arial, sans-serif;
  }
`

const ContentContainer = styled.div`
  min-height: 100%;
  position: relative;
`

const Wrapper = styled.div`padding: 35px;`

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

render(
  <div>
    <Header />
    <Container>
      <Wrapper>
        <p>Unfortunately your browser is not compatible with this website.</p>
        <p>Please come back with Chrome, Firefox, Safari, or Edge.</p>
        <p>Thank you.</p>
      </Wrapper>
    </Container>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </div>,
  document.getElementById('app')
)
