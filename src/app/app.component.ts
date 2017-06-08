import { Component } from '@angular/core';
import { AuthorizationService } from './dashboard/shared/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public token: string;

  constructor(private authorizationService: AuthorizationService,
              private router: Router) {
    this.authorizationService.getToken().subscribe(
      token => {
        this.token = token;
      }
    );
  }

  public logout() {
    this.authorizationService.setToken(null);
    this.router.navigate(['/']);
  }
}
