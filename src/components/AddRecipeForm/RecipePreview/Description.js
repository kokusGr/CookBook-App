import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './Section';

const StyledDescription = styled.p`
  color: ${props => props.theme.colors.mainBlack};
  font-style: italic;
  font-size: 1.1rem;
  padding: .8rem 0;
  line-height: 1.4;
  margin: 0 0 .5rem;
`;

const Description = ({ description, editSection }) => (
  <Section editSection={editSection} id="description">
    {description.length === 0 && <p>No recipe description!</p>}
    <StyledDescription>{description}</StyledDescription>
  </Section>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
  editSection: PropTypes.func.isRequired
};

export default Description;
