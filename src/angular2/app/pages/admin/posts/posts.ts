import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AppState, AppConstants } from '../../../services';

@Component({
    templateUrl: './posts.html',
    providers: [
    ]
})
export class Posts implements OnInit {

    constructor() {
    }

    rows = [
        { name: 'Austin', gender: 'Male', company: 'Swimlane' },
        { name: 'Dany', gender: 'Male', company: 'KFC' },
        { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];

    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];

    ngOnInit() {
    }

}