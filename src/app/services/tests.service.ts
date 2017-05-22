import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';
import { Test } from '../models/test';

@Injectable()
export class TestsService {
  private tests: BehaviorSubject<Test[]> = new BehaviorSubject(null);
  private host: string = environment.host;

  constructor(private http: Http) {
  }

  private setTests(tests: Test[]) {
    this.tests.next(tests);
  }

  public all() {
    return this.tests.asObservable();
  }

  public preload(): void {
    this.http.get(this.host + '/api/v1/tests/')
      .subscribe((response: Response) => {
        this.setTests(response.json().data);
      }, error => {
        // TODO: error
      });
  }
}

