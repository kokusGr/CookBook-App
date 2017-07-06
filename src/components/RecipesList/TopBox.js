import styled from 'styled-components';

const TopBox = styled.div`
  background-color: ${props => props.theme.colors.mainGray};
  padding: 20px;

  &:after {
    clear: both;
    display: table;
    content: "";
  }
`;

export default TopBox;
