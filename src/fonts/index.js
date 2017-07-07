// @flow

import { injectGlobal } from 'styled-components'

import AvenirNextRegular from './2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2'
import AvenirNextMedium from './627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2'
import AvenirNextDemi from './aad99a1f-7917-4dd6-bbb5-b07cedbff64f.woff2'
import AvenirNextBold from './14c73713-e4df-4dba-933b-057feeac8dd1.woff2'

import AvenirNextRegularWoff from './1e9892c0-6927-4412-9874-1b82801ba47a.woff'
import AvenirNextMediumWoff from './f26faddb-86cc-4477-a253-1e1287684336.woff'
import AvenirNextDemiWoff from './91b50bbb-9aa1-4d54-9159-ec6f19d14a7c.woff'
import AvenirNextBoldWoff from './b8e906a1-f5e8-4bf1-8e80-82c646ca4d5f.woff'

import SabonNextRegular from './d913b226-c0d7-49e2-b231-1fc570fcdc9a.woff2'
import SabonNextDemi from './a9068ef6-cebc-4c2e-a52f-0b1d29cc2328.woff2'
import SabonNextBold from './533ce8a9-a0a4-4a40-96c5-76aa564a3d7f.woff2'
import SabonNextDisplay from './d23cb1de-d130-4bab-be0e-d2f37552b686.woff2'

import SabonNextRegularWoff from './9bbfbdbd-1ab0-4d8f-80d8-c690ab217070.woff'
import SabonNextDemiWoff from './14120fb6-0d68-4785-b95e-0f47d1945981.woff'
import SabonNextBoldWoff from './952c2825-2ba9-448a-8375-492e78886fc9.woff'
import SabonNextDisplayWoff from './0ec59a8b-e91f-45d4-928d-f864aa5a36c5.woff'

injectGlobal`
  @font-face {
    font-family: "Avenir Next";
    src: url(${AvenirNextRegular}) format("woff2"), url(${AvenirNextRegularWoff}) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Avenir Next";
    src: url(${AvenirNextMedium}) format("woff2"), url(${AvenirNextMediumWoff}) format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Avenir Next";
    src: url(${AvenirNextDemi}) format("woff2"), url(${AvenirNextDemiWoff}) format("woff");
    font-weight: 600;
  }

  @font-face {
    font-family: "Avenir Next";
    src: url(${AvenirNextBold}) format("woff2"), url(${AvenirNextBoldWoff}) format("woff");
    font-weight: 700;
  }

  @font-face {
    font-family: "Sabon Next";
    src: url(${SabonNextRegular}) format("woff2"), url(${SabonNextRegularWoff}) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Sabon Next";
    src: url(${SabonNextDemi}) format("woff2"), url(${SabonNextDemiWoff}) format("woff");
    font-weight: 600;
  }

  @font-face {
    font-family: "Sabon Next";
    src: url(${SabonNextBold}) format("woff2"), url(${SabonNextBoldWoff}) format("woff");
    font-weight: 700;
  }

  @font-face {
    font-family: "Sabon Next Display";
    src: url(${SabonNextDisplay}) format("woff2"), url(${SabonNextDisplayWoff}) format("woff");
    font-weight: 400;
  }
`

// Don't block the critical rendering path on this
if (!__DEV__ && !__SERVER__) {
  setTimeout(() => {
    const fontsSheet = document.createElement('link')

    fontsSheet.setAttribute('rel', 'stylesheet')
    fontsSheet.setAttribute(
      'href',
      'https://fast.fonts.net/t/1.css?apiType=css&projectid=d1e3d6a5-ff9d-47e0-8779-314aab7429d8'
    )

    document.body.appendChild(fontsSheet)
  }, 100)
}
