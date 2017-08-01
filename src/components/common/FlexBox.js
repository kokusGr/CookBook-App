import styled, { css } from 'styled-components';

const style = {
  default: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
  `,

  row: css`
    justify-content: space-between;
    align-items: stretch;
    padding: 1rem 0;
  `,

  noLayout: css`
    padding: 0;
    margin: 0;
  `
};

const FlexBox = styled.div`
  ${style.default}
  ${props => (props.row ? style.row : null)}
  ${props => (props.noLayout ? style.noLayout : null)}
`;

export default FlexBox;
