interface IRecipe {
  title: string;
  href: string;
  ingredients: string;
}

export default interface IGetRecipes {
  getRecipes(ingredients: string): Promise<IRecipe[]>;
}
