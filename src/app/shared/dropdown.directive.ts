import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) { 
    console.log('Here')
  }

}
