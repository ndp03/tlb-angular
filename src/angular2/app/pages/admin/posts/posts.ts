import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AppState, AppConstants } from '../../../services';

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

    constructor() {
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

        this.rows = [
            {
                "Id" : 1,
                "name": "Ethel Price",
                "gender": "female",
                "company": "Johnson, Johnson and Partners, LLC CMP DDC",
                "age": 22
            },
            {
                "Id" : 2,
                "name": "Claudine Neal",
                "gender": "female",
                "company": "Sealoud",
                "age": 55
            },
            {
                "Id" : 3,
                "name": "Beryl Rice",
                "gender": "female",
                "company": "Velity",
                "age": 67
            },
            {
                "Id" : 4,
                "name": "Yvonne Parsons",
                "gender": "female",
                "company": "Zolar"
            },
            {
                "Id" : 5,
                "name": "Woods Dsdsds",
                "gender": "male",
                "company": "Bedder"
            },
            {
                "Id" : 6,
                "name": "Aded Key",
                "gender": "male",
                "company": "Bedder"
            },
              {
                "Id" : 7,
                "name": "Bne Key",
                "gender": "male",
                "company": "Bedder"
            },
              {
                "Id" : 8,
                "name": "Bob Carrd",
                "gender": "male",
                "company": "Bedder"
            },
        ];

    }




}