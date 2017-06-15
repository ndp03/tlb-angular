import { TestBed, ComponentFixture, fakeAsync, async, inject, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule, DefaultUrlSerializer, UrlTree, Router  } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { FromUnixPipe, TimeAgoPipe } from 'angular2-moment';

import { dispatchEvent } from '../../utils';
import { Error, NoContent, PageLoader, PageLoaderService } from '../../../../app/components';
import { FormatMobileNumber, FormatContactNumber, FormatBsbNumber, FormatAccountNumber, PascalCasePipe, SpaceInNumber, Trunc30Chars } from '../../../../app/pipes';
import { ROUTES } from '../../../../app/app_start/app.routes';


class MockTwoFaService {

    get2FaStatus() {
        var result = {
            "requireTwoFactorAuthentication": true,
            "status": {
                "status":"AuthenticateViaSmsOrSecurityQuestions",
                "description":"AuthenticateViaSmsOrSecurityQuestions"
            }
        };
        return Observable.of(result);
    }
}

class MockFailTwoFaServiceFail extends MockTwoFaService {
    public setMobileNumberRegisteredForSms (contactPhoneId: number) {
        return Observable.of({status: 'Fail'})
    }
}

let routerStub = {
    navigate: jasmine.createSpy('navigate'),
    routerState :{}
};


let keyPressed:any = null;

function keyPress(key:number, isShift: Boolean, targetElement: HTMLElement) {
  let event:any = document.createEvent('Event');
  event.keyCode = key;
  event.initEvent('keydown');
  return event;
}

describe('Angular2: 2FA - Register Mobile page', () => {
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                FormsModule, HttpModule,
                RouterModule.forRoot(ROUTES, { useHash: false }),
              
            ],
            declarations: [
                Error, NoContent, PageLoader,
                TimeAgoPipe, FromUnixPipe,
                FormatMobileNumber, FormatContactNumber, FormatBsbNumber, FormatAccountNumber, PascalCasePipe, SpaceInNumber, Trunc30Chars,
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue : '/' },
                PageLoaderService,
                { provide: Router, useValue: routerStub },
            ]
        })
    });

    function createComponent(): ComponentFixture<NoContent> {
        let fixture = TestBed.createComponent(NoContent);
        fixture.detectChanges(); 
        tick();
        return fixture;
    }

    it('should load 2FA - Register Mobile page', fakeAsync(() => {
        let fixture = createComponent();
        
        let element = fixture.nativeElement.querySelector('.register-mobile');
        expect(element).not.toBe(null);
    }));

     it('should load 2FA - Register Mobile page - Submit Error', fakeAsync(() => {
        let fixture = createComponent();
        let taskList = fixture.componentInstance;
        let spy: jasmine.Spy;

        fixture.nativeElement.querySelector('.container__footer-button').click();
        tick();
        fixture.detectChanges();

        let error_elem = fixture.nativeElement.querySelector('#reg_mobile_section_error');
    
        //expect(taskList.isValidationError).toBeTruthy();
        expect(error_elem).not.toBe(null);
    }));

    it('should submit the page when the set mobile is SUCCESSFUL and navigate to sms', fakeAsync(() => {
         let fixture = createComponent();
       
         fixture.nativeElement.querySelector('.container__footer-button').click();
         tick();
         fixture.detectChanges();

         //expect(fixture.componentInstance.isValidationError).toBeFalsy();
         expect(routerStub.navigate).toHaveBeenCalledWith([{ outlets: { aux: 'twofa/sms' } }]);
    }));

});
