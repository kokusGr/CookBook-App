import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import ImageInput from './ImageInput';
import ImagePreview from './ImagePreview';
import Heading from '../common/Heading';
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
  }

  deleteImages = (e) => {
    const newArr = this.state.images.filter(img => img.id !== e.currentTarget.id);
    this.props.onSave(newArr, 'images');
  }

  render() {
    return (
      <div>
        <Heading>Please Add Some Images</Heading>
        <Label file htmlFor="img">Add new image</Label>
        <ImageInput onChange={this.handleChange} id="img" />
        <ImagePreview images={this.state.images} handleClick={this.deleteImages} />
      </div>
    );
  }
}

RecipeImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })),
  onSave: PropTypes.func.isRequired
};

export default RecipeImages;
