import React from 'react';
import Heading from '../common/Heading';
import TopBox from './TopBox';
import Button from '../common/Button';
import Wrapper from '../common/Wrapper';
import PageSection from '../common/PageSection';
import RecipesList from './RecipesList';

const RecipesListPage = () => (
  <div>
    <TopBox>
      <Wrapper>
        <Button noMargin>Add Recipe</Button>
        <Heading float="right" noMargin>Recipes List Page</Heading>
      </Wrapper>
    </TopBox>
    <PageSection>
      <Wrapper>
        <RecipesList />
      </Wrapper>
    </PageSection>
  </div>
);

export default RecipesListPage;
