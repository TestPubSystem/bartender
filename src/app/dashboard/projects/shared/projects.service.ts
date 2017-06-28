import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Test } from '../../shared/test.model';
import { AuthorizationService } from '../../shared/authorization.service';
import { Project } from './project.model';

@Injectable()
export class ProjectsService extends AuthorizationService {
  private projects: Subject<Project[]> = new Subject();
  private host: string = environment.host;

  public all(resync = false): Observable<Project[]> {
    if (resync) {
      this.http.get(this.host + '/api/v1/projects/', {headers: this.headers})
        .subscribe((response: Response) => {
          const projects: Project[] = [];
          response.json().data.forEach((project: Project) => {
            projects.push(Object.assign({}, project));
          });
          this.projects.next(projects);
        }, error => {
          // TODO: error
        });
    }

    return this.projects.asObservable();
  }
}

