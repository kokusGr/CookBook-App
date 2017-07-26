import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipePreview from './RecipePreview/RecipePreview';
import RecipeName from './RecipeName';
import RecipeImages from './RecipeImages';
import RecipeDescription from './RecipeDescription';
import RecipeIngridients from './RecipeIngridients';
import RecipeDirections from './RecipeDirections';
import RecipeAdditionalInfo from './RecipeAdditionalInfo';
import RecipeTags from './RecipeTags';
import * as actions from '../../actionCreators/actions';
import FormSection from './FormSection';
import getSteps from '../../constants/steps';

class FormManager extends React.Component {

  getForm = (currentStep) => {
    const form = this.formTable[currentStep];
    if (form) {
      return form();
    }
    return null;
  }

  formTable = {
    name: () => (
      <RecipeName
        name={this.props.newRecipe.name}
        onSave={this.props.updateNewRecipeConnect}
      />),
    description: () => (
      <RecipeDescription
        onSave={this.props.updateNewRecipeConnect}
        description={this.props.newRecipe.description}
      />),
    images: () => (
      <RecipeImages
        images={this.props.newRecipe.images}
        onSave={this.props.updateNewRecipeConnect}
      />),
    ingridients: () => (
      <RecipeIngridients
        ingridients={this.props.newRecipe.ingridients}
        onSave={this.props.updateNewRecipeConnect}
      />),
    directions: () => (
      <RecipeDirections
        directions={this.props.newRecipe.directions}
        onSave={this.props.updateNewRecipeConnect}
      />),
    info: () => (
      <RecipeAdditionalInfo
        kcal={this.props.newRecipe.kcal}
        servings={this.props.newRecipe.servings}
        onSave={this.props.updateNewRecipeConnect}
      />
    ),
    tags: () => (
      <RecipeTags
        tags={this.props.newRecipe.tags}
        onSave={this.props.updateNewRecipeConnect}
      />),
    preview: () => (
      <RecipePreview
        newRecipe={this.props.newRecipe}
        editSection={this.props.editSectionConnect}
      />)
  }

  finishEditing = () => {
    const preview = this.state.steps.findIndex(step => step === 'preview');
    this.setState({
      currentStepNum: preview
    });
  }

  editSection = (id) => {
    const section = this.state.steps.findIndex(step => step === id);
    this.setState({
      isEditing: true,
      currentStepNum: section
    });
  }

  updateList = (newArr, id) => {
    const state = Object.assign({}, { ...this.state });
    state[id] = newArr;
    this.setState({
      ...state
    });
  }

  handleChange = (e) => {
    const field = e.target.id;
    const state = Object.assign({}, { ...this.state });
    state[field] = e.target.value;
    this.setState({
      ...state
    });
  }

  render() {
    const { nextStepConnect, stepNumber, prevStepConnect, isEditing, finishEditing } = this.props;
    const steps = getSteps();
    const currentStep = steps[stepNumber];
    const form = this.getForm(currentStep);
    return (
      <div>
        <FormSection
          nextStep={nextStepConnect}
          prevStep={prevStepConnect}
          stepNumber={stepNumber}
          steps={steps}
          isEditing={isEditing}
          finishEditing={finishEditing}
        >
          {form}
        </FormSection>
      </div>
    );
  }
}

FormManager.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  nextStepConnect: PropTypes.func.isRequired,
  prevStepConnect: PropTypes.func.isRequired,
  newRecipe: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })),
    ingridients: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })),
    directions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })),
    kcal: PropTypes.string,
    servings: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    }))
  }).isRequired,
  updateNewRecipeConnect: PropTypes.func.isRequired,
  editSectionConnect: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  finishEditing: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    stepNumber: state.stepNumber,
    newRecipe: state.newRecipe,
    isEditing: state.isEditing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextStepConnect: () => dispatch(actions.nextStep()),
    prevStepConnect: () => dispatch(actions.prevStep()),
    updateNewRecipeConnect: (newValue, field) => dispatch(actions.updateNewRecipe(newValue, field)),
    editSectionConnect: stepNumber => dispatch(actions.editSection(stepNumber)),
    finishEditing: () => dispatch(actions.finishEditing())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormManager);
