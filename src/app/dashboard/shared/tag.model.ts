export interface ITag {
  id: number;
  color: number;
  title: string;
}

export class Tag implements ITag {
  public id: number;
  public color: number;
  public title: string;
}