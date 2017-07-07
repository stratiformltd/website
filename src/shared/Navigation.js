// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

export default class NavigationComponent extends Component {
  render() {
    return (
      <Container>
        <Heading>Stratiform</Heading>

        <NavMenu>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/management">Management</Link>
          </NavItem>
          <NavItem>
            <Link to="/architecture">Architecture</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </NavMenu>
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: #19274e;
  color: #ffffff;
  padding: 15px;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`

const Heading = styled.h1`
  margin: 20px 0;
  font-weight: 600;
`

const NavMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }
  }
`
