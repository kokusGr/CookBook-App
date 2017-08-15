import React from 'react';
import PropTypes from 'prop-types';

import StyledForm from './FormSection';
import NameFieldContainer from './NameFieldContainer';
import DescriptionFieldContainer from './DescriptionFieldContainer';
import ImagesFieldContainer from './ImagesFieldContainer';
import IngridientsFieldContainer from './IngridientsFieldContainer';
import DirectionsFieldContainer from './DirectionsFieldContainer';
import AdditionalInfoFieldsContainer from './AdditionalInfoFieldContainer';
import TagFieldContainer from './TagFieldContainer';
import RecipePreviewContainer from './RecipePreviewContainer';
import Button from '../common/Button';

class AddRecipeForm extends React.Component {
  static propTypes = {
    stepNumber: PropTypes.number.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    finishEditing: PropTypes.func.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const f = this.props.isEditing ? this.props.finishEditing : this.props.nextStep;
    f();
  }

  render() {
    const {
      stepNumber,
    } = this.props;
    return (
      <div>
        <StyledForm onSubmit={this.handleSubmit}>
          {stepNumber === 0 && <NameFieldContainer />}
          {stepNumber === 1 && <DescriptionFieldContainer />}
          {stepNumber === 2 && <ImagesFieldContainer />}
          {stepNumber === 3 && <IngridientsFieldContainer />}
          {stepNumber === 4 && <DirectionsFieldContainer />}
          {stepNumber === 5 && <AdditionalInfoFieldsContainer />}
          {stepNumber === 6 && <TagFieldContainer />}
          {stepNumber === 7 && <RecipePreviewContainer />}

          {stepNumber < 7
          &&
          <Button
            next
            type="submit"
          >
            NEXT
          </Button>}

          {stepNumber > 0
          &&
          <Button
            next
            type="button"
            onClick={this.props.prevStep}
          >
            PREV
          </Button>}
        </StyledForm>
      </div>
    );
  }
}

export default AddRecipeForm;
