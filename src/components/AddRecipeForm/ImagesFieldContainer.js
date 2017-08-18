import React from 'react';
import { connect } from 'react-redux';

import { selectMainImage, } from '../../actionCreators/actions';
import { updateNewRecipeValidation } from '../../actionCreators/thunks';
import ImagesField from './ImagesField';

class ImagesFieldContainer extends React.Component {

  render() {
    return (
      <ImagesField {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.newRecipe.images,
    mainImage: state.newRecipe.mainImage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectMainImage: clickedImage => dispatch(selectMainImage(clickedImage)),
    updateNewRecipeValidation: (value, field) => dispatch(updateNewRecipeValidation(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesFieldContainer);
