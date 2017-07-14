import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../common/Image';

const PreviewBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 30px 0 20px;

  & img {
    width: 50%;
    padding: 5px;
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
