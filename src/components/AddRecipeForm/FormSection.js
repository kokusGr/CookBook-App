import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../common/Button';

const StyledFormSection = styled.div`
  width: 600px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.mainOrange};
  padding: 30px;
  margin-top: 110px;
  border-radius: 20px;
  text-align: center;

  &:after {
    clear: both;
    display: table;
    content: "";
  }
`;

const FormSection = ({ stepNumber, nextStep, prevStep, steps, ...props }) => (
  <StyledFormSection>
    {props.children}
    {stepNumber > 0
      && <Button next primary onClick={prevStep}>Back</Button>}
    {stepNumber < steps.length - 1
      && <Button next primary onClick={nextStep}>Next</Button>}
    {/* {isEditing && <Button next primary onClick={finishEditing}>Save</Button>} */}
  </StyledFormSection>
);

FormSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  stepNumber: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FormSection;
