import styled, { css } from 'styled-components';
import React from 'react';
import TextareaAutoSize from 'react-autosize-textarea';

const style = {
  default: css`
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    background: none;
    font-size: ${props => (props.primary ? '2.5rem' : '1.1rem')};
    text-align: center;
    color: #FFF;
    min-height: ${props => (props.primary ? '50px' : '20px')};
    width: 90%;
    resize: none;
    padding: 5px;
    break-inside: avoid;
    outline: 0;
    margin: 10px 0;
  `
};
const TextInput = styled(({ primary, inline, ...props }) =>
  <TextareaAutoSize {...props} />
)`
  ${style.default}
`;

export const AddInput = TextInput.extend`
  display: inline-block;
  background: ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.mainBlack};
`;

export default TextInput;
