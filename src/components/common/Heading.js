import styled, { css } from 'styled-components';

const style = {
  base: css`
    float: ${props => props.float || 'none'};
    font-size: 2rem;
    margin: 0 0 20px;
    color: ${props => props.theme.colors.mainOrange};

    @media (min-width: 500px) {
      color: red;
    }

    &:hover {
      color: #FFF;
    }
  `,

  noMargin: css`
    margin: 0
  `
};
const Heading = styled.h2`
  ${style.base}

`;

export default Heading;
