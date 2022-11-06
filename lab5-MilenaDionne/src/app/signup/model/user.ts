export class User {
  public id: string;
  public username: string;
  public password: string;
  public phone?: number;
  public email?: string;

  constructor(username: string, password: string, phone?: number, email?: string) {
    this.id = null;
    this.username = username;
    this.password = password;
    this.phone = phone;
    this.email = email;
  }
}
