import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './Section';

const Title = styled.h3`
  margin: 0;
  font-size: 2.2rem;
  font-weight: 300;
  color: #FFF;
  font-style: italic;
  margin-bottom: 0.875rem;
`;

const Name = ({ name, editSection }) => (
  <Section editSection={editSection} id="name">
    <Title>{name}</Title>
  </Section>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
  editSection: PropTypes.func.isRequired
};

export default Name;
