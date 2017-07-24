import * as actions from './actionTypes';

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
