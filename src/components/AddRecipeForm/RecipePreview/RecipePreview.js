import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Name from './Name';
import Description from './Description';
import ImagesList from './ImageList';
import IngridientsList from './IngridientsList';
import DirectionsList from './DirectionsList';
import InfoBox from './InfoBox';
import TagsBox from './TagsBox';
import Heading2 from '../../common/Heading2';
import Button from '../../common/Button';

const StyledPreview = styled.div`
  margin-top: 1.75rem;
  border-top: 2px solid ${props => props.theme.colors.mainGray};
  padding-top: 2.25rem;
`;

const RecipePreview = ({ newRecipe, editSection, saveRecipe, }) => (
  <div>
    <Heading2 formSection>Please check if everything is OK</Heading2>
    <StyledPreview>
      <Name name={newRecipe.name} editSection={editSection} />
      <Description description={newRecipe.description} editSection={editSection} />
      <ImagesList
        images={newRecipe.images}
        editSection={editSection}
        mainImage={newRecipe.mainImage}
      />
      <IngridientsList ingridients={newRecipe.ingridients} editSection={editSection} />
      <DirectionsList directions={newRecipe.directions} editSection={editSection} />
      <InfoBox
        kcal={newRecipe.kcal}
        servings={newRecipe.servings}
        editSection={editSection}
      />
      <TagsBox tags={newRecipe.tags} editSection={editSection} />
      <Button
        onClick={(e) => {
          e.preventDefault();
          saveRecipe(newRecipe);
        }}
        primary
        next
      >
        SAVE
      </Button>
    </StyledPreview>
  </div>
);

RecipePreview.propTypes = {
  newRecipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
    ).isRequired,
    ingridients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    directions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    kcal: PropTypes.string.isRequired,
    servings: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  editSection: PropTypes.func.isRequired,
  saveRecipe: PropTypes.func.isRequired,
};

export default RecipePreview;
