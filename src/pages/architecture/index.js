// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import LoadableVisibility from 'react-loadable-visibility/react-loadable'

import Page from 'shared/Page'
import GridItem from 'shared/GridItem'
import Section from 'shared/Section'
import SectionHeading from 'shared/SectionHeading'
import LoadingSection from 'shared/LoadingSection'
import GetInTouch from 'shared/GetInTouch'
import Button from 'shared/Button'
import Text from 'shared/Text'
import SerifFont from 'shared/SerifFont'

import GithubLogo from './github-logo.svg'

const JSToolsLoader = LoadableVisibility({
  loading: () => <LoadingSection heading="JavaScript Tools" />,
  loader: () => import('./javascript_tools'),
})

const MobileToolsLoader = LoadableVisibility({
  loading: () => <LoadingSection heading="Mobile Tools" />,
  loader: () => import('./mobile_tools'),
})

const ServerToolsLoader = LoadableVisibility({
  loading: () => <LoadingSection heading="Server Tools" />,
  loader: () => import('./server_tools'),
})

export default class ArchitectureComponent extends Component {
  render() {
    return (
      <Page>
        <CenteredSection>
          <QuoteSection>
            <Quote>
              <QuoteSign>&ldquo;</QuoteSign>
              <QuoteBody>
                Elegance is not a dispensable luxury but a factor that decides
                between success and failure.
              </QuoteBody>
              <QuoteSignRight>&rdquo;</QuoteSignRight>
            </Quote>
            <Attribution>~ Edsger W. Dijkstra</Attribution>
          </QuoteSection>
        </CenteredSection>

        <TopTextSection>
          <Text>
            At Stratiform, we believe that a great solution isn't only
            functional but also elegant.
          </Text>

          <Text>
            Software architecture has to remain fluid such that it can adapt to
            ever changing requirements.
          </Text>

          <Text>
            As new developers leave their mark on the codebase, it has to remain
            predicatable, performant, and productive.
          </Text>

          <Text>
            We've spent our careers honing this art and now in a position to
            offer this experience to our clients.
          </Text>
        </TopTextSection>

        <GridItem>
          <Section>
            <SectionHeading>JavaScript Architecture</SectionHeading>

            <Text>
              JavaScript is one of the most widespread programming languages
              available today. It can be used anywhere from web and mobile apps
              to powering drones and automating your home.
            </Text>

            <Text>
              This flexibility can come at a cost, making some architectures and
              paradigms that work for certain applications not as useful for
              others.
            </Text>

            <Text>
              We specialize in JavaScript and can assist with anything from app
              development to reworking complex workflows.
            </Text>

            <Text>
              In recent years, we've been heavily involved in the React.js
              ecosystem and have used it at every stage of its evolution. We
              strongly believe in its ability to produce high quality
              applications that remain predictable and productive even once they
              grow to being supported by hundreds of engineers.
            </Text>

            <GetInTouch>Get in touch about JavaScript architecture</GetInTouch>
          </Section>
        </GridItem>

        <GridItem>
          <JSToolsLoader />
        </GridItem>

        <GridItem>
          <Section>
            <SectionHeading>Mobile Architecture</SectionHeading>

            <Text>
              Mobile usage and adoption is growing faster than the desktop for
              the past decade and a few years ago, mobile actually surpassed
              desktop usage.
            </Text>

            <Text>
              As a result, we've seen significant growth in the mobile offerings
              of various companies throughout the world.
            </Text>

            <Text>
              Architecture for a mobile application differs on almost every
              level. One has to consider multi-touch interfaces, platform
              restrictions, screen size variance, battery expenditure, and poor
              network connectivity amongst other factors.
            </Text>

            <Text>
              We've built applications within these constraints and are able to
              assist you with any challenges you're facing.
            </Text>

            <GetInTouch>Get in touch about mobile architecture</GetInTouch>
          </Section>
        </GridItem>

        <GridItem>
          <MobileToolsLoader />
        </GridItem>

        <GridItem>
          <Section>
            <SectionHeading>Server Architecture</SectionHeading>

            <Text>
              The server powers client side interactions and due to the nature
              of living in a controlled environment, is also the subject of the
              most variability. It typically includes everything from database
              interactions to business logic and data handling.
            </Text>

            <Text>
              When it comes to the server, it's important to be pragmatic and
              only implement what's needed. For example, an early stage startup
              may be looking for rapid iteration to test various solutions in
              the market while an existing high traffic web application may be
              looking for refinements on their existing infrastructure.
            </Text>

            <Text>
              We have experience in both contexts. Be it a traditional single
              master HTTP API, on-premises installations, or multi-master
              distributed realtime web services, we have experience delivering
              all of these configurations and anything in between.
            </Text>

            <GetInTouch>Get in touch about server architecture</GetInTouch>
          </Section>
        </GridItem>

        <GridItem>
          <ServerToolsLoader />
        </GridItem>

        <GridItem>
          <Section>
            <SectionHeading>Community</SectionHeading>

            <Text>
              We're active members of the technical community at large. In the
              past, we've organized technical meetups and conferences.
            </Text>

            <Text>
              Open source is dear to us and we contribute back when we have an
              opportunity.
            </Text>

            <GithubWrapper
              href="https://github.com/stratiformltd"
              target="_blank"
            >
              {GithubLogo.constructor === String &&
                <GithubImg src={GithubLogo} />}
              <Text>
                Check out our Github for our open source contributions
              </Text>
            </GithubWrapper>
          </Section>
        </GridItem>

        <GridItem>
          <Section>
            <SectionHeading>Don't see what you're looking for?</SectionHeading>

            <Text>
              We have an extensive network of partners that cover anything that
              we've missed.
            </Text>

            <Text>
              If you're looking for DevOps assistance to design work, we're
              happy to either refer you to the right people or be the liason for
              your project.
            </Text>

            <GetInTouch>Contact us today for a referral</GetInTouch>
          </Section>
        </GridItem>
      </Page>
    )
  }
}

const CenteredSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuoteSection = Section.extend`
  margin: 35px 20px;
  max-width: 600px;
`

const Quote = styled.div`
  ${SerifFont};
  font-weight: 600;
  font-size: 26px;
  line-height: 36px;

  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
`

const QuoteBody = styled.div`
  flex: 1;
  text-align: center;
`

const QuoteSign = styled.div`
  ${SerifFont};
  font-weight: 600;
  font-size: 50px;
  color: #999;

  margin: 5px 0 10px;
`

const QuoteSignRight = QuoteSign.extend`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  line-height: 0;
`

const Attribution = styled.div`
  min-width: 100%;
  margin-right: 5px;

  text-align: right;
  color: #999;
`

const TopTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    max-width: 540px;
    margin: 5px 20px;
    font-size: 17px;
  }
`

const GithubWrapper = Button.extend`
  display: flex;
  flex-direction: row;
  align-items: center;

  max-width: 280px;

  p {
    margin: 0;
  }
`

const GithubImg = styled.img`
  width: auto;
  height: 50px;

  margin-right: 15px;
`
