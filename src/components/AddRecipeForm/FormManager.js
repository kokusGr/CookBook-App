import React from 'react';
import { connect } from 'react-redux';

import AddRecipeForm from './AddRecipeForm';
import { prevStep, } from '../../actionCreators/actions';
import { nextStep } from '../../actionCreators/thunks';

class FormManager extends React.Component {
  static propTypes = {}

  render() {
    return (
      <AddRecipeForm {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    stepNumber: state.stepNumber,
    isEditing: state.isEditing,
    formErrors: state.formErrors,
    newRecipe: state.newRecipe,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextStep: (stepNumber, recipe) => dispatch(nextStep(stepNumber, recipe)),
    prevStep: () => dispatch(prevStep()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormManager);
