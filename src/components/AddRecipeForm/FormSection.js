import styled from 'styled-components';

const FormSection = styled.div`
  width: 600px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.mainOrange};
  padding: 10px 30px;
  margin-top: 110px;
  border-radius: 20px;

  & h2 {
    text-align: center;
    margin: 40px auto;
    display: block;
    color: #FFF;
  }

  &  input[type="text"] {
    margin: 0 auto;
    display: block;
  }

  & > button {
    display: block;
    margin: 20px auto 10px;
    float: right;
  }

  & textarea {
    width: 90%;
    min-height: 100px;
    resize: none;
    margin: 0 auto;
    display: block;
  }

  &:after {
    clear: both;
    display: table;
    content: "";
  }
`;

export default FormSection;
