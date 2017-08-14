import React from 'react';
import { connect } from 'react-redux';

import DescriptionField from './DescriptionField';
import { updateNewRecipe } from '../../actionCreators/actions';

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
    updateNewRecipe: (value, field) => dispatch(updateNewRecipe(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionFieldContainer);
