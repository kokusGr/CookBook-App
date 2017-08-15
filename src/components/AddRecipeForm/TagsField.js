import React from 'react';
import PropTypes from 'prop-types';

import Heading2 from '../common/Heading2';
import List from './List';
import ListInput from './ListInput';

const TagsField = ({ tags, updateNewRecipe, }) => (
  <div>
    <Heading2 formSection>Please Add Some Tags</Heading2>
    <ListInput name="tags" label="recipe tags" handleClick={updateNewRecipe} list={tags} />
    <List name="tags" list={tags} type="ul" isEditable handleUpdate={updateNewRecipe} />
  </div>
);

TagsField.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateNewRecipe: PropTypes.func.isRequired,
};

export default TagsField;
