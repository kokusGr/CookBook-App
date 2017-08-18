import React from 'react';
import { connect } from 'react-redux';

import { updateNewRecipeValidation } from '../../actionCreators/thunks';
import TagsField from './TagsField';

class TagsFieldContainer extends React.Component {
  static propTypes = {}

  render() {
    return (
      <TagsField {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    tags: state.newRecipe.tags,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewRecipeValidation: (value, field) => dispatch(updateNewRecipeValidation(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsFieldContainer);
