import axios from 'axios';

class RecipesApi {
  static getAllRecipes() {
    return new Promise((resolve, reject) => {
      axios.get('api/recipes')
        .then(response => resolve(response.data))
        .catch(error => console.log(error));
    });
  }
}

export default RecipesApi;
