import React from 'react';
import { connect } from 'react-redux';

import { updateNewRecipeValidation } from '../../actionCreators/thunks';
import AdditionalInfoFields from './AdditionalInfoFields';

class AdditionalInfoFieldsContainer extends React.Component {
  static propTypes = {}

  render() {
    return (
      <AdditionalInfoFields {...this.props} />
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
    updateNewRecipeValidation: (value, field) => dispatch(updateNewRecipeValidation(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfoFieldsContainer);
