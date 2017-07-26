import { NEXT_STEP, PREV_STEP, EDIT_SECTION, FINISH_EDITING } from '../constants/actionTypes';
import getSteps from '../constants/steps';

const steps = getSteps();

const stepNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return state + 1;

    case PREV_STEP:
      return state - 1;

    case EDIT_SECTION:
      return action.stepNumber;

    case FINISH_EDITING:
      return steps.findIndex(step => step === 'preview');

    default:
      return state;
  }
};

export default stepNumberReducer;
