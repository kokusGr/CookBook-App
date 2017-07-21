import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear';
import FormSection from './FormSection';
import Heading from '../common/Heading';
import Button from '../common/Button';
import FlexBox from '../common/FlexBox';
import Label from './Label';
import TextInput from './TextInput';
import ListItem from './ListItem';
import IconCircle from '../common/IconCircle';
import uniqueId from '../../utils/uniqueId';

const OrderedList = styled.ol`
  counter-reset: directions;
`;

class RecipeDirections extends React.Component {
  state = {
    newDirection: ''
  }

  handleClick = () => {
    const name = this.state.newDirection.trim();
    if (name.length > 0) {
      const directions = this.props.directions.slice('');
      const newDirection = {
        id: uniqueId(),
        name
      };
      directions.push(newDirection);
      this.props.addListItem(directions, 'directions');
      this.setState({
        newDirection: ''
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      newDirection: e.target.value
    });
  }

  render() {
    const { directions, proceed } = this.props;
    return (
      <FormSection>
        <Heading>Please Tell Us How You Did It</Heading>
        <Label hidden htmlFor="newDirection">Directions</Label>
        <FlexBox>
          <TextInput
            listInput
            value={this.state.newDirection}
            placeholder="First you have to smile!"
            id="newDirection"
            onChange={this.handleChange}
          />
          <Button
            noMargin add //eslint-disable-line
            onClick={this.handleClick}
          >+</Button>
        </FlexBox>
        <OrderedList>
          {directions.map(direction => (
            <ListItem direction key={direction.id}>
              <IconCircle leftCenter small>
                <MdClear />
              </IconCircle>
              {direction.name}
            </ListItem>
          ))}
        </OrderedList>
        <Button next primary onClick={proceed}>Proceed</Button>
      </FormSection>
    );
  }
}

RecipeDirections.propTypes = {
  directions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
  proceed: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired
};

export default RecipeDirections;
