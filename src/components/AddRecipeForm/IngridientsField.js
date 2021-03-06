import React from 'react';
import PropTypes from 'prop-types';

import Heading2 from '../common/Heading2';
import ListInput from './ListInput';
import List from './List';

const RecipeIngridients = ({ ingridients, updateNewRecipeValidation, }) => (
  <div>
    <Heading2 formSection>Please Add Needed Ingridients</Heading2>
    <ListInput name="ingridients" label="recipe ingridients" handleClick={updateNewRecipeValidation} list={ingridients} />
    <List name="ingridients" list={ingridients} type="ul" isEditable handleUpdate={updateNewRecipeValidation} />
  </div>
);

RecipeIngridients.propTypes = {
  ingridients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  })),
  updateNewRecipeValidation: PropTypes.func.isRequired,
};

export default RecipeIngridients;
