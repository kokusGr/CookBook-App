import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear';
import Button from '../common/Button';
import FlexBox from '../common/FlexBox';
import Label from './Label';
import TextInput from './TextInput';
import ListItem from './ListItem';
import Heading from '../common/Heading';
import IconCircle from '../common/IconCircle';
import uniqueId from '../../utils/uniqueId';

const OrderedList = styled.ol`
  counter-reset: directions;
`;

class RecipeDirections extends React.Component {
  state = {
    directions: this.props.directions || [],
    newDirection: ''
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.directions !== nextProps.directions) {
      this.setState({
        directions: nextProps.directions
      });
    }
  }

  addNewDirection = () => {
    const text = this.state.newDirection.trim();
    if (text.length > 0) {
      const directions = this.state.directions.slice('');
      const newDirection = {
        id: uniqueId(),
        text
      };
      directions.push(newDirection);
      this.props.onSave(directions, 'directions');
      this.setState({
        newDirection: ''
      });
    }
  }

  deleteDirection = (e) => {
    const newArr = this.state.directions
      .filter(direction => direction.id !== e.currentTarget.id);
    this.props.onSave(newArr, 'directions');
  }

  handleKeyPress = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      this.addNewDirection();
    }
  }

  handleChange = (e) => {
    this.setState({
      newDirection: e.target.value
    });
  }

  render() {
    const { directions } = this.state;
    return (
      <div>
        <Heading>Please Tell Us How You Did It</Heading>
        <Label hidden htmlFor="newDirection">Directions</Label>
        <FlexBox>
          <TextInput
            listInput
            value={this.state.newDirection}
            placeholder="First you have to smile!"
            id="newDirection"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <Button
            noMargin add //eslint-disable-line
            onClick={this.addNewDirection}
          >+</Button>
        </FlexBox>
        <OrderedList>
          {directions.map(direction => (
            <ListItem direction key={direction.id}>
              <IconCircle leftCenter small id={direction.id} onClick={this.deleteDirection}>
                <MdClear />
              </IconCircle>
              {direction.text}
            </ListItem>
          ))}
        </OrderedList>
      </div>
    );
  }
}

RecipeDirections.propTypes = {
  directions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  })),
  onSave: PropTypes.func.isRequired,
};

export default RecipeDirections;
