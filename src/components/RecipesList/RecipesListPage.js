import React from 'react';
import Heading from '../common/Heading';
import TopBox from './TopBox';
import Button from '../common/Button';
import Wrapper from '../common/Wrapper';
import PageSection from '../common/PageSection';
import RecipesListManager from './RecipesListManager';

const RecipesListPage = () => (
  <div>
    <TopBox>
      <Wrapper>
        <Button noMargin>Add Recipe</Button>
        <Heading float="right" noMargin orange>Recipes List Page</Heading>
      </Wrapper>
    </TopBox>
    <PageSection>
      <Wrapper>
        <RecipesListManager />
      </Wrapper>
    </PageSection>
  </div>
);

export default RecipesListPage;
