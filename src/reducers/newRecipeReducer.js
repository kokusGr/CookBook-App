import { UPDATE_NEW_RECIPE, SELECT_MAIN_IMAGE } from '../constants/actionTypes';

const initialState = {
  name: '',
  description: '',
  images: [],
  mainImage: {},
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
    case SELECT_MAIN_IMAGE:
      return Object.assign({}, state, { mainImage: action.clickedImage });
    default:
      return state;
  }
};

export default newRecipeReducer;
