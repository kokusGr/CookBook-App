import React from 'react';
import PropTypes from 'prop-types';

import Heading2 from '../common/Heading2';
import List from './List';
import ListInput from './ListInput';

const DirectionsField = ({ directions, updateNewRecipeValidation, }) => (
  <div>
    <Heading2 formSection>Please Add Needed Directions</Heading2>
    <ListInput name="directions" label="recipe directions" handleClick={updateNewRecipeValidation} list={directions} />
    <List name="directions" list={directions} type="ol" counter="directions" isEditable handleUpdate={updateNewRecipeValidation} />
  </div>
);

DirectionsField.propTypes = {
  directions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateNewRecipeValidation: PropTypes.func.isRequired,
};

export default DirectionsField;
