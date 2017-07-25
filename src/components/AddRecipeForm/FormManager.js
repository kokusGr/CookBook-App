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
import uniqueId from '../../utils/uniqueId';
import * as actions from '../../actionCreators/actions';
import FormSection from './FormSection';
import getSteps from '../../constants/steps';

class FormManager extends React.Component {
  state = {
    isEditing: false,
    ingridients: [{ name: 'Chicken breast', id: uniqueId() }, { name: 'Butter', id: uniqueId() }, { name: 'Bread crumbs', id: uniqueId() }, { name: 'Spinach', id: uniqueId() }],
    directions: [{ name: 'To sterilise jars, preheat oven to 140C/120C Fan/Gas 1. Wash 3 standard jam jars in hot, soapy water and rinse. Remove any rubber seals then heat in the oven for 30 mins.', id: uniqueId() }, { name: 'Blitz the peaches and lemon juice in a processor until smooth. Blend in the sugar, eggs and yolks.', id: uniqueId() }, { name: 'Melt the butter in a pan then whisk in the peach mixture. Heat on low for 30 mins, stirring with a wooden spoon – work the spoon over the bottom and corners of the pan to stop the mixture sticking. The curd is ready when it has thickened enough to coat the back of a spoon.', id: uniqueId() }, { name: 'Pour into the sterilised jars, seal, then store in the fridge for up to 2 weeks.', id: uniqueId() }],
    kcal: '342',
    servings: '2',
    tags: [{ name: '#chicken', id: uniqueId() }, { name: '#quick', id: uniqueId() }, { name: '#sunday_dinner', id: uniqueId() }, { name: '#chicken', id: uniqueId() }, { name: '#quick', id: uniqueId() }, { name: '#sunday_dinner', id: uniqueId() }],
  }

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
        updateList={this.updateList}
      />),
    ingridients: () => (
      <RecipeIngridients
        ingridients={this.state.ingridients}
        updateList={this.updateList}
      />),
    directions: () => (
      <RecipeDirections
        directions={this.state.directions}
        updateList={this.updateList}
      />),
    info: () => (
      <RecipeAdditionalInfo
        kcal={this.state.kcal}
        servings={this.state.servings}
        onChange={this.handleChange}
      />
    ),
    tags: () => (
      <RecipeTags
        tags={this.state.tags}
        updateList={this.updateList}
      />),
    preview: () => (
      <RecipePreview
        name={this.state.name}
        description={this.state.description}
        images={this.state.images}
        ingridients={this.state.ingridients}
        directions={this.state.directions}
        kcal={this.state.kcal}
        servings={this.state.servings}
        tags={this.state.tags}
        editSection={this.editSection}
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
    const { nextStepConnect, stepNumber, prevStepConnect } = this.props;
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
  }).isRequired,
  updateNewRecipeConnect: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    stepNumber: state.stepNumber,
    newRecipe: state.newRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextStepConnect: () => dispatch(actions.nextStep()),
    prevStepConnect: () => dispatch(actions.prevStep()),
    updateNewRecipeConnect: (newValue, field) => dispatch(actions.updateNewRecipe(newValue, field))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormManager);
