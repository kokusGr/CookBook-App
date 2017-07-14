import React from 'react';
import styled from 'styled-components';

const FormSection = styled.div`
  width: 600px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.mainOrange};
  padding: 30px;
  margin-top: 110px;
  border-radius: 20px;
  text-align: center;

  & h2 {
    color: #FFF;
  }

  &:after {
    clear: both;
    display: table;
    content: "";
  }
`;

export default (props) => (
  <FormSection>

  </FormSection>
);
