import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import ImageInput from './ImageInput';
import ImagePreview from './ImagePreview';
import Heading from '../common/Heading';

const RecipeImages = ({ onChange, images, updateList }) => (
  <div>
    <Heading>Please Add Some Images</Heading>
    <Label file htmlFor="img">Add new image</Label>
    <ImageInput onChange={onChange} id="img" />
    <ImagePreview images={images} updateList={updateList} />
  </div>
);

RecipeImages.propTypes = {
  onChange: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })),
  updateList: PropTypes.func.isRequired,
};

export default RecipeImages;
