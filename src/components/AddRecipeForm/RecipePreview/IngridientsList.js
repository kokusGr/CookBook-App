import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './Section';
import ListItem from '../ListItem';
import Heading3 from '../../common/Heading3';

const List = styled.ul`
  padding-top: 1rem;
`;

const StyledIngridientList = styled.div`
  margin-top: 3rem;
`;

const IngridientsList = ({ ingridients, editSection }) => (
  <Section editSection={editSection} id="ingridients">
    <StyledIngridientList>
      <Heading3>Ingridients</Heading3>
      {ingridients.length === 0 && <p>No ingridients!</p>}
      <List>
        {ingridients.map(ingridient => (
          <ListItem key={ingridient.id}>
            {ingridient.text}
          </ListItem>
        ))}
      </List>
    </StyledIngridientList>
  </Section>
);

IngridientsList.propTypes = {
  ingridients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
  editSection: PropTypes.func.isRequired
};

export default IngridientsList;
