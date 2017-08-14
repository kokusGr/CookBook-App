import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import ImageInput from './ImageInput';
import ImagePreview from './ImagePreview';
import Heading2 from '../common/Heading2';
import Heading3 from '../common/Heading3';
import uniqueId from '../../utils/uniqueId';

class RecipeImages extends React.Component {

  addImage = (e) => {
    const srcFile = e.target.files[0];
    const src = window.URL.createObjectURL(srcFile);
    const newImg = {
      id: uniqueId(),
      src
    };
    const images = this.props.images.slice('');
    images.push(newImg);
    this.props.updateNewRecipe(images, 'images');
    if (images.length === 1) {
      this.props.selectMainImage(newImg);
    }
  }

  deleteImages = (e) => {
    const newArr = this.props.images.filter(img => img.id !== e.currentTarget.id);
    this.props.updateNewRecipe(newArr, 'images');
  }

  render() {
    const {
      images,
      mainImage,
      selectMainImage,
    } = this.props;
    return (
      <div>
        <Heading2 formSection>Please Add Some Images</Heading2>
        <Label file htmlFor="images">Add new image</Label>
        <ImageInput onChange={this.addImage} id="images" />
        <Heading3 hidden>Image preview</Heading3>
        <ImagePreview
          images={images}
          selectMainImage={selectMainImage}
          mainImage={mainImage}
          handleClick={this.deleteImages}
        />
      </div>
    );
  }
}

RecipeImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  mainImage: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  updateNewRecipe: PropTypes.func.isRequired,
  selectMainImage: PropTypes.func.isRequired,
};

export default RecipeImages;
