import { User } from '../../shared/user';
export interface IProject {
  id: number;
  name: string;
  desc: string;
  author: User;
  creation_date: string;
}

export class Project implements IProject {
  public id: number;
  public name: string;
  public desc: string;
  public author: User;
  public creation_date: string;
}
