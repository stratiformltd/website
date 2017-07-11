// @flow

import React, { Component } from 'react'

import Section from 'shared/Section'
import SectionHeading from 'shared/SectionHeading'
import Text from 'shared/Text'

import ToolList from '../ToolList'
import Tool from '../Tool'

import IOSLogo from './ios-logo.svg'
import AndroidLogo from './android-logo.svg'
import SwiftLogo from './swift-logo.svg'
import KotlinLogo from './kotlin-logo.svg'
import ReactLogo from '../javascript_tools/react-logo.svg'
import HaulLogo from './haul-logo.png'
import ReactNavigationLogo from './react-nav-logo.svg'
import ExpoLogo from './expo-logo.svg'

export default class MobileToolsComponent extends Component {
  render() {
    return (
      <Section>
        <SectionHeading>Mobile Tools</SectionHeading>

        <Text>
          We prefer to leverage React Native to provide a cross platform
          experience across iOS and Android.
        </Text>

        <Text>
          Because of this, we're able to leverage a lot of the same tools,
          expertise, and code from our JavaScript architecture resulting in a
          higher quality and faster iteration.
        </Text>

        <ToolList>
          <Tool icon={IOSLogo} name="iOS" />
          <Tool icon={AndroidLogo} name="Android" />
          <Tool icon={SwiftLogo} name="Swift" />
          <Tool icon={KotlinLogo} name="Kotlin" />
          <Tool icon={ReactLogo} name="React Native" />
          <Tool icon={HaulLogo} name="Haul" />
          <Tool icon={ReactNavigationLogo} name="React Navigation" />
          <Tool icon={ExpoLogo} name="Expo" />
        </ToolList>
      </Section>
    )
  }
}
