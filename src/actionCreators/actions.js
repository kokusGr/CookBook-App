import * as actions from '../constants/actionTypes';

export function nextStepSuccess() {
  return {
    type: actions.NEXT_STEP_SUCCESS
  };
}

export function nextStepRejected(errors) {
  return {
    type: actions.NEXT_STEP_REJECTED,
    errors,
  };
}

export function prevStep() {
  return {
    type: actions.PREV_STEP
  };
}

export function updateNewRecipe(newValue, field) {
  return {
    type: actions.UPDATE_NEW_RECIPE,
    newValue,
    field,
  };
}

export function updateErrors(errors) {
  return {
    type: actions.UPDATE_ERRORS,
    errors,
  };
}

export function editSection(stepNumber) {
  return {
    type: actions.EDIT_SECTION,
    stepNumber
  };
}

export function finishEditing() {
  return {
    type: actions.FINISH_EDITING
  };
}

export function saveRecipe(recipe) {
  return {
    type: actions.SAVE_RECIPE,
    recipe
  };
}

export function selectMainImage(clickedImage) {
  return {
    type: actions.SELECT_MAIN_IMAGE,
    clickedImage
  };
}

export function loadAllRecipesSuccess(recipes) {
  return {
    type: actions.LOAD_ALL_RECIPES_SUCCESS,
    recipes
  };
}

export function loadAllRecipesRequest() {
  return {
    type: actions.LOAD_ALL_RECIPES_REQUEST
  };
}

export function saveRecipeSuccess(recipe) {
  return {
    type: actions.SAVE_RECIPE_SUCCESS,
    recipe
  };
}

export function saveRecipeRequest() {
  return {
    type: actions.SAVE_RECIPE_REQUEST
  };
}

export function saveRecipeRejected(errors) {
  return {
    type: actions.SAVE_RECIPE_REJECTED,
    errors,
  };
}
