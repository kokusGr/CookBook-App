import styled from 'styled-components';

const Columns = styled.div.attrs({
  spacing: props => props.spacing || '1.5rem',
  cols: props => props.cols || '3'
})`
  columns: ${props => props.cols};
  column-gap: ${props => props.spacing};
  width: 100%;

  & > * {
    margin-bottom: ${props => props.spacing};
  }
`;

export default Columns;
