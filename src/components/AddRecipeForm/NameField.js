import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Label from './Label';
import Heading2 from '../common/Heading2';

const NameField = ({ name, updateNewRecipeValidation, }) => (
  <div>
    <Heading2 formSection>Please Name Your Recipe</Heading2>
    <Label hidden htmlFor="name">Recipe Name</Label>
    <TextInput
      primary
      id="name"
      name="name"
      placeholder="Chicken Kiev"
      value={name}
      onChange={e => updateNewRecipeValidation(e.currentTarget.value, e.currentTarget.name)}
      required
      minLength="3"
    />
  </div>
);

NameField.propTypes = {
  updateNewRecipeValidation: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default NameField;
