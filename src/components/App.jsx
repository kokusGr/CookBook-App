import React from 'react';
import RecipesListPage from './RecipesList/RecipesListPage';
import Wrapper from './common/layout/Wrapper';

class App extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <RecipesListPage />
        </Wrapper>
      </div>
    );
  }
}

export default App;
