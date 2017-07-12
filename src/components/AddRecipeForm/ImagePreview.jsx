import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../common/style/Image';

const PreviewBox = styled.div`
& img {
  width: 50%;
  padding: 5px;
  display: inline-block;
}

& div {
  text-align: center;
}
`;

const PreviewImages = ({ images }) => (
  <PreviewBox>
    {images.length === 0 && <p>No images were selected!</p>}
    {images.map(img => (<Image
      key={images.indexOf(img)}
      src={img}
    />)
  )}
  </PreviewBox>
);

PreviewImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PreviewImages;
