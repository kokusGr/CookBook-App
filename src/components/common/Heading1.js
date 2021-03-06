import styled, { css } from 'styled-components';

const style = {
  default: css`
    font-weight: 300;
    font-size: 3rem;
    margin-top: 0.8rem;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  `,

  hidden: css`
    display: none;
  `
};

const Heading1 = styled.h1`
  ${style.default};
  ${props => (props.hidden ? style.hidden : null)};
`;

export default Heading1;
