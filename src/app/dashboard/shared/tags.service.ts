import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Tag } from './tag.model';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class TagsService extends AuthorizationService {
  private tags: Subject<Tag[]> = new Subject();
  private host: string = environment.host;

  public all(resync = false): Observable<Tag[]> {
    if (resync) {
      this.http.get(this.host + '/api/v1/tags/', {headers: this.headers})
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

