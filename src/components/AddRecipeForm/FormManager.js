import React from 'react';
import { connect } from 'react-redux';

import AddRecipeForm from './AddRecipeForm';
import { nextStep, } from '../../actionCreators/actions';

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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormManager);
