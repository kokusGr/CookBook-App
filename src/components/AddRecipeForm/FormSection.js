import styled, { css, } from 'styled-components';

const style = {
  default: css`
    width: 600px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.mainOrange};
    padding: 30px;
    margin-top: 110px;
    border-radius: 20px;
    text-align: center;

    &:after {
      clear: both;
      display: table;
      content: "";
    }
  `,
};

const StyledForm = styled.form`
  ${style.default};
`;

export default StyledForm;
