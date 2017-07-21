import React from 'react';
import PropTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear';
import FormSection from './FormSection';
import Heading from '../common/Heading';
import Button from '../common/Button';
import Label from './Label';
import TextInput from './TextInput';
import FlexBox from '../common/FlexBox';
import ListItem from './ListItem';
import IconCircle from '../common/IconCircle';
import uniqueId from '../../utils/uniqueId';

class RecipeIngridients extends React.Component {

  state = {
    newIngridient: ''
  }

  handleClick = () => {
    const name = this.state.newIngridient.trim();
    if (name.length > 0) {
      const ingridients = this.props.ingridients.slice('');
      const newIngridient = {
        id: uniqueId(),
        name
      };
      ingridients.push(newIngridient);
      this.props.addListItem(ingridients, 'ingridients');
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

  render() {
    const { ingridients, proceed } = this.props;
    return (
      <FormSection>
        <Heading>Please Add Needed Ingridients</Heading>
        <FlexBox>
          <Label hidden htmlFor="ingridients">Ingridients</Label>
          <TextInput
            listInput
            placeholder="Potatoes... ?"
            id="newIngridient"
            value={this.state.newIngridient}
            onChange={this.handleChange}
          />
          <Button
            noMargin add // eslint-disable-line
            id="newIngridient"
            onClick={this.handleClick}
          >+</Button>
        </FlexBox>
        <ul>
          {ingridients.map(ingridient => (
            <ListItem key={ingridient.id}>
              <IconCircle leftCenter small>
                <MdClear />
              </IconCircle>
              {ingridient.name}
            </ListItem>
          ))}
        </ul>
        <Button next primary onClick={proceed}>Proceed</Button>
      </FormSection>
    );
  }
}

RecipeIngridients.propTypes = {
  ingridients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
  proceed: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired
};

export default RecipeIngridients;
