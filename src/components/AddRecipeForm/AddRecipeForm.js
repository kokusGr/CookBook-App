import React from 'react';
import PropTypes from 'prop-types';

import StyledForm from './FormSection';
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
        <StyledForm onSubmit={this.handleSubmit}>
          {stepNumber === 0 && <NameFieldContainer />}

          <input type="submit" value="Click me!" />
        </StyledForm>
      </div>
    );
  }
}

export default AddRecipeForm;
