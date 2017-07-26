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
import Heading from '../../common/Heading';
import Button from '../../common/Button';

const StyledPreview = styled.div`
  margin-top: 1.75rem;
  border-top: 2px solid ${props => props.theme.colors.mainGray};
  padding-top: 2.25rem;
`;

const RecipePreview = ({ newRecipe, editSection }) => (
  <div>
    <Heading subheading>Please check if everything is OK</Heading>
    <StyledPreview>
      <Name name={newRecipe.name} editSection={editSection} />
      <Description description={newRecipe.description} editSection={editSection} />
      {newRecipe.images.length > 0
        && <ImagesList images={newRecipe.images} editSection={editSection} />}
      <IngridientsList ingridients={newRecipe.ingridients} editSection={editSection} />
      <DirectionsList directions={newRecipe.directions} editSection={editSection} />
      {(newRecipe.kcal.length > 0 || newRecipe.servings.length > 0)
        && <InfoBox
          kcal={newRecipe.kcal}
          servings={newRecipe.servings}
          editSection={editSection}
        /> }
      {newRecipe.tags.length > 0
        && <TagsBox tags={newRecipe.tags} editSection={editSection} />}
    </StyledPreview>
    <Button next primary>Save</Button>
  </div>
);

RecipePreview.propTypes = {
  newRecipe: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })),
    ingridients: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })),
    directions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })),
    kcal: PropTypes.string,
    servings: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    }))
  }),
  editSection: PropTypes.func.isRequired
};

export default RecipePreview;
