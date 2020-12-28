import IGetGif from '@modules/Recipes/interfaces/IGetGif';
import { GiphyApi } from './apis';

class Giphy implements IGetGif {
  public async getGif(title: string): Promise<string> {
    try {
      const response = await GiphyApi.get('/search', {
        params: {
          api_key: process.env.API_KEY,
          q: title,
          limit: 1,
        },
      });

      return response.data.data[0].images.original.url;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
export default Giphy;
