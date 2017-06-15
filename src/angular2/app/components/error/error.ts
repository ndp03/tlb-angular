import { Component } from '@angular/core';

@Component({
  selector: 'generic-error',
  template: `
    <div>
      <h1>Error</h1>
      <p>
         Oops, an unexpected error has occurred.
      </p>
    </div>
  `
})
export class Error {

}
