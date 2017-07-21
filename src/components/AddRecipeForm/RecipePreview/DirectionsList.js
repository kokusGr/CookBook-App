import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListTitle from './ListTitle';
import Section from './Section';
import ListItem from '../ListItem';

const StyledDirectionsList = styled.div`
  margin-top: 3rem;
`;

const OrderedList = styled.ol`
  padding-top: 1rem;
  counter-reset: directions;
`;

const DirectionList = ({ directions, editSection }) => (
  <Section editSection={editSection} id="directions">
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
    name: PropTypes.string.isRequired
  })),
  editSection: PropTypes.func.isRequired
};

export default DirectionList;
