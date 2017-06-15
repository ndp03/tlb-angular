import { Directive, ElementRef } from '@angular/core';
@Directive({ 
   selector: '[cs-accordion]'
})
export class CsAccordion {
    constructor(el: ElementRef) {
        setTimeout(() => {
            var elem = el.nativeElement.querySelector('.cs-accordion__module');
            var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            var action_button = elem.querySelector('.cs-accordion__action-button');

            if(action_button){
                action_button.addEventListener("click", function(){
                    elem.classList.toggle('cs-accordion__module--state-collapse');
                });
            }

            if(viewportWidth){
                if(viewportWidth <= 767) {
                    elem.classList.add('cs-accordion__module--state-collapse');
                }
            }
        },0);
    }
}
