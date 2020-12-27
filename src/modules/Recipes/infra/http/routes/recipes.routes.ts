import { Router } from 'express';

import RecipesController from '../controllers/RecipesController';

const recipesController = new RecipesController();

const recipeRoutes = Router();

recipeRoutes.get('/', recipesController.index);

export default recipeRoutes;
