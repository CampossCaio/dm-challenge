import { Router } from 'express';

import recipesRoutes from '@modules/Recipes/infra/http/routes/recipes.routes';

const routes = Router();

const introduction = {
  Message: 'Olá, bem vindo a resolução do DM-CHALLENGE :D',
  Challenge:
    'O desafio consistia em criar uma api de receitas utilizando alguns recursos públicos.',
  Route:
    'Você pode testar a aplicação acessando a rota /recipes e passando alguns ingredientes conforme o exemplo abaixo.',
  Example: '/recipes/?i=onion,tomato',
  Author: 'Caio Campos',
};

routes.get('/', (request, response) => {
  response.json(introduction);
});

routes.use('/recipes', recipesRoutes);

export default routes;
