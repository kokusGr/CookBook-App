import styled, { css } from 'styled-components';

const style = {
  base: css`
    float: ${props => props.float || 'none'};
    font-size: 2.5rem;
    margin: 0 0 20px;
    color: #FFF;
    font-weight: 400;
  `,

  noMargin: css`
    margin: 0;
  `,

  subheading: css`
    font-size: 1.2rem;
    font-weight: 300;
    font-style: italic;
  `,

  orange: css`
    color: ${props => props.theme.colors.mainOrange};
  `
};
const Heading = styled.h2`
  ${style.base}
  ${props => (props.noMargin ? style.noMargin : null)}
  ${props => (props.tip ? style.tip : null)}
  ${props => (props.subheading ? style.subheading : null)}
  ${props => (props.orange ? style.orange : null)}

`;

export default Heading;
