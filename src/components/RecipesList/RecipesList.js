import React from 'react';
import PropTypes from 'prop-types';
import BubblePreloader from 'react-bubble-preloader';
import Columns from '../common/Columns';
import Thumbnail from './Thumbnail';

const RecipesList = ({ recipes }) => {
  if (recipes === undefined) {
    return <BubblePreloader />;
  }
  return (
    <div>
      <Columns>
        {recipes.map(recipe => (
          <Thumbnail key={recipe['_id']} recipe={recipe} />
        ))}
      </Columns>
    </div>
  );
};
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
