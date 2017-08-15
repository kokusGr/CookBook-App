import React from 'react';
import { connect } from 'react-redux';

import IngridientsField from './IngridientsField';
import { updateNewRecipe } from '../../actionCreators/actions';

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
    updateNewRecipe: (value, field) => dispatch(updateNewRecipe(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IngridientsFieldContainer);
