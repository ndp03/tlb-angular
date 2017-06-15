import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';



@Injectable()
export class PageLoaderService {
    

    loaderVisibilityState: boolean = false;

    getVisibility() {
        return this.loaderVisibilityState;
    }


    setVisibility(visibility: boolean) {
        this.loaderVisibilityState = visibility;
    }


}

