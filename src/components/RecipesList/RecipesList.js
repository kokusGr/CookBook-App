import React from 'react';
import PropTypes from 'prop-types';
import Columns from '../common/Columns';
import Thumbnail from './Thumbnail';

const RecipesList = ({ recipes }) => (
  <div>
    <Columns>
      {recipes.map(recipe => (
        <Thumbnail key={recipe['_id']} recipe={recipe} />
      ))}
    </Columns>
  </div>
);
RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    mainImage: PropTypes.shape({
      src: PropTypes.string
    })
  })).isRequired
};

export default RecipesList;
