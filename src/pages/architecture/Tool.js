// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import Text from 'shared/Text'

import Icon from './Icon'

export default class ToolComponent extends Component {
  render() {
    return (
      <Wrapper>
        <Icon icon={this.props.icon} />

        <Label>
          {this.props.name}
        </Label>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;

  width: 90px;
  height: 90px;
`

const Label = Text.extend`
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 5px;
`
