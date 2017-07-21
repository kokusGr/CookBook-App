import styled, { css } from 'styled-components';

const style = {
  default: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  `,

  paddingTop: css`
    padding-top: 2rem;
  `,

  noMargin: css`
    margin: 0
  `
};

const FlexBox = styled.div`
  ${style.default}
  ${props => (props.paddingTop ? style.paddingTop : null)}
  ${props => (props.noMargin ? style.noMargin : null)}
`;

export default FlexBox;
