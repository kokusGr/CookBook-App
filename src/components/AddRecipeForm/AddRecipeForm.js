import React from 'react';
import PropTypes from 'prop-types';

import NameFieldContainer from './NameFieldContainer';

class AddRecipeForm extends React.Component {
  static propTypes = {
    stepNumber: PropTypes.number.isRequired,
    nextStep: PropTypes.func.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const {
      stepNumber,
    } = this.props;
    return (
      <div>
        <h1>Hello</h1>
        <form onSubmit={this.handleSubmit}>
          {stepNumber === 0 && <NameFieldContainer />}

          <input type="submit" value="Click me!" />
        </form>
      </div>
    );
  }
}

export default AddRecipeForm;
