import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import Text from '../../common/Text';

const Description = ({ description, editSection }) => (
  <Section editSection={editSection} id="description">
    {description.length === 0 && <p>No recipe description!</p>}
    <Text pageReview>{description}</Text>
  </Section>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
  editSection: PropTypes.func.isRequired
};

export default Description;
