import styled, { css } from 'styled-components';

const style = {
  default: css`
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: ${props => Number.parseFloat(props.size) * 0.5}rem;
    position: absolute;
    background-color: red;

    &:hover {
      width: ${props => Number.parseFloat(props.size) * 1.2}rem;
      height: ${props => Number.parseFloat(props.size) * 1.2}rem;
      border-radius: ${props => Number.parseFloat(props.size) * 0.6}rem;

      & > svg {
        font-size: ${props => Number.parseFloat(props.size) * 0.92}rem;
      }
    }

    & > svg {
      font-size: ${props => Number.parseFloat(props.size) * 0.77}rem;
    }
  `,
  topCenter: css`
    left: 50%;
    top: 0;
    transform: translate(-50%, -25%);
  `,
  leftCenter: css`
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  selected: css`
    transform: translate(-50%, -50%);
  `
};

const IconCircle = styled.div.attrs({
  size: props => (props.small ? '0.9rem' : '1.2rem')
})`
  ${style.default}
  ${props => (props.topCenter ? style.topCenter : null)}
  ${props => (props.leftCenter ? style.leftCenter : null)}
  ${props => (props.selected ? style.selected : null)}
`;

export default IconCircle;
