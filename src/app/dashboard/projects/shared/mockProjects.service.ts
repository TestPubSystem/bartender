import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Project } from './project.model';

@Injectable()
export class MockProjectsService {
  public all(resync = false): Observable<Project[]> {
    const projects: Project[] = [];
    [1, 2, 3].forEach(item => {
      const project: Project = Object.assign(new Project(), item);
      projects.push(project);
    });
    return Observable.of(projects);
  }
}
