import React from 'react';
import PropTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear';
import IconCircle from '../common/IconCircle';
import ImageContainer from '../common/ImageContainer';
import FlexBox from '../common/FlexBox';

const PreviewImages = ({ images, ...props }) => (
  <FlexBox {...props}>
    {images.length === 0 && <p>No images were selected!</p>}
    {images.map(img => (
      <ImageContainer key={img.id} src={img.src}>
        <IconCircle topCenter>
          <MdClear />
        </IconCircle>
      </ImageContainer>)
    )}
  </FlexBox>
);

PreviewImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })).isRequired
};

export default PreviewImages;
