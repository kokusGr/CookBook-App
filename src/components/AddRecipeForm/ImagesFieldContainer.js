import React from 'react';
import { connect } from 'react-redux';

import { selectMainImage, updateNewRecipe } from '../../actionCreators/actions';
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
    updateNewRecipe: (value, field) => dispatch(updateNewRecipe(value, field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesFieldContainer);
