// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Container from 'shared/Container'
import GetInTouch from 'shared/GetInTouch'
import SerifFont from 'shared/SerifFont'

export default class HeaderComponent extends Component {
  render() {
    return (
      <Background>
        <Wrapper>
          <HeadingWrapper>
            <Heading to="/">Stratiform</Heading>
          </HeadingWrapper>

          <StyledLink to="/architecture">Architecture</StyledLink>

          <HeadingGetInTouch>Get in touch</HeadingGetInTouch>
        </Wrapper>
      </Background>
    )
  }
}

const Background = styled.div`background-color: #19274e;`

const Wrapper = Container.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HeadingWrapper = styled.div`flex: 1;`

const StyledLink = styled(Link)`
  display: none;

  text-decoration: none;
  color: #FFF;

  line-height: 22px;
  padding: 40px 20px;

  transition: background-color 0.25s ease-out;

  &:hover {
    text-decoration: none;
    background-color: #9C332F;
  }

  @media(min-width: 670px) {
    display: inline-block;
  }
`

const Heading = StyledLink.extend`
  display: inline-block;
  margin: 0;
  padding: 35px;

  ${SerifFont};
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
`

const HeadingGetInTouch = GetInTouch.extend.attrs({
  dark: true,
})`
  display: none;
  margin: 0 35px;

  @media(min-width: 425px) {
    display: inline-block;
  }
`
