import IGetRecipes from '@modules/Recipes/interfaces/IGetRecipes';
import { RecipePuppyApi } from './apis';

interface IRecipe {
  title: string;
  href: string;
  ingredients: string;
}

interface IRecipeRequest {
  results: IRecipe[];
}

class RecipePuppy implements IGetRecipes {
  public async getRecipes(ingredients: string): Promise<IRecipe[]> {
    try {
      const response = await RecipePuppyApi.get<IRecipeRequest>('/', {
        params: {
          i: ingredients,
          p: 3,
        },
      });

      return response.data.results;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
export default RecipePuppy;
