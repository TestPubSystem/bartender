import { Step } from './step.model';
export interface IRevision {
  creation_date: string;
  desc: string;
  id: number;
  post_condition: string;
  pre_condition: string;
  steps: Step[];
  title: string;
}

export class Revision implements IRevision {
  public creation_date: string;
  public desc: string;
  public id: number;
  public post_condition: string;
  public pre_condition: string;
  public steps: Step[] = [];
  public title: string;
}
