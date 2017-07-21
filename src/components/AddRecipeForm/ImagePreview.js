import React from 'react';
import PropTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear';
import IconCircle from '../common/IconCircle';
import ImageContainer from '../common/ImageContainer';
import FlexBox from '../common/FlexBox';

class PreviewImages extends React.Component {

  handleClick = (e) => {
    const newArr = this.props.images.filter(img => img.id !== e.currentTarget.id);
    this.props.updateList(newArr, 'images');
  }
  render() {
    const { images, updateList, ...props } = this.props;
    return (
      <FlexBox {...props}>
        {images.length === 0 && <p>No images were selected!</p>}
        {images.map(img => (
          <ImageContainer key={img.id} src={img.src}>
            {updateList && <IconCircle topCenter id={img.id} onClick={this.handleClick}>
              <MdClear />
            </IconCircle>}
          </ImageContainer>)
        )}
      </FlexBox>
    );
  }
}

PreviewImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })).isRequired,
  updateList: PropTypes.func
};

export default PreviewImages;
