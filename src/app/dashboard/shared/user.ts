export interface IUser {
  id: number;
  login: string;
  name: string;
  confirmed: boolean;
  blocked: boolean;
  registration_date: string;
}

export class User {
  public id: number;
  public login: string;
  public name: string;
  public confirmed: boolean;
  public blocked: boolean;
  public registration_date: string;
}
