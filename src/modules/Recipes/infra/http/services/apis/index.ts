import axios from 'axios';

const RecipePuppyApi = axios.create({
  baseURL: 'http://www.recipepuppy.com/api',
});

const GiphyApi = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
});

export { RecipePuppyApi, GiphyApi };
