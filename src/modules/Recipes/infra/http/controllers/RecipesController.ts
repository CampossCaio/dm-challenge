import { Request, Response } from 'express';
import ListRecipesService from '@modules/Recipes/services/ListRecipesService';
import Giphy from '../services/GetGiphy';
import RecipePuppy from '../services/GetRecipePuppy';

interface IIngredients {
  i: string;
}

export default class RecipeController {
  public async index(
    request: Request<unknown, unknown, unknown, IIngredients>,
    response: Response,
  ): Promise<Response> {
    const giphy = new Giphy();
    const recipePuppy = new RecipePuppy();

    const listRecipesServices = new ListRecipesService(giphy, recipePuppy);
    const { i } = request.query;

    try {
      const recipes = await listRecipesServices.execute(i);
      return response.json(recipes);
    } catch (err) {
      return response.json(err.message);
    }
  }
}
