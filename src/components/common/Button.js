import styled, { css } from 'styled-components';

const style = {
  default: css`
    cursor: pointer;
    background-color: ${props => props.theme.colors.mainOrange};
    color: #FFF;
    border: none;
    font-size: 1rem;
    padding: 0.875rem;
    border-radius: 3px;
    letter-spacing: .04rem;


    &:hover {
      transform: scale(1.2);
    }

    & > i {
      display: inline-block;
      padding-right: 0.3125rem;
      padding-bottom: 2px;
      transform: translateY(-1px);
    }
  `,

  primary: css`
    font-size: 1.4rem;
    padding: 0.875rem 1.25rem;
  `,

  next: css`
    background-color: ${props => props.theme.colors.mainBlack};
    margin: 1.2rem .8rem 0;
  `,

  add: css`
    background-color: ${props => props.theme.colors.mainBlack};
    font-size: 1.6rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `,

  edit: css`
    position: absolute;
    top: 0;
    right: 0;
    padding: .3rem .5rem .3rem .3rem;
    background-color: ${props => props.theme.colors.mainBlack};
    font-weight: 300;
    font-size: .9rem;
    letter-spacing: 0;
  `
};

const Button = styled.button`
  ${style.default}
  ${props => (props.primary ? style.primary : null)}
  ${props => (props.noMargin ? style.noMargin : null)}
  ${props => (props.next ? style.next : null)}
  ${props => (props.add ? style.add : null)}
  ${props => (props.edit ? style.edit : null)}
`;

export const AddButton = Button.extend`
  display: inline-block;
  background: ${props => props.theme.colors.mainGray};
`;

export default Button;
