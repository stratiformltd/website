// @flow

import React, { Component } from 'react'

import Section from 'shared/Section'
import SectionHeading from 'shared/SectionHeading'
import Text from 'shared/Text'

import ToolList from '../ToolList'
import Tool from '../Tool'

import ElixirLogo from './elixir-logo.png'
import RubyLogo from './ruby-logo.svg'
import GoLogo from './golang-logo.svg'
import NodeLogo from '../javascript_tools/nodejs-logo.svg'
import PhoenixLogo from './phoenix-logo.svg'
import RailsLogo from './rails-logo.svg'
import ExpressLogo from './express-logo.svg'
import NextLogo from './next-logo.png'
import PostgresLogo from './postgresql-logo.svg'
import MySQLLogo from './mysql-logo.svg'
import CassandraLogo from './cassandra-logo.svg'
import Neo4JLogo from './neo4j-logo.svg'

export default class ServerToolsComponent extends Component {
  render() {
    return (
      <Section>
        <SectionHeading>Server Tools</SectionHeading>

        <Text>
          These are only some of he tools that we've used on the server
          recently, in no particular order. Get in touch to see if we can assist
          with your particular infrastructure.
        </Text>

        <ToolList>
          <Tool icon={ElixirLogo} name='Elixir' />
          <Tool icon={RubyLogo} name='Ruby' />
          <Tool icon={GoLogo} name='Go' />
          <Tool icon={NodeLogo} name="Node.js" />
          <Tool icon={PhoenixLogo} name='Phoenix' />
          <Tool icon={RailsLogo} name='Rails' />
          <Tool icon={ExpressLogo} name='Express' />
          <Tool icon={NextLogo} name='Next.js' />
          <Tool icon={PostgresLogo} name='PostgreSQL' />
          <Tool icon={MySQLLogo} name='MySQL' />
          <Tool icon={CassandraLogo} name='Cassandra' />
          <Tool icon={Neo4JLogo} name='Neo4j' />
        </ToolList>
      </Section>
    )
  }
}
