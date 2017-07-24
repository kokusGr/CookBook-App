import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Label from './Label';
import Heading from '../common/Heading';

const RecipeName = ({ value, onChange }) => (
  <div>
    <Heading>Please Name Your Recipes</Heading>
    <Label hidden htmlFor="name">Recipe Name</Label>
    <TextInput primary id="name" placeholder="Chicken Kiev" value={value} onChange={onChange} />
  </div>
);

RecipeName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RecipeName;
