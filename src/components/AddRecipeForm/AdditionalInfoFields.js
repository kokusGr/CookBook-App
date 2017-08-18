import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading2 from '../common/Heading2';
import NumberInput from './NumberInput';
import Label from './Label';

const StyledInfoForm = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

const AdditionalInfoFields = ({ kcal, servings, updateNewRecipeValidation, }) => (
  <div>
    <Heading2 formSection>Please Provide Additional Info</Heading2>
    <StyledInfoForm>
      <NumberInput
        id="kcal"
        name="kcal"
        value={kcal}
        onChange={e => updateNewRecipeValidation(e.currentTarget.value, e.currentTarget.name)}
      />
      <Label htmlFor="kcal">Kcal per 100g</Label>
    </StyledInfoForm>
    <StyledInfoForm>
      <NumberInput
        id="servings"
        name="servings"
        value={servings}
        onChange={e => updateNewRecipeValidation(e.currentTarget.value, e.currentTarget.name)}
      />
      <Label htmlFor="servings">Number of servings</Label>
    </StyledInfoForm>
  </div>
);

AdditionalInfoFields.propTypes = {
  kcal: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
  updateNewRecipeValidation: PropTypes.func.isRequired,
};

export default AdditionalInfoFields;
