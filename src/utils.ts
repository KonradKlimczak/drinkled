import { Cocktail } from './types';

export const filterName = (cocktail: Cocktail, name: string) => {
  if (!name) {
    return true;
  }

  return cocktail.name.includes(name);
};

export const filterIngredients = (
  cocktail: Cocktail,
  ingredients: string[]
) => {
  if (ingredients.length === 0) {
    return true;
  }

  const cocktailIngredients = cocktail.recipe.reduce(
    (cocktailIngredients, step) => {
      return [...cocktailIngredients, step.ingredients.map((i) => i.name)];
    },
    []
  );
  return cocktailIngredients.some((cocktailIngredient) =>
    ingredients.includes(cocktailIngredient)
  );
};
