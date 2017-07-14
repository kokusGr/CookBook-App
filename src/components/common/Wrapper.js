import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${props => (props.wide ? '1450px' : '1100px')};
  padding: 0 15px;
  margin: 0 auto;
`;

export default Wrapper;
