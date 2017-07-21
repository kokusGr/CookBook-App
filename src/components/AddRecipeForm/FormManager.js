import React from 'react';
import RecipePreview from './RecipePreview/RecipePreview';
import RecipeName from './RecipeName';
import RecipeImages from './RecipeImages';
import RecipeDescription from './RecipeDescription';
import RecipeIngridients from './RecipeIngridients';
import RecipeDirections from './RecipeDirections';
import RecipeAdditionalInfo from './RecipeAdditionalInfo';
import RecipeTags from './RecipeTags';
import uniqueId from '../../utils/uniqueId';

class FormManager extends React.Component {
  state = {
    currentStepNum: 0,
    steps: ['name', 'description', 'img', 'ingridients', 'directions', 'info', 'tags', 'preview'],
    name: '',
    description: '',
    images: [],
    ingridients: [],
    directions: [],
    newDirection: '',
    kcal: '',
    servings: '',
    tags: [],
    newTag: ''
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
        proceed={this.handleClick}
        value={this.state.name}
        onChange={this.handleChange}
      />),
    description: () => (
      <RecipeDescription
        proceed={this.handleClick}
        onChange={this.handleChange}
        value={this.state.description}
      />),
    img: () => (
      <RecipeImages
        images={this.state.images}
        onChange={this.addImage}
        proceed={this.handleClick}
      />),
    ingridients: () => (
      <RecipeIngridients
        ingridients={this.state.ingridients}
        proceed={this.handleClick}
        addListItem={this.addListItem}
      />),
    directions: () => (
      <RecipeDirections
        directions={this.state.directions}
        addListItem={this.addListItem}
        proceed={this.handleClick}
      />),
    info: () => (
      <RecipeAdditionalInfo
        kcal={this.state.kcal}
        servings={this.state.servings}
        onChange={this.handleChange}
        proceed={this.handleClick}
      />
    ),
    tags: () => (
      <RecipeTags
        tags={this.state.tags}
        proceed={this.handleClick}
        addListItem={this.addListItem}
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
      />)
  }

  deleteListItem = (index, listName) => {
    const state = Object.assign({}, { ...this.state });
    state[listName].splice(index, 1);
    this.setState({
      ...state
    });
  }

  addListItem = (newArr, id) => {
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

  handleClick = () => {
    this.setState(prevState => ({
      currentStepNum: prevState.currentStepNum + 1
    }));
  }

  addImage = (e) => {
    const srcFile = e.target.files[0];
    const src = window.URL.createObjectURL(srcFile);
    const newImg = {
      id: uniqueId(),
      src
    };
    const images = this.state.images.slice('');
    images.push(newImg);
    this.setState({
      images
    });
  }

  render() {
    const currentStep = this.state.steps[this.state.currentStepNum];
    const form = this.getForm(currentStep);
    return (
      <div>
        {form}
      </div>
    );
  }
}

export default FormManager;
