import styled from 'styled-components';

const TextInput = styled.input.attrs({
  type: 'text'
})`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background: none;
  font-size: 2.5rem;
  text-align: center;
  color: #FFF
`;

export default TextInput;
