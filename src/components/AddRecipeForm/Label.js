import styled, { css } from 'styled-components';

const style = {
  default: css`
    position: absolute;
    left: 20px;
    top: 20px;
    opacity: 0.5;
    font-weight: bold;
  `,
  hidden: css`
    display: none;
  `,

  file: css`
    color: #FFF;
    padding: 10px;
    display: block;
    width: 200px;
    margin: 10px auto;
    cursor: pointer;
    background: ${props => props.theme.colors.mainBlack};
    position: static;
    opacity: 1;
  `
};

const Label = styled.label`
  ${style.default}
  ${props => (props.hidden ? style.hidden : null)}
  ${props => (props.file ? style.file : null)}
`;

export default Label;
