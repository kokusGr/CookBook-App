import { SAVE_RECIPE_REJECTED, NEXT_STEP_REJECTED, UPDATE_ERRORS, } from '../constants/actionTypes';

const formErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case NEXT_STEP_REJECTED:
    case UPDATE_ERRORS:
    case SAVE_RECIPE_REJECTED:
      return {
        ...action.errors,
      };

    default:
      return state;
  }
};

export default formErrorsReducer;
