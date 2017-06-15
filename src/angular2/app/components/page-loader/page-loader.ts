import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';

import { PageLoaderService } from './page-loader-service';


@Component({
    selector: 'page-loader',
    templateUrl: 'page-loader.html'
})

export class PageLoader {
    constructor( private pageLoaderService: PageLoaderService) { }

    public isLoaderVisible:any = this.pageLoaderService.getVisibility();

    @Input() updatedLoaderStatus: any;

}