import React from 'react';
import globalStyle from '../globalStyle'; // eslint-disable-line no-unused-vars
import RecipesListPage from './RecipesList/RecipesListPage';
import Header from './Header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RecipesListPage />
      </div>
    );
  }
}

export default App;
