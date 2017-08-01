import axios from 'axios';

class RecipesApi {
  static getAllRecipes() {
    return new Promise((resolve, reject) => {
      axios.get('/api/recipes')
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  static saveRecipe(recipe) {
    return new Promise((resolve, reject) => {
      axios.post('/api/recipes', recipe)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }
}

export default RecipesApi;
