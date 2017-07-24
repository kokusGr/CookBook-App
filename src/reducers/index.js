import { combineReducers } from 'redux';
import stepNumber from './stepNumberReducer';

const rootReducer = combineReducers({
  stepNumber
});

export default rootReducer;
