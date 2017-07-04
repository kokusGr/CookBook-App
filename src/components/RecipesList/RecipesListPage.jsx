import React from 'react';
import Header from '../common/style/Header';
import TopBox from './TopBox';
import Button from '../common/style/Button';
import RecipesList from './RecipesList';

const RecipesListPage = () => (
  <div>
    <TopBox>
      <Button>Add Recipe</Button>
      <Header float="right">Recipes List Page</Header>
    </TopBox>
    <hr />
    <RecipesList />
  </div>
);

export default RecipesListPage;
