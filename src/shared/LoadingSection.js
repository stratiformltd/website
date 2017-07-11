// @flow

import React, { Component } from 'react'

import Section from 'shared/Section'
import SectionHeading from 'shared/SectionHeading'
import Text from 'shared/Text'

export default class LoadingSection extends Component {
  render () {
    return <Section>
      <SectionHeading>{this.props.heading}</SectionHeading>

      <Text>Loading...</Text>
    </Section>
  }
}
