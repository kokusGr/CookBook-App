import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumberInput from './NumberInput';
import Label from './Label';
import FormSection from './FormSection';
import Button from '../common/Button';
import Heading from '../common/Heading';

const StyledInfoForm = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

const RecipeAdditionalInfo = ({ kcal, servings, onChange, proceed }) => (
  <FormSection>
    <Heading>Please Provide Some Additional Info</Heading>
    <StyledInfoForm>
      <NumberInput id="kcal" value={kcal} onChange={onChange} />
      <Label htmlFor="kcal">Kcal per 100g</Label>
    </StyledInfoForm>
    <StyledInfoForm>
      <NumberInput id="servings" value={servings} onChange={onChange} />
      <Label htmlFor="servings">Number of servings</Label>
    </StyledInfoForm>
    <Button next primary onClick={proceed}>Proceed</Button>
  </FormSection>
);

RecipeAdditionalInfo.propTypes = {
  kcal: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  proceed: PropTypes.func.isRequired
};

export default RecipeAdditionalInfo;
