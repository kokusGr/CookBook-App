import * as actions from './actions';
import recipesApi from '../../tools/api/recipesApi';

export const loadAllRecipes = () => (dispatch) => {
  dispatch(actions.loadAllRecipesRequest());
  return recipesApi.getAllRecipes()
    .then(
      recipes => dispatch(actions.loadAllRecipesSuccess(recipes)),
      error => console.log('An error occured', error)
    );
};

export const saveRecipe = recipe => (dispatch) => {
  dispatch(actions.saveRecipeRequest());
  return recipesApi.saveRecipe(recipe)
    .then(
      response => dispatch(actions.saveRecipeSuccess(response)),
      error => console.log('An error occured', error)
    );
};
