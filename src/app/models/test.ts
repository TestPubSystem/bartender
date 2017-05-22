import { Revision } from './revision';
export interface Test {
  creation_date: string;
  id: number;
  last_revision: Revision;
}
