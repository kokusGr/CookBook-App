import React from 'react';
import TextInput, { AddInput } from './TextInput';
import ImageInput from './ImageInput';
import TextAreaInput from './TextAreaInput';
import Columns from '../common/Columns';
import Heading from '../common/Heading';
import ImagePrewiev from './ImagePreview';
import FormSection from './FormSection';

class FormManager extends React.Component {
  state = {
    currentQuestion: 0,
    inputs: ['name', 'desc', 'img', 'ingridients', 'directions', 'tags'],
    name: '',
    images: ['https://static.pexels.com/photos/381198/pexels-photo-381198.jpeg', 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg'],
    ingridients: ['chicken breast']
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1
    }));
  }

  addImage = (e) => {
    const newImg = e.target.files[0];
    const images = this.state.images.slice('');
    images.push(window.URL.createObjectURL(newImg));
    this.setState({
      images
    });
  }

  renderForm = (currentQuestion) => {
    let input;
    switch (currentQuestion) {
      case 'name':
        input = (
          <div>
            <Heading>Please Enter Recipe Name</Heading>
            <TextInput primary placeholder="Chicken Kiev" value={this.state.name} onChange={this.handleChange} />
          </div>
        );
        break;
      case 'desc':
        input = (
          <div>
            <Heading>Please Enter Short Description</Heading>
            <TextAreaInput placeholder="Crispy on the outside and tender inside. Just perfect way to serve a chicken!" />
          </div>
        );
        break;
      case 'img':
        input = (
          <div>
            <Heading>Please Insert Recipe Img</Heading>
            <ImageInput onChange={this.addImage} />
            <ImagePrewiev images={this.state.images} />
          </div>
        );
        break;
      case 'ingridients':
        input = (
          <div>
            <Heading>Please Add Ingridients</Heading>
            <div>
              <AddInput placeholder="add New Ingridient" />
              <AddButton>Add</AddButton>
            </div>
            <Columns cols="2">
              <div>
                <TextInput inline placeholder="ingridient" />
                <i>X</i>
                <i>E</i>
              </div>
              <div>
                <TextInput inline placeholder="ingridient" />
                <i>X</i>
                <i>E</i>
              </div>
              <div>
                <TextInput inline placeholder="ingridient" />
                <i>X</i>
                <i>E</i>
              </div>
              <div>
                <TextInput inline placeholder="ingridient" />
                <i>X</i>
                <i>E</i>
              </div>
            </Columns>
          </div>
        );
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <FormSection />
    );
  }
}

export default FormManager;
