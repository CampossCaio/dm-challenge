import convertStringToArray from '../../../shared/utils/convertStringToArray';
import ICreateRecipeDTO from '../dtos/ICreateRecipeDTO';
import RecipePuppy from '../infra/http/services/GetRecipePuppy';
import Giphy from '../infra/http/services/GetGiphy';

interface IRecipe {
  title: string;
  href: string;
  ingredients: string;
}

interface IRecipeList {
  keywords: string[];
  recipes: ICreateRecipeDTO[];
}

export default class CreateRecipeService {
  constructor(private giphy: Giphy, private recipePuppy: RecipePuppy) {}

  public async execute(ingredients: string): Promise<IRecipeList> {
    if (convertStringToArray(ingredients).length > 3) {
      throw new Error('The maximum allowed ingredients are 3');
    }

    const recipesPuppy = await this.recipePuppy.getRecipes(ingredients);

    const recipes = await Promise.all(
      recipesPuppy.map(
        async (recipe: IRecipe): Promise<ICreateRecipeDTO> => {
          const giphy = await this.giphy.getGif(recipe.title);

          return {
            title: recipe.title,
            ingredients: convertStringToArray(recipe.ingredients),
            link: recipe.href,
            gif: giphy,
          };
        },
      ),
    );

    return {
      keywords: convertStringToArray(ingredients),
      recipes,
    };
  }
}
