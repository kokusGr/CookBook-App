import styled, { css } from 'styled-components';
import React from 'react';
import TextareaAutoSize from 'react-autosize-textarea';

const style = {
  default: css`
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    background: none;
    font-size: 1.1rem;
    text-align: center;
    color: #FFF;
    padding-bottom: 5px;
    width: 90%;
    resize: none;
    break-inside: avoid;
    outline: 0;
    margin: 10px 0;
    font-style: italic;
  `,

  primary: css`
    font-size: 2rem;
  `,

  listInput: css`
    background: #FFF;
    margin: 0;
    color: ${props => props.theme.colors.mainBlack};
    padding: 13px;
    font-size: 1.3rem;
    flex: 1; 
  `,

  box: css`
    background: #FFF;
    padding: 10px;
    border: none;
    color: ${props => props.theme.colors.mainBlack};
    min-height: 100px;
  `
};
const TextInput = styled(({ primary, listInput, box, value, ...props }) =>
  <TextareaAutoSize {...props} value={value} />
)`
  ${style.default}
  ${props => (props.primary ? style.primary : null)}
  ${props => (props.listInput ? style.listInput : null)}
  ${props => (props.box ? style.box : null)}
`;

export default TextInput;
