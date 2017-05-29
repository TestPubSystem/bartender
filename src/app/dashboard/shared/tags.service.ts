import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Tag } from './tag.model';

@Injectable()
export class TagsService {
  private tags: Subject<Tag[]> = new Subject();
  private host: string = environment.host;

  constructor(private http: Http) {
  }

  public all(resync = false): Observable<Tag[]> {
    if (resync) {
      this.http.get(this.host + '/api/v1/tags/')
        .subscribe((response: Response) => {
          const tags: Tag[] = [];
          response.json().data.forEach((tag: Tag) => {
            tags.push(Object.assign({}, tag));
          });
          this.tags.next(tags);
        }, error => {
          // TODO: error
        });
    }

    return this.tags.asObservable();
  }
}

