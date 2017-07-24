import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../common/Heading';
import TextInput from './TextInput';
import Label from './Label';

const RecipeDescription = ({ value, onChange }) => (
  <div>
    <Heading>Please Provide Short Description</Heading>
    <Label hidden htmlFor="description">Recipe Description</Label>
    <TextInput box id="description" placeholder="This is the best dish I have ever tasted!" value={value} onChange={onChange} />
  </div>
);

RecipeDescription.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default RecipeDescription;
