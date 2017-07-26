import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import ImagePreview from '../ImagePreview';

const ImagesList = ({ images, editSection, mainImage }) => (
  <Section editSection={editSection} id="images">
    <ImagePreview noMargin paddingTop images={images} mainImage={mainImage} />
  </Section>
);

ImagesList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })).isRequired,
  editSection: PropTypes.func.isRequired,
  mainImage: PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })
};

export default ImagesList;
