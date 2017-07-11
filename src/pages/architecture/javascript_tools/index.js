// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import Section from 'shared/Section'
import SectionHeading from 'shared/SectionHeading'
import Text from 'shared/Text'

import ToolList from '../ToolList'
import Tool from '../Tool'

import ReactLogo from './react-logo.svg'
import BabelLogo from './babel-logo.svg'
import ReduxLogo from './redux-logo.svg'
import GraphQLLogo from './graphql-logo.svg'
import WebpackLogo from './webpack-logo.svg'
import ReactRouterLogo from './react-router-logo.svg'
import StyledComponentsLogo from './styled-components-logo.png'
import JestLogo from './jest-logo.svg'
import NodeLogo from './nodejs-logo.svg'
import ApolloLogo from './apollo-logo.svg'
import RelayLogo from './relay-logo.svg'
import RxLogo from './reactivex-logo.svg'

export default class JavascriptToolsComponent extends Component {
  render() {
    return (
      <Section>
        <SectionHeading>JavaScript Tools</SectionHeading>

        <Text>
          While we're experienced with the JavaScript ecosystem as a whole, we
          prefer to work with the following tools:
        </Text>

        <ToolList>
          <Tool icon={ReactLogo} name="React" />
          <Tool icon={ReduxLogo} name="Redux" />
          <Tool icon={GraphQLLogo} name="GraphQL" />
          <Tool icon={StyledComponentsLogo} name="Styled Components" />
          <Tool icon={BabelLogo} name="Babel" />
          <Tool icon={WebpackLogo} name="Webpack" />
          <Tool icon={JestLogo} name="Jest" />
          <Tool icon={ReactRouterLogo} name="React Router" />
          <Tool icon={NodeLogo} name="Node.js" />
          <Tool icon={ApolloLogo} name="Apollo" />
          <Tool icon={RelayLogo} name="Relay" />
          <Tool icon={RxLogo} name="ReactiveX" />
        </ToolList>
      </Section>
    )
  }
}
