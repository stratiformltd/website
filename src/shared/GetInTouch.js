// @flow

import styled from 'styled-components'

export default styled.a.attrs({
  href: 'mailto:hello@stratiform.io'
})`
  display: inline-block;

  margin: 10px 0;
  padding: 10px;

  color: ${props => props.dark ? '#fff': '#333'};
  text-decoration: none;

  border: 3px solid #ccc;
  border-radius: 5px;

  transition: background-color 0.25s, border-color 0.25s, color 0.25s;

  &:hover {
    background-color: ${props => props.dark ? '#fff' : '#19274e'};
    border-color: ${props => props.dark ? '#fff' : '#19274e'};
    color: ${props => props.dark ? '#333': '#fff'};
  }
`
