import React from 'react';
import Heading from '../common/style/Heading';
import TopBox from './TopBox';
import Button from '../common/style/Button';
import Wrapper from '../common/layout/Wrapper';
import PageSection from '../common/style/PageSection';
import RecipesList from './RecipesList';

const RecipesListPage = () => (
  <div>
    <TopBox>
      <Wrapper>
        <Button>Add Recipe</Button>
        <Heading float="right">Recipes List Page</Heading>
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
