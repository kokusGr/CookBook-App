import React from 'react';
import { connect } from 'react-redux';

import NameField from './NameField';
import { updateNewRecipeValidation } from '../../actionCreators/thunks';

class NameFieldContainer extends React.Component {

  render() {
    return (
      <NameField {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.newRecipe.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewRecipeValidation: (value, field) => dispatch(updateNewRecipeValidation(value, field))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NameFieldContainer);
