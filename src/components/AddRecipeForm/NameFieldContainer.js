import React from 'react';
import { connect } from 'react-redux';

import NameField from './NameField';
import { updateNewRecipe } from '../../actionCreators/actions';

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
    updateNewRecipe: (value, field) => dispatch(updateNewRecipe(value, field))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NameFieldContainer);
