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
    newDirection: ''
  }

  addNewDirection = () => {
    const name = this.state.newDirection.trim();
    if (name.length > 0) {
      const directions = this.props.directions.slice('');
      const newDirection = {
        id: uniqueId(),
        name
      };
      directions.push(newDirection);
      this.props.updateList(directions, 'directions');
      this.setState({
        newDirection: ''
      });
    }
  }

  deleteDirection = (e) => {
    const newArr = this.props.directions
      .filter(direction => direction.id !== e.currentTarget.id);
    this.props.updateList(newArr, 'directions');
  }

  handleChange = (e) => {
    this.setState({
      newDirection: e.target.value
    });
  }

  render() {
    const { directions } = this.props;
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
              {direction.name}
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
    name: PropTypes.string
  })).isRequired,
  updateList: PropTypes.func.isRequired,
};

export default RecipeDirections;
