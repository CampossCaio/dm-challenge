import convertStringToArray from '@shared/utils/convertStringToArray';
import { RecipePuppyApi, GiphyApi } from '../infra/http/services/apis';
import ICreateRecipeDTO from '../dtos/ICreateRecipeDTO';

interface IRecipe {
  title: string;
  href: string;
  ingredients: string;
}

interface IRecipeRequest {
  results: IRecipe[];
}

interface IRecipeList {
  keywords: string[];
  recipes: ICreateRecipeDTO[];
}

export default class CreateRecipeService {
  public async execute(ingredients: string): Promise<IRecipeList> {
    if (convertStringToArray(ingredients).length > 3) {
      throw new Error('The maximum allowed ingredients are 3');
    }

    try {
      const response = await RecipePuppyApi.get<IRecipeRequest>('/', {
        params: {
          i: ingredients,
          p: 3,
        },
      });

      const recipes = await Promise.all(
        response.data.results.map(
          async (recipe: IRecipe): Promise<ICreateRecipeDTO> => {
            const giphyResponse = await GiphyApi.get('/search', {
              params: {
                api_key: process.env.API_KEY,
                q: recipe.title,
                limit: 1,
              },
            });

            return {
              title: recipe.title,
              ingredients: convertStringToArray(recipe.ingredients),
              link: recipe.href,
              gif: giphyResponse.data.data[0].images.original.url,
            };
          },
        ),
      );

      return {
        keywords: ingredients.split(','),
        recipes,
      };
    } catch (err) {
      return err.message;
    }
  }
}
