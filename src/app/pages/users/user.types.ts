export class User {
  _id: string;
  email: string;
  password: string;
  gateway?: Array<string>;
  companyId: string;
  type: string;

  constructor() {
    this.email = '';
    this.password = '';
    this.companyId = '';
    this.type = '';
  }
}
