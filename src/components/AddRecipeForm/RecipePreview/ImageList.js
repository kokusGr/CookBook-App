import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import ImagePreview from '../ImagePreview';

const ImagesList = ({ images, editSection }) => (
  <Section editSection={editSection} id="images">
    <ImagePreview noMargin paddingTop images={images} />
  </Section>
);

ImagesList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })).isRequired,
  editSection: PropTypes.func.isRequired
};

export default ImagesList;
