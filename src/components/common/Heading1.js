import styled, { css } from 'styled-components';

const style = {
  default: css`
    font-weight: 300;
    font-size: 3rem;
    margin-top: 0.8rem;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  `
};

const Heading1 = styled.h1`
  ${style.default};
`;

export default Heading1;
