import * as actions from './actions';
import recipesApi from '../../tools/api/recipesApi';
import { validateRecipe, validateStep } from '../utils/validate';
// import store from '../store/configureStore';

export const loadAllRecipes = () => (dispatch) => {
  dispatch(actions.loadAllRecipesRequest());
  return recipesApi.getAllRecipes()
    .then(
      recipes => dispatch(actions.loadAllRecipesSuccess(recipes)),
      error => console.log('An error occured', error)
    );
};

export const saveRecipe = recipe => (dispatch) => {
  dispatch(actions.saveRecipeRequest());
  const errors = validateRecipe(recipe);
  if (Object.keys(errors).length !== 0) {
    return dispatch(actions.saveRecipeRejected(errors));
  }
  return recipesApi.saveRecipe(recipe)
    .then(
      response => dispatch(actions.saveRecipeSuccess(response)),
      error => console.log('An error occured', error)
    );
};

// const isEditing = () => store.getState().isEditing;

export const nextStep = (stepNumber, recipe) => (dispatch, getState) => {
  const errors = validateStep(stepNumber, recipe);
  if (Object.keys(errors).length !== 0) {
    return dispatch(actions.nextStepRejected(errors));
  }
  if (getState().isEditing) {
    return dispatch(actions.finishEditing());
  }
  return dispatch(actions.nextStepSuccess());
};

export const updateNewRecipeValidation = (value, field) => (dispatch, getState) => {
  let errors = getState().formErrors;

  dispatch(actions.updateNewRecipe(value, field));

  if (Object.keys(errors).length !== 0) {
    console.log('Validating!');
    errors = validateStep(getState().stepNumber, getState().newRecipe);
    dispatch(actions.updateErrors(errors));
  }
};
