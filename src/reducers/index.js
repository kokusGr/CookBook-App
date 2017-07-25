import { combineReducers } from 'redux';
import stepNumber from './stepNumberReducer';
import newRecipe from './newRecipeReducer';

const rootReducer = combineReducers({
  stepNumber,
  newRecipe
});

export default rootReducer;
