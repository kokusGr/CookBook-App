import styled, { css } from 'styled-components';

const style = {
  default: css`
    width: ${props => (props.width ? props.width : 'auto')};
    background: #FFF;
    margin: 0;
    padding: 1rem;
  `,

  recipeImage: css`
    max-height: 300;
    overflow-y: hidden;
    padding: 0;
  `,

  recipeTitle: css`
    padding-left: 2.2rem;
    padding-top: 0;
  `,

  alignCenter: css`
    text-align: center;
  `
};

const Column = styled.div`
  ${style.default}
  ${props => (props.recipeImage ? style.recipeImage : null)}
  ${props => (props.recipeTitle ? style.recipeTitle : null)}
  ${props => (props.alignCenter ? style.alignCenter : null)}
`;

export default Column;
