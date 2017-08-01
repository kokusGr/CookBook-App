import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import ImageInput from './ImageInput';
import ImagePreview from './ImagePreview';
import Heading2 from '../common/Heading2';
import Heading3 from '../common/Heading3';
import uniqueId from '../../utils/uniqueId';

class RecipeImages extends React.Component {
  state = {
    images: this.props.images || []
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.images !== nextProps.images) {
      this.setState({ images: nextProps.images });
    }
  }

  handleChange = (e) => {
    const srcFile = e.target.files[0];
    const src = window.URL.createObjectURL(srcFile);
    const newImg = {
      id: uniqueId(),
      src
    };
    const images = this.state.images.slice('');
    images.push(newImg);
    this.props.onSave(images, 'images');
    if (images.length === 1) {
      this.props.selectMainImage(newImg);
    }
  }

  deleteImages = (e) => {
    const newArr = this.state.images.filter(img => img.id !== e.currentTarget.id);
    this.props.onSave(newArr, 'images');
  }

  selectImage = (e) => {
    const clickedImage = this.state.images.find(img => img.id === e.target.id);
    this.props.selectMainImage(clickedImage);
  }

  render() {
    return (
      <div>
        <Heading2 formSection>Please Add Some Images</Heading2>
        <Label file htmlFor="img">Add new image</Label>
        <ImageInput onChange={this.handleChange} id="img" />
        <Heading3 hidden>Image preview</Heading3>
        <ImagePreview
          images={this.state.images}
          handleClick={this.deleteImages}
          selectImage={this.selectImage}
          mainImage={this.props.mainImage}
        />
      </div>
    );
  }
}

RecipeImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })),
  mainImage: PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  }),
  onSave: PropTypes.func.isRequired,
  selectMainImage: PropTypes.func.isRequired
};

export default RecipeImages;
