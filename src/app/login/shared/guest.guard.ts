import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class GuestGuard implements CanActivate {

  constructor() {
  }

  canActivate() {
    if (localStorage.getItem('token') === null) {
      return true;
    }

    return false;
  }
}
