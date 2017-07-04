import styled from 'styled-components';

const TopBox = styled.div`
  position: relative;

  &:after {
    clear: both;
    display: table;
    content: "";
  }
`;

export default TopBox;
