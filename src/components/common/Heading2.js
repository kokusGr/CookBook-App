import styled, { css } from 'styled-components';

const style = {
  default: css`
    font-weight: 300;
    font-size: 1.8rem;
    font-style: italic;
    color: #000;
    margin: 0;
    padding: 0;
  `,

  thumbnail: css`
    margin: .6rem 0 .8rem;
  `,

  formSection: css`
    color: #FFF;
    margin: 0 0 1.25rem;
  `
};
const Heading2 = styled.h2`
  ${style.default}
  ${props => (props.thumbnail ? style.thumbnail : null)}
  ${props => (props.formSection ? style.formSection : null)}
`;

export default Heading2;
