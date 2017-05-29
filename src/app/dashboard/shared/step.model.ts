export interface IStep {
  id: number;
  order_number: number;
  text: string;
  type: string;
}

export class Step implements IStep {
  public id: number;
  public order_number: number;
  public text: string;
  public type: string;
}