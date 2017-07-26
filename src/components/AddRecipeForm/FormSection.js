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

const FormSection = ({
  stepNumber,
  nextStep,
  prevStep,
  steps,
  finishEditing,
  isEditing,
  ...props
}) => {
  let buttons;
  if (isEditing) {
    buttons = <Button next primary onClick={finishEditing}>Save</Button>;
  } else if (stepNumber === 0) {
    buttons = <Button next primary onClick={nextStep}>Next</Button>;
  } else if (stepNumber === steps.length - 1) {
    buttons = <Button next primary onClick={prevStep}>Back</Button>;
  } else {
    buttons = (
      <div>
        <Button next primary onClick={prevStep}>Back</Button>
        <Button next primary onClick={nextStep}>Next</Button>;
      </div>
    );
  }
  return (
    <StyledFormSection>
      {props.children}
      {buttons}
    </StyledFormSection>
  );
};

FormSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  stepNumber: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  finishEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default FormSection;
