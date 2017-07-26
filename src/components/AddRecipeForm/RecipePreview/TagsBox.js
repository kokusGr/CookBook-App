import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from '../Tag';
import Section from './Section';

const StyledTagsBox = styled.div`
  width: 70%;
  margin: 1rem auto 0;
`;

const TagsBox = ({ tags, editSection }) => (
  <Section editSection={editSection} id="tags">
    <StyledTagsBox>
      {tags.map(tag => (
        <Tag key={tag.id}>{tag.text}</Tag>
      ))}
    </StyledTagsBox>
  </Section>
);

TagsBox.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
  editSection: PropTypes.func.isRequired
};

export default TagsBox;
