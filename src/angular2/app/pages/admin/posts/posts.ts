import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AppState, AppConstants, TestService } from '../../../services';

@Component({
    templateUrl: './posts.html',
    providers: [
    ]
})
export class Posts implements OnInit {

    @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
    @ViewChild('actionsTmpl') actionsTmpl: TemplateRef<any>;
    rows = [];
    columns = [];

    constructor(private _testService : TestService) {
    }

    ngOnInit() {
        
        this.columns = [
            {
                name: 'Name'
            },
            {
                name: 'Company'
            },
            {
                name: 'Gender',
                cellTemplate: this.editTmpl,
            },
            {
                name: 'Actions',
                prop: 'Id',
                cellTemplate: this.actionsTmpl,
            }
        ];

        this._testService.getEmployeeList().subscribe(
            x => {
                this.rows = x;
            }
        );

    }




}