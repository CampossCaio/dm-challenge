import GetGiphyFake from '../infra/http/services/fakes/GetGiphyFake';
import GetRecipePuppyFake from '../infra/http/services/fakes/GetRecipePuppyFake';
import ListRecipesService from './ListRecipesService';

describe('ListRecipes', () => {
  it('should not be allowed to pass more than 3 ingredients', async () => {
    const gitphyFake = new GetGiphyFake();
    const recipePuppyFake = new GetRecipePuppyFake();
    const listRecipesServices = new ListRecipesService(
      gitphyFake,
      recipePuppyFake,
    );

    const ingredients = 'tomato, orange, watermelon, grape';

    await expect(
      listRecipesServices.execute(ingredients),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to list recipes', async () => {
    const gitphyFake = new GetGiphyFake();
    const recipePuppyFake = new GetRecipePuppyFake();
    const listRecipesServices = new ListRecipesService(
      gitphyFake,
      recipePuppyFake,
    );

    const ingredients = 'tomato, orange';

    const recipes = await listRecipesServices.execute(ingredients);

    expect(recipes).toEqual({
      keywords: ['orange', 'tomato'],
      recipes: [
        {
          title: 'Snowman Chocolate Mint Cupcakes Recipe',
          link:
            'http://www.grouprecipes.com/82379/snowman-chocolate-mint-cupcakes.html',
          ingredients: ['chocolate', 'cookies', 'orange'],
          gif: 'Snowman Chocolate Mint Cupcakes Recipe',
        },
        {
          title: 'Harvest Moon Lollipops',
          link:
            'http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=347711',
          ingredients: ['cake', 'chocolate', 'icing', 'orange'],
          gif: 'Harvest Moon Lollipops',
        },
      ],
    });
  });
});
