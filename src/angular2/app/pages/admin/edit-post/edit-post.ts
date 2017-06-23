import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { AppState, AppConstants } from '../../../services';

@Component({
    templateUrl: './edit-post.html',
    providers: [
    ]
})
export class EditPost implements OnInit {

    content: string;

    id: string;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params["id"];
            console.log('Edit post ID = ' + this.id);
        });
    }

    mychange() {
        console.log(this.content);
    }

    save() {

        // 1 - Generate new ID if empty

        // 2 - save

    }


}