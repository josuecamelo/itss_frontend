import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SecurityGuard implements CanActivate {
  constructor(private router: Router) { }

}
