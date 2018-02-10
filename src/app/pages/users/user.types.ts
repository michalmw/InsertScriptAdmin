export class User {
  _id: string;
  email: string;
  password: string;
  gateway?: Array<string>;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
