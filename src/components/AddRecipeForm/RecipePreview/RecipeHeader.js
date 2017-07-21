import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdEdit from 'react-icons/lib/md/edit';
import Section from './Section';
import Button from '../../common/Button';

const Title = styled.h3`
  margin: 0;
  font-size: 2.2rem;
  font-weight: 300;
  color: #FFF;
  font-style: italic;
  margin-bottom: 0.875rem;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.mainBlack};
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.4;
`;

const RecipeHeader = ({ name, description }) => (
  <Section>
    <Button edit>
      <i><MdEdit /></i>
      Edit
    </Button>
    <Title>{name}</Title>
    <Description>{description}</Description>
  </Section>
);

RecipeHeader.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecipeHeader;
