import React from 'react';
import PropTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear';
import FlexBox from '../common/FlexBox';
import TextInput from './TextInput';
import Button from '../common/Button';
import TagContainer from './TagContainer';
import Label from './Label';
import Heading from '../common/Heading';
import IconCircle from '../common/IconCircle';
import uniqueId from '../../utils/uniqueId';

class RecipeTags extends React.Component {
  state = {
    tags: this.props.tags || [],
    newTag: ''
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tags !== nextProps.tags) {
      this.setState({
        tags: nextProps.tags
      });
    }
  }

  addNewTag = () => {
    const text = this.state.newTag.trim();
    if (text.length > 0) {
      const tags = this.state.tags.slice('');
      const newTag = {
        id: uniqueId(),
        text
      };
      tags.push(newTag);
      this.props.onSave(tags, 'tags');
      this.setState({
        newTag: ''
      });
    }
  }

  deleteTag = (e) => {
    const newArr = this.state.tags.filter(tag => tag.id !== e.currentTarget.id);
    this.props.onSave(newArr, 'tags');
  }

  handleKeyPress = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      this.addNewTag();
    }
  }

  handleChange = (e) => {
    this.setState({
      newTag: e.target.value
    });
  }

  render() {
    const { tags } = this.state;
    return (
      <div>
        <Heading>Please Add Tags</Heading>
        <FlexBox>
          <Label hidden htmlFor="newTag">Ingridients</Label>
          <TextInput
            listInput
            placeholder="#Awesome!"
            id="newTag"
            value={this.state.newTag}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <Button
            noMargin add // eslint-disable-line
            onClick={this.addNewTag}
          >+</Button>
        </FlexBox>
        <ul>
          {tags.map(tag => (
            <TagContainer key={tag.id} tag={tag.text}>
              <IconCircle topCenter small id={tag.id} onClick={this.deleteTag}>
                <MdClear />
              </IconCircle>
            </TagContainer>
          ))}
        </ul>
      </div>
    );
  }
}

RecipeTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })),
  onSave: PropTypes.func.isRequired,
};

export default RecipeTags;
