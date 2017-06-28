import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AppState, AppConstants, AuthenticationService } from '../../../services';

@Component({
    templateUrl: './login.html',
    providers: [
    ]
})
export class Login implements OnInit {

    username : string;
    password : string;

    constructor(private _authService : AuthenticationService, private _router : Router) {
    }

    ngOnInit() {
    }

    submit() {
        if (this.username === "admin" && this.password === "admin") {
            this._authService.logIn();
            setTimeout(function() {
                $('#adminTopMenu').show();
            }, 50);
            this._router.navigateByUrl('/admin');
        } else {
            alert ('Oops, you get it wrong!');
        }
    }
}