import React from 'react';
import { connect } from 'react-redux';

import DescriptionField from './DescriptionField';
import { updateNewRecipeValidation } from '../../actionCreators/thunks';

class DescriptionFieldContainer extends React.Component {

  render() {
    return (
      <DescriptionField {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    description: state.newRecipe.description,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewRecipeValidation: (value, field) => dispatch(updateNewRecipeValidation(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionFieldContainer);
