import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import globalStyle from '../globalStyle'; // eslint-disable-line no-unused-vars
import RecipesListPage from './RecipesList/RecipesListPage';
import Header from './Header/Header';
import AddRecipeFormPage from './AddRecipeForm/AddRecipeFormPage';

const App = () =>
  (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <RecipesListPage />
        {/* <AddRecipeFormPage /> */}
      </div>
    </ThemeProvider>
  );

export default App;
