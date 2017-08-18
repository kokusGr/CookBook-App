import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../AddRecipeForm/TextInput';
import uniqueId from '../../utils/uniqueId';
import FlexBox from '../common/FlexBox';
import Label from './Label';
import Button from '../common/Button';

class ListInput extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  state = {
    value: '',
  }

  handleChange = (e) => {
    this.setState({
      value: e.currentTarget.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();

    if (this.state.value.trim().length > 0) {
      const arr = Array.from(this.props.list);
      const newListItem = {
        id: uniqueId(),
        text: this.state.value.trim(),
      };

      arr.push(newListItem);
      this.props.handleClick(arr, this.props.name);
      this.setState({
        value: ''
      });
    }
  }

  handleKeyPress = (e) => {
    if (e.which === 13) {
      this.handleClick(e);
    }
  };

  render() {
    const {
      name,
      label
    } = this.props;
    return (
      <FlexBox>
        <Label hidden htmlFor={name}>
          {label}
        </Label>
        <TextInput
          listInput
          name={name}
          id={name}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <Button
          noMargin
          add
          onClick={this.handleClick}
        >
          Add
        </Button>
      </FlexBox>
    );
  }
}

export default ListInput;
