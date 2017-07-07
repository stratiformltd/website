// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import Container from 'shared/Container'
import GetInTouch from 'shared/GetInTouch'

export default class HeaderComponent extends Component {
  render() {
    return (
      <Background>
        <Wrapper>
          <Heading>Stratiform</Heading>

          <HeadingGetInTouch>Get in touch</HeadingGetInTouch>
        </Wrapper>
      </Background>
    )
  }
}

const Background = styled.div`
  background-color: #19274e;
  color: #fff;
`

const Wrapper = Container.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Heading = styled.h1`
  flex: 1;

  display: inline-block;
  font-family: 'Sabon Next', serif;

  margin: 0;
  padding: 35px;
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
`

const HeadingGetInTouch = GetInTouch.extend.attrs({
  dark: true,
})`
  display: none;
  margin-right: 35px;

  @media(min-width: 425px) {
    display: inline-block;
  }
`
