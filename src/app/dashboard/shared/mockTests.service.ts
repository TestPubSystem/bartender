import { Injectable } from '@angular/core';
import { Test } from './test.model';
import { Observable } from 'rxjs/Rx';
import { Revision } from './revision.model';

@Injectable()
export class MockTestsService {
  public all(resync = false): Observable<Test[]> {
    const tests: Test[] = [];
    [1, 2, 3].forEach(item => {
      const test: Test = Object.assign(new Test(), item);
      test.last_revision = new Revision();
      tests.push(test);
    });
    return Observable.of(tests);
  }

  public get(id: number, resync = false): Observable<Test> {
    const test: Test = new Test();
    test.id = id;
    test.last_revision = new Revision();
    return Observable.of(test);
  }

  public create(test: Test): Observable<Test> {
    return Observable.of(test);
  }
}
