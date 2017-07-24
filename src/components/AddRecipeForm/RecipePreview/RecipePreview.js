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

const RecipePreview = ({ name, description, images, ingridients, directions, kcal, servings, tags, editSection }) => (
  <div>
    <Heading subheading>Please check if everything is OK</Heading>
    <StyledPreview>
      <Name name={name} editSection={editSection} />
      <Description description={description} editSection={editSection} />
      <ImagesList images={images} editSection={editSection} />
      <IngridientsList ingridients={ingridients} editSection={editSection} />
      <DirectionsList directions={directions} editSection={editSection} />
      <InfoBox kcal={kcal} servings={servings} editSection={editSection} />
      <TagsBox tags={tags} editSection={editSection} />
    </StyledPreview>
    <Button next primary>Save</Button>
  </div>
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
  editSection: PropTypes.func.isRequired
};

export default RecipePreview;
