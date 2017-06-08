import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor() {
  }

  canActivate() {
    if (localStorage.getItem('token') === null) {
      return false;
    }

    return true;
  }
}
