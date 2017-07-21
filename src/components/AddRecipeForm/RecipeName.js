import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './FormSection';
import Heading from '../common/Heading';
import Button from '../common/Button';
import TextInput from './TextInput';
import Label from './Label';

const RecipeName = ({ proceed, value, onChange, isEditing, finishEditing }) => (
  <FormSection>
    <Heading>Please Enter Recipe Name</Heading>
    <Label hidden htmlFor="name">Recipe Name</Label>
    <TextInput primary id="name" placeholder="Chicken Kiev" value={value} onChange={onChange} />
    {!isEditing && <Button next primary onClick={proceed}>Proceed</Button>}
    {isEditing && <Button next primary onClick={finishEditing}>Save</Button>}
  </FormSection>
);

RecipeName.propTypes = {
  proceed: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  finishEditing: PropTypes.func.isRequired
};

export default RecipeName;
