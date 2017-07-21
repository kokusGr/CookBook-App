import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from '../Tag';

const StyledTagsBox = styled.div`
  margin-top: 1rem;
`;

const TagsBox = ({ tags }) => (
  <StyledTagsBox>
    {tags.map(tag => (
      <Tag key={tag.id}>{tag.name}</Tag>
    ))}
  </StyledTagsBox>
);

TagsBox.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
};

export default TagsBox;
