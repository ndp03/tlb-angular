import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AppState, AppConstants, AuthenticationService } from '../../services';

@Component({
    templateUrl: './admin.html',
    providers: [
    ]
})
export class Admin implements OnInit {

    isAuthenticated: boolean = false;

    constructor(private _authService: AuthenticationService, private _router: Router) {
    }

    ngOnInit() {
        this.isAuthenticated = this._authService.getAuthStatus();
    }

    logout() {
        this._authService.logOut();
        this._router.navigateByUrl('/admin/login');
        setTimeout(function () {
            $('#adminTopMenu').hide();
        }, 50);
    }
}