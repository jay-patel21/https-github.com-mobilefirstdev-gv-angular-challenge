import {Message} from './message';

export class TextMessage extends Message {

  constructor(
    public readonly from: string,
    public readonly profilePictureUrl: string,
    public readonly content: string
  ) {
    super(from, profilePictureUrl, content);
  }

}
