import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdClear from 'react-icons/lib/md/clear';

import ListItem from './ListItem';
import IconCircle from '../common/IconCircle';

const OrderedList = styled.ol`
  counter-reset: ${props => props.counter};
`;

class List extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    ).isRequired,
    type: PropTypes.string.isRequired,
    counter: PropTypes.string,
    handleUpdate: PropTypes.func,
    name: PropTypes.string.isRequired,
    isEditable: PropTypes.bool,
  }

  deleteListItem = (id) => {
    const newArr = this.props.list
      .filter(li => li.id !== id);
    this.props.handleUpdate(newArr, this.props.name);
  }

  render() {
    const {
      list,
      type,
      counter,
      isEditable,
    } = this.props;
    const listNodes = list.map(item => (
      <ListItem key={item.id} direction={this.props.name === 'directions'}>
        {isEditable
          &&
          <IconCircle
            leftCenter
            small
            onClick={() => this.deleteListItem(item.id)}
          >
            <MdClear />
          </IconCircle>}
        {item.text}
      </ListItem>
    ));

    if (type === 'ol') {
      return (
        <OrderedList counter={counter}>
          { listNodes }
        </OrderedList>
      );
    } else if (type === 'ul') {
      return (
        <ul>
          { listNodes }
        </ul>
      );
    }

    return <p>List type is not specified.</p>;
  }
}

export default List;
