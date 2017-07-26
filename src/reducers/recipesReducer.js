import { SAVE_RECIPE, LOAD_ALL_RECIPES } from '../constants/actionTypes';

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return [
        ...state,
        action.recipe
      ];
    case LOAD_ALL_RECIPES:
      return action.recipes;
    default:
      return state;
  }
};

export default recipesReducer;
