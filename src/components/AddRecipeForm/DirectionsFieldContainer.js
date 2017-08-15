import React from 'react';
import { connect } from 'react-redux';

import { updateNewRecipe } from '../../actionCreators/actions';
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
    updateNewRecipe: (value, field) => dispatch(updateNewRecipe(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectionsFieldContainer);
