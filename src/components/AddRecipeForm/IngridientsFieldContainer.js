import React from 'react';
import { connect } from 'react-redux';

import IngridientsField from './IngridientsField';
import { updateNewRecipeValidation } from '../../actionCreators/thunks';

class IngridientsFieldContainer extends React.Component {

  render() {
    return (
      <IngridientsField {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    ingridients: state.newRecipe.ingridients,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewRecipeValidation: (value, field) => dispatch(updateNewRecipeValidation(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IngridientsFieldContainer);
