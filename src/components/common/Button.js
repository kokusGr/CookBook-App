import styled, { css } from 'styled-components';

const style = {
  default: css`
    cursor: pointer;
    background-color: ${props => (props.bg ? props.bg : props.theme.colors.mainOrange)};
    color: #FFF;
    border: none;
    font-size: 1rem;
    padding: 10px;
    margin: 20px 0 0;
  `,
  primary: css`
    font-size: 1.4rem;
    padding: 13px 20px;
  `,
  success: css`
    background-color: green;
  `,
  noMargin: css`
    margin: 0;
  `
};

const Button = styled.button`
  ${style.default}
  ${props => (props.primary ? style.primary : null)}
  ${props => (props.success ? style.success : null)}
  ${props => (props.noMargin ? style.noMargin : null)}
`;

export const AddButton = Button.extend`
  display: inline-block;
  background: ${props => props.theme.colors.mainGray};
`;

export default Button;
