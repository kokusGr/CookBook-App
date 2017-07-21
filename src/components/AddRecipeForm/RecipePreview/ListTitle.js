import styled from 'styled-components';

const ListTitle = styled.h3`
  text-align: left;
  font-weight: 300;
  color: ${props => props.theme.colors.mainBlack};
  font-style: italic;
  margin: 0;
  letter-spacing: 0.15rem;
  font-size: 1.2rem;
`;

export default ListTitle;
