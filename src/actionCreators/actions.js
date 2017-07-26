import * as actions from '../constants/actionTypes';

export function nextStep() {
  return {
    type: actions.NEXT_STEP
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
    field
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
