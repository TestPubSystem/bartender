import { Step } from './step.model';
export interface Revision {
  creation_date: string;
  desc: string;
  id: number;
  post_condition: string;
  pre_condition: string;
  steps: Step[];
  title: string;
}
