import React from 'react';
import PropTypes from 'prop-types';
import Heading2 from '../common/Heading2';
import TextInput from './TextInput';
import Label from './Label';

class RecipeDescription extends React.Component {
  state = {
    description: this.props.description || ''
  }

  handleChange = (e) => {
    const val = e.currentTarget.value;
    this.setState({
      description: val
    });
  }

  handleSubmit = () => {
    this.props.onSave(this.state.description, 'description');
  }

  render() {
    return (
      <div>
        <Heading2 formSection>Please Provide Short Description</Heading2>
        <Label hidden htmlFor="description">Recipe Description</Label>
        <TextInput box id="description" placeholder="This is the best dish I have ever tasted!" value={this.state.description} onChange={this.handleChange} onBlur={this.handleSubmit} />
      </div>
    );
  }
}

RecipeDescription.propTypes = {
  description: PropTypes.string,
  onSave: PropTypes.func.isRequired
};

export default RecipeDescription;
