// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import Container from 'shared/Container'
import Header from 'shared/Header'
import Footer from 'shared/Footer'

export default class PageComponent extends Component {
  render() {
    return (
      <Wrapper>
        <Header />

        <Content>
          {this.props.children}
        </Content>

        <Footer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`

const Content = Container.extend`
  margin-bottom: 30px;
  flex: 1;
`
