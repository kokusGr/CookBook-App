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
import Message from '../common/Message';

class AddRecipeForm extends React.Component {
  static propTypes = {
    stepNumber: PropTypes.number.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    newRecipe: PropTypes.shape({}).isRequired,
    formErrors: PropTypes.shape({}).isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.nextStep(this.props.stepNumber, this.props.newRecipe);
  }

  render() {
    const {
      stepNumber,
      isEditing,
      formErrors,
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

          <div>
            {Object.keys(formErrors).length >= 1
            &&
            Object.values(formErrors)
              .map(key => key
                .map(error => <Message key={error.id}>{error.message}</Message>))}
          </div>

          {stepNumber < 7
          &&
          <Button
            next
            type="submit"
          >
            {isEditing ? 'Save Changes' : 'NEXT'}
          </Button>}

          {stepNumber > 0 && !isEditing
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
