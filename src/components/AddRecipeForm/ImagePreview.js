import React from 'react';
import PropTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear';
import IconCircle from '../common/IconCircle';
import ImageContainer from '../common/ImageContainer';
import FlexBox from '../common/FlexBox';

const PreviewImages = ({ images, handleClick, selectMainImage, mainImage, ...props }) => (
  <FlexBox {...props}>
    {images.length === 0 && <p>No images were selected!</p>}
    {images.map(img => (
      <ImageContainer
        key={img.id}
        src={img.src}
        id={img.id}
        onClick={() => (selectMainImage ? selectMainImage(img) : null)}
        selected={img.id === mainImage.id}
      >
        {handleClick && <IconCircle topCenter id={img.id} onClick={handleClick}>
          <MdClear />
        </IconCircle>}
      </ImageContainer>)
    )}
  </FlexBox>
);

PreviewImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  mainImage: PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string,
  }),
  handleClick: PropTypes.func,
  selectMainImage: PropTypes.func,
};

export default PreviewImages;
