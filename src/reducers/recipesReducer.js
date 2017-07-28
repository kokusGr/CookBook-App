import { SAVE_RECIPE_SUCCESS, LOAD_ALL_RECIPES_SUCCESS } from '../constants/actionTypes';

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_RECIPES_SUCCESS:
      return action.recipes;

    case SAVE_RECIPE_SUCCESS:
      return [
        ...state,
        action.recipe
      ];

    default:
      return state;
  }
};

export default recipesReducer;
