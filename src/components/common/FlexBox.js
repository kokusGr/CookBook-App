import styled, { css } from 'styled-components';

const style = {
  default: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px 0 20px;
  `,

  paddingTop: css`
    padding-top: 2rem;
  `
};

const FlexBox = styled.div`
  ${style.default}
  ${props => (props.paddingTop ? style.paddingTop : null)}
`;

export default FlexBox;
