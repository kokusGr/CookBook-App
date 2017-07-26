import { SAVE_RECIPE } from '../constants/actionTypes';

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return [
        ...state,
        action.recipe
      ];
    default:
      return state;
  }
};

export default recipesReducer;
