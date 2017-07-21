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
    images: [
      { src: 'https://static.pexels.com/photos/381198/pexels-photo-381198.jpeg', id: uniqueId() },
      { src: 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg', id: uniqueId() }
    ],
    ingridients: [{ name: 'Chicken breast', id: uniqueId() }, { name: 'Butter', id: uniqueId() }, { name: 'Bread crumbs', id: uniqueId() }, { name: 'Spinach', id: uniqueId() }],
    directions: [{ name: 'To sterilise jars, preheat oven to 140C/120C Fan/Gas 1. Wash 3 standard jam jars in hot, soapy water and rinse. Remove any rubber seals then heat in the oven for 30 mins.', id: uniqueId() }, { name: 'Blitz the peaches and lemon juice in a processor until smooth. Blend in the sugar, eggs and yolks.', id: uniqueId() }, { name: 'Melt the butter in a pan then whisk in the peach mixture. Heat on low for 30 mins, stirring with a wooden spoon – work the spoon over the bottom and corners of the pan to stop the mixture sticking. The curd is ready when it has thickened enough to coat the back of a spoon.', id: uniqueId() }, { name: 'Pour into the sterilised jars, seal, then store in the fridge for up to 2 weeks.', id: uniqueId() }],
    kcal: '',
    servings: '',
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
        updateList={this.updateList}
      />),
    ingridients: () => (
      <RecipeIngridients
        ingridients={this.state.ingridients}
        proceed={this.handleClick}
        updateList={this.updateList}
      />),
    directions: () => (
      <RecipeDirections
        directions={this.state.directions}
        updateList={this.updateList}
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
      />)
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
