import React from 'react';
import PropTypes from 'prop-types';
import MdEdit from 'react-icons/lib/md/edit';
import Section from './Section';
import Button from '../../common/Button';
import ImagePreview from '../ImagePreview';

const ImagesList = ({ images }) => (
  <Section>
    <Button edit>
      <i><MdEdit /></i>
      <span>Edit</span>
    </Button>
    <ImagePreview paddingTop images={images} />
  </Section>
);

ImagesList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  })).isRequired
};

export default ImagesList;
