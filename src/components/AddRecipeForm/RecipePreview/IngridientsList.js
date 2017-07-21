import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdEdit from 'react-icons/lib/md/edit';
import ListTitle from './ListTitle';
import Section from './Section';
import Button from '../../common/Button';
import ListItem from '../ListItem';

const List = styled.ul`
  padding-top: 1rem;
`;

const StyledIngridientList = styled.div`
  margin-top: 2rem;
`;

const IngridientsList = ({ ingridients }) => (
  <Section>
    <Button edit>
      <i><MdEdit /></i>
      <span>Edit</span>
    </Button>
    <StyledIngridientList>
      <ListTitle>Ingridients</ListTitle>
      <List>
        {ingridients.map(ingridient => (
          <ListItem key={ingridient.id}>
            {ingridient.name}
          </ListItem>
        ))}
      </List>
    </StyledIngridientList>
  </Section>
);

IngridientsList.propTypes = {
  ingridients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
};

export default IngridientsList;
