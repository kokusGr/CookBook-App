import { UPDATE_NEW_RECIPE } from '../constants/actionTypes';

const initialState = {
  name: '',
  description: '',
  images: [],
  ingridients: [],
  directions: [],
  kcal: '',
  servings: '',
  tags: []
};

const newRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_RECIPE:
      return Object.assign({}, state, { [action.field]: action.newValue });
    default:
      return state;
  }
};

export default newRecipeReducer;
