import IGetRecipes from '@modules/Recipes/interfaces/IGetRecipes';

interface IRecipe {
  title: string;
  href: string;
  ingredients: string;
}

const recipes: IRecipe[] = [
  {
    title: 'Snowman Chocolate Mint Cupcakes Recipe',
    href:
      'http://www.grouprecipes.com/82379/snowman-chocolate-mint-cupcakes.html',
    ingredients: 'chocolate, orange, cookies',
  },
  {
    title: 'Harvest Moon Lollipops',
    href:
      'http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=347711',
    ingredients: 'chocolate, orange, cake, icing',
  },
];

class RecipePuppyFake implements IGetRecipes {
  public async getRecipes(ingredients: string): Promise<IRecipe[]> {
    return recipes;
  }
}
export default RecipePuppyFake;
