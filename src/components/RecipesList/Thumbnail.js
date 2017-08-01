import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../common/Image';
import Text from '../common/Text';
import Heading2 from '../common/Heading2';

const StyledThumbnail = styled.div`
  background-color: #FFF;
  break-inside: avoid;
  padding: 6px;
`;

const Thumbnail = ({ recipe }) => (
  <Link to={`/recipes/${recipe['_id']}`}>
    <StyledThumbnail>
      <Image src={recipe.mainImage.src} />
      <Heading2>{recipe.name}</Heading2>
      <Text thumbnail>{recipe.description}</Text>
    </StyledThumbnail>
  </Link>
);

Thumbnail.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    mainImage: PropTypes.shape({
      src: PropTypes.string
    })
  }).isRequired
};

export default Thumbnail;
