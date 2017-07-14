import styled from 'styled-components';
import TextareaAutoSize from 'react-autosize-textarea';

const TextAreaInput = styled(TextareaAutoSize)`
  background: ${props => props.theme.colors.lightGray};
  padding: 10px;
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.mainBlack};
  border-radius: 10px;
  width: 90%;
  min-height: 100px;
  resize: none;
  margin: 10px 0;
`;

export default TextAreaInput;
