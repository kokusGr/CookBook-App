import styled, { css } from 'styled-components';

const style = {
  default: css`
    text-align: left;
    font-weight: 300;
    color: ${props => props.theme.colors.mainBlack};
    font-style: italic;
    margin: 0;
    letter-spacing: 0.15rem;
    font-size: 1.2rem;
  `,

  hidden: css`
    display: none;
  `
};

const Heading3 = styled.h3`
  ${style.default};
  ${props => (props.hidden ? style.hidden : null)};
`;

export default Heading3;
