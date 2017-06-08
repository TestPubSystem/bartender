import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthorizationService {
  protected headers: Headers = new Headers();
  private token: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(protected http: Http) {
    this.headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
  }

  public setToken(token: string): void {
    if (token === null) {
      localStorage.removeItem('token');
      this.token.next(null);
    } else {
      localStorage.setItem('token', token);
      this.token.next(token);
    }
  }

  public getToken(): Observable<string> {
    this.token.next(localStorage.getItem('token'));
    return this.token.asObservable();
  }
}
