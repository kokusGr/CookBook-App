import { combineReducers } from 'redux';
import stepNumber from './stepNumberReducer';
import newRecipe from './newRecipeReducer';
import isEditing from './editFormSectionReducer';

const rootReducer = combineReducers({
  stepNumber,
  newRecipe,
  isEditing
});

export default rootReducer;
