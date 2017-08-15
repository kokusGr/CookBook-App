import React from 'react';
import { connect } from 'react-redux';

import { updateNewRecipe } from '../../actionCreators/actions';
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
    updateNewRecipe: (value, field) => dispatch(updateNewRecipe(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsFieldContainer);
