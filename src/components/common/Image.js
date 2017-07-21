import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  padding: 0.3125rem;
  height: auto;
  background: ${props => (props.selected ? 'green' : 'none')}
`;

export default Image;
