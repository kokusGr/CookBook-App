import { combineReducers } from 'redux';
import stepNumber from './stepNumberReducer';
import newRecipe from './newRecipeReducer';
import isEditing from './editFormSectionReducer';
import recipes from './recipesReducer';
import formErrors from './formErrorsReducer';

const rootReducer = combineReducers({
  stepNumber,
  newRecipe,
  isEditing,
  recipes,
  formErrors,
});

export default rootReducer;
