import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from '../theme';
import globalStyle from '../globalStyle'; // eslint-disable-line no-unused-vars
import RecipesListPage from './RecipesList/RecipesListPage';
import Header from './Header/Header';
import AddRecipeFormPage from './AddRecipeForm/AddRecipeFormPage';
import ShowRecipePage from './ShowRecipe/ShowRecipePage';
import HomePage from './HomePage/HomePage';

const App = () =>
  (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/recipes/new" component={AddRecipeFormPage} />
            <Route path="/recipes/:id" component={ShowRecipePage} />
            <Route path="/recipes" component={RecipesListPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );

export default App;
