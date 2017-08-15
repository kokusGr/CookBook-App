import React from 'react';
import { connect } from 'react-redux';

import RecipePreview from '../AddRecipeForm/RecipePreview/RecipePreview';
import { editSection, } from '../../actionCreators/actions';
import { saveRecipe, } from '../../actionCreators/thunks';

class RecipePreviewContainer extends React.Component {

  render() {
    return (
      <RecipePreview {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    newRecipe: state.newRecipe,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editSection: stepNumber => dispatch(editSection(stepNumber)),
    saveRecipe: recipe => dispatch(saveRecipe(recipe)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePreviewContainer);
