import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AppState, AppConstants } from '../../../services';

@Component({
    templateUrl: './login.html',
    providers: [
    ]
})
export class Login implements OnInit {

    content : any;

    constructor() {
    }

    ngOnInit() {
    }

    mychange() {

        console.log(this.content);
    }

}