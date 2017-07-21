import styled from 'styled-components';

const ImageInput = styled.input.attrs({
  type: 'file',
  accept: '.jpeg, .jpg, .png'
})`
  display: none;
`;

export default ImageInput;
