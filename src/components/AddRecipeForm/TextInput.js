import styled from 'styled-components';
import TextareaAutoSize from 'react-autosize-textarea';

const TextInput = styled(TextareaAutoSize)`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background: none;
  font-size: ${props => (props.primary ? '2.5rem' : '1.1rem')};
  text-align: center;
  color: #FFF;
  min-height: 50px;
  width: 90%;
  resize: none;
`;

export default TextInput;
