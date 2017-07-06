import styled from 'styled-components';

const Columns = styled.div`
  columns: 3;
  column-gap: 1.5rem;
  width: 100%;

  & > div {
    margin-bottom: 1rem;
  }
`;

export default Columns;
