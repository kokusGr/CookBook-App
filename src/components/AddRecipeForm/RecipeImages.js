import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './FormSection';
import Heading from '../common/Heading';
import Button from '../common/Button';
import Label from './Label';
import ImageInput from './ImageInput';
import ImagePreview from './ImagePreview';

const RecipeImages = ({ onChange, images, proceed, updateList, isEditing, finishEditing }) => (
  <FormSection>
    <Heading>Please Enter Short Description</Heading>
    <Label file htmlFor="img">Add new image</Label>
    <ImageInput onChange={onChange} id="img" />
    <ImagePreview images={images} updateList={updateList} />
    {!isEditing && <Button next primary onClick={proceed}>Proceed</Button>}
    {isEditing && <Button next primary onClick={finishEditing}>Save</Button>}
  </FormSection>
);

RecipeImages.propTypes = {
  proceed: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })),
  updateList: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  finishEditing: PropTypes.func.isRequired
};

export default RecipeImages;
