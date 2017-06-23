import { Injectable } from '@angular/core';
import { RouterModule, Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { AppState } from './app-state';
import { AuthenticationService } from './auth-service';
import { AppConstants } from './app-constants';

@Injectable()
export class AuthGuard implements CanActivateChild {

    constructor(private _router: Router, private _location: Location, private _appState: AppState, private _authService: AuthenticationService) { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (state.url === "/admin/login" || this._authService.getAuthStatus() == true) {
            return true;
        } else {
            this._router.navigateByUrl('/admin/login');
            return false;
        }
    }
}