export abstract class Message {

  constructor(
    public readonly from: string,
    public readonly profilePictureUrl: string,
    public readonly content: any
  ) {
  }

}
