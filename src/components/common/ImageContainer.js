import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from './Image';

const StyledImageContainer = styled.div`
  position: relative;
  width: 33%;
  margin-top: .5rem;
`;

const ImageContainer = ({ src, children, ...props }) => (
  <StyledImageContainer>
    <Image {...props} src={src} alt="cos" />
    {children}
  </StyledImageContainer>
);

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.shape({})
};

export default ImageContainer;
