import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';
import { Test } from '../models/test';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TestsService {
  private tests: Subject<Test[]> = new Subject();
  private test: Subject<Test> = new Subject();
  private host: string = environment.host;

  constructor(private http: Http) {
  }

  public all(resync = false): Observable<Test[]> {
    if (resync) {
      this.http.get(this.host + '/api/v1/tests/')
        .first()
        .subscribe((response: Response) => {
          const tests: Test[] = [];
          response.json().data.forEach(test => {
            tests.push(Object.assign({}, test));
          });
          this.tests.next(tests);
          return this.tests.asObservable();
        }, error => {
          // TODO: error
        });
    }

    return this.tests.asObservable();
  }

  public get(id: number, resync = false): Observable<Test> {
    if (resync) {
      this.http.get(this.host + '/api/v1/tests/' + id)
        .first()
        .subscribe((response: Response) => {
          const test: Test = Object.assign({}, response.json().data);
          this.test.next(test);
          return this.test.asObservable();
        }, error => {
          // TODO: error
        });
    }

    return this.test.asObservable();
  }
}

