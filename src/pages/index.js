// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Page from 'shared/Page'
import GetInTouch from 'shared/GetInTouch'
import GridItem from 'shared/GridItem'
import Section from 'shared/Section'
import SectionHeading from 'shared/SectionHeading'
import Text from 'shared/Text'
import SerifFont from 'shared/SerifFont'

export default class HomeComponent extends Component {
  render() {
    return (
      <Page>
        <QuotedSection>
          <QuotedHeading>Strategic Formula</QuotedHeading>
          <QuotedSubText>
            Let us help you find your winning formula.
          </QuotedSubText>
        </QuotedSection>

        <GridItem>
          <Section>
            <SectionHeading>Management</SectionHeading>

            <Text>
              With managerial experience ranging from initial project planning
              through to execution and delivery, we can provide a variety of
              solutions for small and medium sized teams.
            </Text>
          </Section>
        </GridItem>

        <GridItem>
          <Section>
            <SectionHeading>Architecture</SectionHeading>

            <Text>
              We're up to date on the latest procedures and practices.
            </Text>
            <Text>
              Talk to us about software architecture, development, scaling, and
              maintenance.
            </Text>
            <Text>
              <Link to="/architecture">Read more about architecture</Link>
            </Text>
          </Section>
        </GridItem>

        <GridItem>
          <Section>
            <SectionHeading>About</SectionHeading>

            <Text>
              Stratiform was created to bring our expertise in technical
              management and architecture to an even larger audience.
            </Text>
            <Text>
              By enabling you to do your very best, we can achieve this goal
              together.
            </Text>
          </Section>
        </GridItem>

        <GridItem>
          <Section>
            <SectionHeading>Contact</SectionHeading>

            <Text>Based in London, UK.</Text>

            <GetInTouch href="mailto:hello@stratiform.io">
              Get in touch
            </GetInTouch>
          </Section>
        </GridItem>
      </Page>
    )
  }
}

const QuotedSection = Section.extend`
  margin: 45px 35px;
  align-items: center;
  text-align: center;
`

const QuotedHeading = styled.h1`
  ${SerifFont};
  font-size: 26px;
  font-weight: 700;
`

const QuotedSubText = styled.p`
  font-size: 18px;
  font-weight: 400;
`
