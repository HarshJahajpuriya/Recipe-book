import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

  @HostBinding('class.open') isOpen = false;
  
  @HostListener('click') toggleOpen(): void {
    if(!this.isOpen) 
      this.isOpen = true;
    else 
      this.isOpen = false;    
    
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {     
  }  
}
