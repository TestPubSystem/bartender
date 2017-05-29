import { Revision } from './revision.model';
import { Tag } from './tag.model';
export interface Test {
  creation_date: string;
  id: number;
  last_revision: Revision;
  tags: Tag[];
}
