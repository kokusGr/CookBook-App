import React from 'react';
import { connect } from 'react-redux';

import { updateNewRecipe } from '../../actionCreators/actions';
import AdditionalInfoFields from './AdditionalInfoFields';

class AdditionalInfoFieldsContainer extends React.Component {
  static propTypes = {}

  render() {
    return (
      <AdditionalInfoFields />
    );
  }
}

function mapStateToProps(state) {
  return {
    kcal: state.newRecipe.kcal,
    servings: state.newRecipe.servings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewRecipe: (value, field) => dispatch(updateNewRecipe(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfoFieldsContainer);
