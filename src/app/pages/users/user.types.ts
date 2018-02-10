export class User {
  _id: string;
  email: string;
  password: string;
  gateway?: Array<string>;
  companyId: string;

  constructor() {
    this.email = '';
    this.password = '';
    this.companyId = '';
  }
}
