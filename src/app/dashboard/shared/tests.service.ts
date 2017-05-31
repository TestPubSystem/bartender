import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Test } from './test.model';

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
        .subscribe((response: Response) => {
          const tests: Test[] = [];
          response.json().data.forEach((test: Test) => {
            tests.push(Object.assign({}, test));
          });
          this.tests.next(tests);
        }, error => {
          // TODO: error
        });
    }

    return this.tests.asObservable();
  }

  public get(id: number, resync = false): Observable<Test> {
    if (resync) {
      this.http.get(this.host + '/api/v1/tests/' + id)
        .subscribe((response: Response) => {
          const test: Test = Object.assign({}, response.json().data);
          this.test.next(test);
        }, error => {
          // TODO: error
        });
    }

    return this.test.asObservable();
  }

  public create(test: Test): Observable<Test> {
    return this.http.post(this.host + '/api/v1/tests/', test)
      .map((response: Response) => {
        return Object.assign({}, response.json().data);
      });
  }
}

