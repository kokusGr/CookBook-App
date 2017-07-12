import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from '../common/layout/Wrapper';
import Button from '../common/style/Button';
import ImagePrewiev from './ImagePreview';
import FormSection from './FormSection';
import TextInput from './TextInput';
import ImageInput from './ImageInput';
import TextAreaInput from './TextAreaInput';

class AddRecipeFormPage extends React.Component {
  state = {
    currentQuestion: 0,
    inputs: ['name', 'desc', 'img', 'ingridients', 'directions', 'tags'],
    name: '',
    images: ['https://static.pexels.com/photos/381198/pexels-photo-381198.jpeg', 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg']
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
  render() {
    const currentQuestion = this.state.inputs[this.state.currentQuestion];
    let input;
    switch (currentQuestion) {
      case 'name':
        input = (
          <div>
            <h2>Please enter recipe name</h2>
            <TextInput placeholder="Chicken Kiev" value={this.state.name} onChange={this.handleChange} />
          </div>
        );
        break;
      case 'desc':
        input = (
          <div>
            <h2>Please enter short description</h2>
            <TextAreaInput placeholder="Crispy on the outside and tender inside. Just perfect way to serve a chicken!" />
          </div>
        );
        break;
      case 'img':
        input = (
          <div>
            <h2>Please insert recipe img</h2>
            <ImageInput onChange={this.addImage} />
            <ImagePrewiev images={this.state.images} />
          </div>
        );
        break;
      default:
        break;
    }
    return (
      <div>
        <Wrapper>
          <FormSection>
            {input}
            <Button
              bg={this.props.theme.colors.mainBlack}
              onClick={this.handleClick}
            >Proceed</Button>
          </FormSection>
        </Wrapper>
      </div>
    );
  }
}

AddRecipeFormPage.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      mainBlack: PropTypes.string
    })
  }).isRequired
};

export default withTheme(AddRecipeFormPage);
