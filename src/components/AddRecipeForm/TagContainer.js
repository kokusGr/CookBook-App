import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag';

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TagContainer = ({ tag, ...props }) => (
  <StyledContainer>
    <Tag>{tag}</Tag>
    {props.children}
  </StyledContainer>
);

TagContainer.propTypes = {
  tag: PropTypes.string.isRequired,
  children: PropTypes.shape({})
};

export default TagContainer;
