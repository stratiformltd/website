// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import Container from 'shared/Container'

export default class FooterComponent extends Component {
  render() {
    return (
      <Background>
        <Container>
          <Wrapper>
            <Disclaimer>
              &copy; Copyright {new Date().getFullYear()} Stratiform Limited.
            </Disclaimer>
            <Disclaimer>All Rights Reserved.</Disclaimer>
          </Wrapper>
        </Container>
      </Background>
    )
  }
}

const Background = styled.div`
  background-color: #19274e;
  color: #fff;
`

const Wrapper = styled.div`padding: 35px;`

const Disclaimer = styled.span`
  color: #CCC;
  font-size: 14px;
  display: inline-block;

  margin-right: 5px;
`
