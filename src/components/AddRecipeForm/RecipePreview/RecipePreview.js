import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RecipeHeader from './RecipeHeader';
import ImagesList from './ImageList';
import IngridientsList from './IngridientsList';
import DirectionsList from './DirectionsList';
import RecipeFooter from './RecipeFooter';
import FormSection from '../FormSection';
import Heading from '../../common/Heading';
import Button from '../../common/Button';

const StyledPreview = styled.div`
  margin-top: 1.75rem;
  border-top: 2px solid ${props => props.theme.colors.mainGray};
  padding-top: 2.25rem;
`;

const RecipePreview = ({ name, description, images, ingridients, directions, kcal, servings, tags }) => (
  <FormSection>
    <Heading>Here Is Your New Recipe</Heading>
    <Heading subheading>Please check if everything is OK</Heading>
    <StyledPreview>
      <RecipeHeader name={name} description={description} />
      <ImagesList images={images} />
      <IngridientsList ingridients={ingridients} />
      <DirectionsList directions={directions} />
      <RecipeFooter kcal={kcal} servings={servings} tags={tags} />
    </StyledPreview>
    <Button next primary>Save</Button>
  </FormSection>
);

RecipePreview.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
  ingridients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  directions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  kcal: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default RecipePreview;
