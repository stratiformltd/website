// @flow

import React, { Component } from 'react'

import Page from 'shared/Page'
import Section from 'shared/Section'
import Text from 'shared/Text'

export default class LoadingPageComponent extends Component {
  render() {
    return (
      <Page>
        <Section>
          <Text>Loading...</Text>
        </Section>
      </Page>
    )
  }
}
