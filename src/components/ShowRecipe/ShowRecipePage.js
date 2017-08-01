import React from 'react';
import PropTypes from 'prop-types';
import PageSection from '../common/PageSection';
import RecipeManager from './RecipeManager';

const ShowRecipePage = ({ match }) => (
  <PageSection>
    <RecipeManager id={match.params.id} />
  </PageSection>
);

ShowRecipePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default ShowRecipePage;
