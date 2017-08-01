import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumberInput from './NumberInput';
import Label from './Label';
import Heading2 from '../common/Heading2';

const StyledInfoForm = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

class RecipeAdditionalInfo extends React.Component {
  state = {
    kcal: this.props.kcal || '',
    servings: this.props.servings || ''
  }

  handleChange = (e) => {
    const field = e.currentTarget.id;
    const state = { ...this.state };
    state[field] = e.currentTarget.value;
    this.setState({
      ...state
    });
  }

  hanldeSubmit = (e) => {
    const field = e.currentTarget.id;
    const newValue = this.state[field];
    this.props.onSave(newValue, field);
  }

  render() {
    return (
      <div>
        <Heading2 formSection>Please Provide Additional Info</Heading2>
        <StyledInfoForm>
          <NumberInput id="kcal" value={this.state.kcal} onChange={this.handleChange} onBlur={this.hanldeSubmit} />
          <Label htmlFor="kcal">Kcal per 100g</Label>
        </StyledInfoForm>
        <StyledInfoForm>
          <NumberInput id="servings" value={this.state.servings} onChange={this.handleChange} onBlur={this.hanldeSubmit} />
          <Label htmlFor="servings">Number of servings</Label>
        </StyledInfoForm>
      </div>
    );
  }
}

RecipeAdditionalInfo.propTypes = {
  kcal: PropTypes.string,
  servings: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};

export default RecipeAdditionalInfo;
