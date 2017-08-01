import React from 'react';
import Heading1 from '../common/Heading1';
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
        <Heading1>Recipes List Page</Heading1>
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
