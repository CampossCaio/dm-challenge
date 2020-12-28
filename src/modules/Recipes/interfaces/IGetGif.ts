export default interface IGetGif {
  getGif(title: string): Promise<string>;
}
