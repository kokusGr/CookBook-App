import React from 'react';
import { connect } from 'react-redux';

import AddRecipeForm from './AddRecipeForm';
import { nextStep, prevStep, finishEditing, } from '../../actionCreators/actions';

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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    prevStep: () => dispatch(prevStep()),
    finishEditing: () => dispatch(finishEditing()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormManager);
