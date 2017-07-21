import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdEdit from 'react-icons/lib/md/edit';
import ListTitle from './ListTitle';
import Button from '../../common/Button';
import Section from './Section';
import ListItem from '../ListItem';

const StyledDirectionsList = styled.div`
  margin-top: 2rem;
`;

const OrderedList = styled.ol`
  padding-top: 1rem;
  counter-reset: directions;
`;

const DirectionList = ({ directions }) => (
  <Section>
    <Button edit>
      <i><MdEdit /></i>
      <span>Edit</span>
    </Button>
    <StyledDirectionsList>
      <ListTitle>Directions</ListTitle>
      <OrderedList>
        {directions.map(direction => (
          <ListItem direction key={direction.id}>
            {direction.name}
          </ListItem>
        ))}
      </OrderedList>
    </StyledDirectionsList>
  </Section>
);

DirectionList.propTypes = {
  directions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
};

export default DirectionList;
