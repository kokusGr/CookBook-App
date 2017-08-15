import React from 'react';
import PropTypes from 'prop-types';

import Heading2 from '../common/Heading2';
import ListInput from './ListInput';
import List from './List';

const RecipeIngridients = ({ ingridients, updateNewRecipe, }) => (
  <div>
    <Heading2 formSection>Please Add Needed Ingridients</Heading2>
    <ListInput name="ingridients" label="recipe ingridients" handleClick={updateNewRecipe} list={ingridients} />
    <List name="ingridients" list={ingridients} type="ul" isEditable handleUpdate={updateNewRecipe} />
  </div>
);

RecipeIngridients.propTypes = {
  ingridients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  })),
  updateNewRecipe: PropTypes.func.isRequired,
};

export default RecipeIngridients;
