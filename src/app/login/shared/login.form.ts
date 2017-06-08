import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Login } from './login.model';

@Injectable()
export class LoginForm {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public create(login: Login): FormGroup {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.form.valueChanges
      .subscribe(item => {
        login.login = item.login;
        login.password = item.password;
      });

    return this.form;
  }
}
