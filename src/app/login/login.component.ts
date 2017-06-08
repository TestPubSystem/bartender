import { Component, OnInit } from '@angular/core';
import { LoginForm } from './shared/login.form';
import { FormGroup } from '@angular/forms';
import { Login } from './shared/login.model';
import { LoginService } from './shared/login.service';
import { AuthorizationService } from '../dashboard/shared/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginForm, LoginService]
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  private login: Login = new Login();

  constructor(
    private loginForm: LoginForm,
    private loginService: LoginService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
    this.loginFormGroup = loginForm.create(this.login);
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.loginService.login(this.login).subscribe(
      token => {
        this.authorizationService.setToken(token);
        this.router.navigate(['dashboard']);
      },
      error => {
        // TODO: error
      }
    );
  }
}
