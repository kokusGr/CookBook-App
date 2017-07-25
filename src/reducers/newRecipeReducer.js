import { UPDATE_NEW_RECIPE } from '../constants/actionTypes';

const newRecipeReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_NEW_RECIPE:
      return Object.assign({}, state, { [action.field]: action.newValue });
    default:
      return state;
  }
};

export default newRecipeReducer;
