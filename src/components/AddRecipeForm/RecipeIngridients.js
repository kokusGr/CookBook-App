import React from 'react';
import PropTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear';
import Button from '../common/Button';
import Label from './Label';
import TextInput from './TextInput';
import FlexBox from '../common/FlexBox';
import ListItem from './ListItem';
import Heading from '../common/Heading';
import IconCircle from '../common/IconCircle';
import uniqueId from '../../utils/uniqueId';

class RecipeIngridients extends React.Component {

  state = {
    ingridients: this.props.ingridients || [],
    newIngridient: ''
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ingridients !== nextProps.ingridients) {
      this.setState({
        ingridients: nextProps.ingridients
      });
    }
  }

  addNewIngridient = () => {
    const text = this.state.newIngridient.trim();
    if (text.length > 0) {
      const ingridients = this.state.ingridients.slice('');
      const newIngridient = {
        id: uniqueId(),
        text
      };
      ingridients.push(newIngridient);
      this.props.onSave(ingridients, 'ingridients');
      this.setState({
        newIngridient: ''
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      newIngridient: e.target.value
    });
  }

  deleteIngridient = (e) => {
    const newArr = this.state.ingridients
      .filter(ingridient => ingridient.id !== e.currentTarget.id);
    this.props.onSave(newArr, 'ingridients');
  }

  handleKeyPress = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      this.addNewIngridient();
    }
  }

  render() {
    const { ingridients } = this.state;
    return (
      <div>
        <Heading>Please Add Needed Ingridients</Heading>
        <FlexBox>
          <Label hidden htmlFor="ingridients">Ingridients</Label>
          <TextInput
            listInput
            placeholder="Potatoes... ?"
            id="newIngridient"
            value={this.state.newIngridient}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <Button
            noMargin add // eslint-disable-line
            id="newIngridient"
            onClick={this.addNewIngridient}
          >+</Button>
        </FlexBox>
        <ul>
          {ingridients.map(ingridient => (
            <ListItem key={ingridient.id}>
              <IconCircle leftCenter small id={ingridient.id} onClick={this.deleteIngridient}>
                <MdClear />
              </IconCircle>
              {ingridient.text}
            </ListItem>
          ))}
        </ul>
      </div>
    );
  }
}

RecipeIngridients.propTypes = {
  ingridients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  })),
  onSave: PropTypes.func.isRequired,
};

export default RecipeIngridients;
