import styled from 'styled-components';

const Thumbnail = styled.div`
  background-color: #FFF;
  break-inside: avoid;
  padding: 6px;

  & > p {
    font-weight: 100;
    font-size: 0.8rem;
    padding: 0 2px;
    line-height: 1.6;
    margin: 0;
  }

  & > h3 {
    margin: 10px 0 5px;
  }
`;

export default Thumbnail;
