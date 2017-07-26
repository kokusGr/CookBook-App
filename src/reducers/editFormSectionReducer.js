import { EDIT_SECTION, FINISH_EDITING } from '../constants/actionTypes';

const editFormSectionReducer = (state = false, action) => {
  switch (action.type) {
    case EDIT_SECTION:
      return true;

    case FINISH_EDITING:
      return false;

    default:
      return state;
  }
};

export default editFormSectionReducer;
