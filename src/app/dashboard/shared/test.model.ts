import { Revision } from './revision.model';
export interface Test {
  creation_date: string;
  id: number;
  last_revision: Revision;
}
