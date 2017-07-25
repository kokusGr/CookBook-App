import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Label from './Label';
import Heading from '../common/Heading';

class RecipeName extends React.Component {
  state = {
    name: this.props.name || ''
  }

  handleChange = (e) => {
    const val = e.currentTarget.value.trim();
    this.setState({
      name: val
    });
  }

  handleSubmit = () => {
    this.props.onSave(this.state.name, 'name');
  }
  render() {
    return (
      <div>
        <Heading>Please Name Your Recipes</Heading>
        <Label hidden htmlFor="name">Recipe Name</Label>
        <TextInput primary id="name" placeholder="Chicken Kiev" value={this.state.name} onChange={this.handleChange} onBlur={this.handleSubmit} />
      </div>
    );
  }
}

RecipeName.propTypes = {
  onSave: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default RecipeName;
