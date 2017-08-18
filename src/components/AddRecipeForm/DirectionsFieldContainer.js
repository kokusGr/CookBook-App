import React from 'react';
import { connect } from 'react-redux';

import { updateNewRecipeValidation } from '../../actionCreators/thunks';
import DirectionsField from './DirectionsField';

class DirectionsFieldContainer extends React.Component {

  render() {
    return (
      <DirectionsField {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    directions: state.newRecipe.directions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewRecipeValidation: (value, field) => dispatch(updateNewRecipeValidation(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectionsFieldContainer);
