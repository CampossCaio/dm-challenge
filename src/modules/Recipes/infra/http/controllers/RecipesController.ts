import { Request, Response } from 'express';
import CreateRecipesService from '@modules/Recipes/services/CreateRecipeService';

interface IIngredients {
  i: string;
}

export default class RecipeController {
  public async index(
    request: Request<unknown, unknown, unknown, IIngredients>,
    response: Response,
  ): Promise<Response> {
    const createRecipesServices = new CreateRecipesService();
    const { i } = request.query;

    try {
      const recipes = await createRecipesServices.execute(i);
      return response.json(recipes);
    } catch (err) {
      return response.json(err.message);
    }
  }
}
