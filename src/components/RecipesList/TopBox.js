import styled from 'styled-components';

const TopBox = styled.div`
  position: relative;
  background-color: #DCDCDC;
  padding: 20px;

  &:after {
    clear: both;
    display: table;
    content: "";
  }
`;

export default TopBox;
