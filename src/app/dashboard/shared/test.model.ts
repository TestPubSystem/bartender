import { Revision } from './revision.model';
import { Tag } from './tag.model';
export interface ITest {
  creation_date: string;
  id: number;
  last_revision: Revision;
  tags: Tag[];
}

export class Test implements ITest {
  public creation_date: string;
  public id: number;
  public last_revision: Revision;
  public tags: Tag[] = [];
}
