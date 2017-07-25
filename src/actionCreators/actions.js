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
