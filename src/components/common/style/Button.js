import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: ${props => props.theme.colors.mainOrange};
  color: #FFF;
  border: none;
  height: 60%;
  font-size: 1rem;
  padding: 10px;
`;

export default Button;
