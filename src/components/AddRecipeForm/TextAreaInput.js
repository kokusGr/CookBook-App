import styled from 'styled-components';

const TextAreaInput = styled.textarea`
  background: ${props => props.theme.colors.lightGray};
  padding: 10px;
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.mainBlack};
  border: none;
  border-radius: 10px;
`;

export default TextAreaInput;
