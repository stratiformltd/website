// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import Container from 'shared/Container'
import Header from 'shared/Header'
import Footer from 'shared/Footer'
import GetInTouch from 'shared/GetInTouch'

export default class HomeComponent extends Component {
  render() {
    return (
      <Wrapper>
        <Header />

        <Content>
          <QuotedSection>
            <QuotedHeading>Strategic Formula</QuotedHeading>
            <QuotedSubText>
              Let us help you find your winning formula.
            </QuotedSubText>
          </QuotedSection>

          <GridItem>
            <Section>
              <Heading>Management</Heading>

              <Text>
                With managerial experience ranging from initial project planning
                through to execution and delivery, we can provide a variety of
                solutions for small and medium sized teams.
              </Text>
            </Section>
          </GridItem>

          <GridItem>
            <Section>
              <Heading>Architecture</Heading>

              <Text>
                We're up to date on the latest procedures and practices.
              </Text>
              <Text>
                Talk to us about software architecture, development, scaling,
                and maintenance.
              </Text>
            </Section>
          </GridItem>

          <GridItem>
            <Section>
              <Heading>About</Heading>

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
              <Heading>Contact</Heading>

              <Text>Based in London, UK.</Text>

              <GetInTouch href="mailto:hello@stratiform.io">
                Get in touch
              </GetInTouch>
            </Section>
          </GridItem>
        </Content>

        <Footer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`

const Content = Container.extend`
  margin-bottom: 30px;
  flex: 1;
`

const GridItem = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }
`

const Section = styled.div`
  margin: 10px 35px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p:last-child {
    margin-bottom: 0;
  }
`

const QuotedSection = Section.extend`
  margin: 45px 35px;
  align-items: center;
  text-align: center;
`

const QuotedHeading = styled.h1`
  font-family: 'Sabon Next', serif;
  font-size: 26px;
  font-weight: 700;
`

const QuotedSubText = styled.p`
  font-size: 18px;
  font-weight: 400;
`

const Heading = styled.h3`
  font-family: 'Sabon Next', serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 44px;
  border-bottom: 2px solid #333;
  margin: 11px -35px;
  width: 100%;
  padding: 0 35px;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 26px;
`
