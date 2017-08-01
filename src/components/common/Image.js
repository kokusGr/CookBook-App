import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  padding: ${props => (props.noPadding ? '0' : '0.3125rem')};
  height: auto;
  background: ${props => (props.selected ? 'green' : 'none')};
  display: ${props => (props.block ? 'block' : 'inline-block')};
`;

export default Image;
