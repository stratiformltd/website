// @flow

import styled from 'styled-components'

export default styled.a`
  display: inline-block;

  margin: 10px 0;
  padding: 10px;

  font-size: 16px;
  line-height: 26px;

  color: ${props => (props.dark ? '#fff' : '#333')};
  text-decoration: none;

  border: 3px solid #ccc;
  border-radius: 5px;

  transition: background-color 0.25s ease-out, border-color 0.25s ease-out, color 0.25s ease-out;

  &:hover {
    text-decoration: none;
    background-color: ${props => (props.dark ? '#fff' : '#19274e')};
    border-color: ${props => (props.dark ? '#fff' : '#19274e')};
    color: ${props => (props.dark ? '#333' : '#fff')};
  }
`
