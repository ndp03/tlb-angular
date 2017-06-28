import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from './app-constants';
import { AppState } from './app-state';

@Injectable()
export class TestService {

    private _headers = new Headers();

    constructor(private _http: Http, private _appState: AppState) {
        this._headers.append('Content-Type', 'application/json');
        this._headers.append('Accept', 'application/json');
    }

    getEmployeeList() {
        return this._http.get(AppConstants.EmployeeListUrl)
            .map(response => {
                let body = response.json();
                return body || null;
            })
            .catch(this.handleError);
    }

    private handleError(err: any) {
        return Observable.throw(err);
    }

}