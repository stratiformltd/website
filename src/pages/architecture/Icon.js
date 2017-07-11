// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

export default class ToolIconComponent extends Component {
  render() {
    switch (this.props.icon.constructor) {
      case String:
        return (
          <IconWrapper>
            <ImageIcon src={this.props.icon} />
          </IconWrapper>
        )
      case Function:
        return (
          <IconWrapper>
            {React.createElement(this.props.icon)}
          </IconWrapper>
        )
      case Object:
        // do nothing
        return null
      default:
        console.error('Cannot handle this icon type', this.props.icon)
        return null
    }
  }
}

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageIcon = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 100%;
`
