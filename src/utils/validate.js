import uniqueId from './uniqueId';

export const validateRecipe = (recipe) => {
  const recipeKeys = ['name', 'description', 'images', 'mainImage', 'ingridients', 'directions', 'kcal', 'servings', 'tags'];
  const errors = {};
  const addError = (field, error) => {
    if (errors[field] === undefined) {
      errors[field] = [error];
    } else {
      errors[field].push(error);
    }
  };

  if (!recipe) {
    addError('recipe', {
      id: uniqueId(),
      message: 'No recipe was submitted!',
    });
    return errors;
  }

  recipeKeys.map((key) => {
    if (!Reflect.has(recipe, key)) {
      addError('recipe', {
        id: uniqueId(),
        message: `Invalid recipe. Missing ${key}`,
      });
    }
    return key;
  });

  if (errors.length !== 0) {
    return errors;
  }

  if (recipe.name.trim().length < 3) {
    addError('name', {
      id: uniqueId(),
      message: 'Recipe name is too short!',
    });
  }

  if (recipe.description.trim().length < 1) {
    addError('description', {
      id: uniqueId(),
      message: 'Recipe description is required!',
    });
  }

  if (recipe.description.trim().length > 160) {
    addError('description', {
      id: uniqueId(),
      message: 'Recipe description is too long!',
    });
  }

  if (recipe.ingridients.length < 1) {
    addError('ingridients', {
      id: uniqueId(),
      message: 'At least 1 ingridient is required',
    });
  }

  if (recipe.directions.length < 1) {
    addError('directions', {
      id: uniqueId(),
      message: 'At least 1 direction is required',
    });
  }

  return errors;
};

export const validateStep = (stepNumber, recipe) => {
  const errors = {};
  const addError = (field, error) => {
    if (errors[field] === undefined) {
      errors[field] = [error];
    } else {
      errors[field].push(error);
    }
  };

  if (stepNumber === 3) {
    if (recipe.ingridients.length < 1) {
      addError('ingridients', {
        id: uniqueId(),
        message: 'Recipe needs at least 1 ingridient',
      });
    }
  }

  if (stepNumber === 4) {
    if (recipe.directions.length < 1) {
      addError('directions', {
        id: uniqueId(),
        message: 'Recipe needs at least 1 direction',
      });
    }
  }

  return errors;
};
