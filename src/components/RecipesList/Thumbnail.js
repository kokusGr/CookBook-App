import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../common/Image';

const StyledThumbnail = styled.div`
  background-color: #FFF;
  break-inside: avoid;
  padding: 6px;
`;

const ThumbnalTitle = styled.h3`
  font-weight: 400;
  font-size: 1.6rem;
  margin: .6rem 0 .8rem;
  font-style: italic;
`;

const ThumbnailDescription = styled.p`
  font-weight: 300;
  font-size: .9rem;
  margin: 0;
  letter-spacing: .05rem;
  line-height: 1.7;
`;

const Thumbnail = ({ recipe }) => (
  <StyledThumbnail>
    <Image src={recipe.mainImage.src} />
    <ThumbnalTitle>{recipe.name}</ThumbnalTitle>
    <ThumbnailDescription>{recipe.description}</ThumbnailDescription>
  </StyledThumbnail>
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
