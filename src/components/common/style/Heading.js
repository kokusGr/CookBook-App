import styled from 'styled-components';

const Heading = styled.h2`
  float: ${props => props.float || 'none'};
  font-size: 2rem;
  margin: 0;
  color: ${props => props.theme.colors.mainOrange};
`;

export default Heading;
