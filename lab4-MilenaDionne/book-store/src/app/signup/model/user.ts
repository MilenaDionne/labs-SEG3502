export class User {
  constructor(
    public username: string,
    public password: string,
    public phone?: number,
    public email?: string
  ) {}
}
