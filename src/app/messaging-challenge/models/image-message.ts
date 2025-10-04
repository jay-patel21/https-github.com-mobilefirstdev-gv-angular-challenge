import {Message} from './message';

export class ImageMessage extends Message {

  constructor(
    public readonly from: string,
    public readonly profilePictureUrl: string,
    public readonly content: string // For simplicity, this is just a string url to the image in the assets folder
  ) {
    super(from, profilePictureUrl, content);
  }

}
