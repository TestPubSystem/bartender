export interface ILogin {
  login: string;
  password: string;
}
export class Login implements ILogin {
  public login: string;
  public password: string;
}
