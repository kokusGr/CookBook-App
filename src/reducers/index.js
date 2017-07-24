import { combineReducers } from 'redux';
import currentStep from './currentStepReducer';

const rootReducer = combineReducers({
  currentStep
});

export default rootReducer;
