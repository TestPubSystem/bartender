import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Login } from './login.model';

@Injectable()
export class LoginService {
  private host: string = environment.host;

  constructor(private http: Http) {
  }

  public login(login: Login): Observable<string> {
    return this.http.post(this.host + '/api/v1/auth', login)
      .map((response: Response) => {
        return response.json().access_token;
      }).catch((error: any) => {
        return Observable.throw(error.statusText);
      });
  }
}

