import React from 'react';
import PropTypes from 'prop-types';
import Heading2 from '../common/Heading2';
import TextInput from './TextInput';
import Label from './Label';

const DescriptionField = ({ description, updateNewRecipe, }) => (
  <div>
    <Heading2 formSection>Please Provide Short Description</Heading2>
    <Label hidden htmlFor="description">Recipe Description</Label>
    <TextInput
      box
      id="description"
      name="description"
      placeholder="This is the best dish I have ever tasted!"
      value={description}
      onChange={e => updateNewRecipe(e.currentTarget.value, e.currentTarget.name)}
      required
      maxLength="160"
    />
  </div>
);

DescriptionField.propTypes = {
  description: PropTypes.string.isRequired,
  updateNewRecipe: PropTypes.func.isRequired,
};

export default DescriptionField;
