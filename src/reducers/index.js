import { combineReducers } from 'redux';
import stepNumber from './stepNumberReducer';
import newRecipe from './newRecipeReducer';
import isEditing from './editFormSectionReducer';
import recipes from './recipesReducer';

const rootReducer = combineReducers({
  stepNumber,
  newRecipe,
  isEditing,
  recipes
});

export default rootReducer;
