import styled from 'styled-components';

const Columns = styled.div.attrs({
  spacing: props => props.spacing || '1.5rem'
})`
  columns: 3;
  column-gap: ${props => props.spacing};
  width: 100%;

  & > div {
    margin-bottom: ${props => props.spacing};
  }
`;

export default Columns;
