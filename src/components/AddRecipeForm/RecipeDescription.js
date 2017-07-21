import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './FormSection';
import Button from '../common/Button';
import Heading from '../common/Heading';
import TextInput from './TextInput';
import Label from './Label';

const RecipeDescription = ({ proceed, value, onChange, isEditing, finishEditing }) => (
  <FormSection>
    <Heading>Please Enter Short Description</Heading>
    <Label hidden htmlFor="description">Recipe Description</Label>
    <TextInput box id="description" placeholder="This is the best dish I have ever tasted!" value={value} onChange={onChange} />
    {!isEditing && <Button next primary onClick={proceed}>Proceed</Button>}
    {isEditing && <Button next primary onClick={finishEditing}>Save</Button>}
  </FormSection>
);

RecipeDescription.propTypes = {
  proceed: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  finishEditing: PropTypes.func.isRequired
};

export default RecipeDescription;
