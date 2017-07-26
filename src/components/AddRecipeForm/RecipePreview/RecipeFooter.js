import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './Section';
import InfoBox from './InfoBox';
import TagsBox from './TagsBox';

const StyledRecipeFooter = styled.div`

`;

const RecipeFooter = ({ kcal, servings, tags }) => (
  <Section>
    <StyledRecipeFooter>
      <InfoBox kcal={kcal} servings={servings} />
      <TagsBox tags={tags} />
    </StyledRecipeFooter>
  </Section>
);

RecipeFooter.propTypes = {
  kcal: PropTypes.string,
  servings: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }))
};

export default RecipeFooter;
