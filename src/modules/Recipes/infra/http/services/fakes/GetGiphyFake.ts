import IGetGif from '@modules/Recipes/interfaces/IGetGif';

class GiphyFake implements IGetGif {
  public async getGif(title: string): Promise<string> {
    return title;
  }
}
export default GiphyFake;
