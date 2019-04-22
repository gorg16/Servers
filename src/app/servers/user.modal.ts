export class User {
  public userName: string;
  public userEmail: string;
  public userPassword: string;
  constructor(userName: string, userEmail: string, userPassword: string) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
  }
}
