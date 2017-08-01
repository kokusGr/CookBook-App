import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import Text from '../../common/Text';

const Name = ({ name, editSection }) => (
  <Section editSection={editSection} id="name">
    {name.length === 0 && <p>No recipe name!</p>}
    <Text pageReview>{name}</Text>
  </Section>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
  editSection: PropTypes.func.isRequired
};

export default Name;
