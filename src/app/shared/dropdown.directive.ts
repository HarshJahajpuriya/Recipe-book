import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

  @HostBinding('class.open') isOpen = false;
  
  @HostListener('document:click', ['$event']) toggleOpen(ev: Event): void {
    // if(!this.isOpen) this.isOpen = true;
    // else this.isOpen = false;      
    
    this.isOpen = this.elementRef.nativeElement.contains(ev.target) ? !this.isOpen : false;
    // this will close the dropdown, even if we click anywhere after opening the dropdown
    
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {     
  }  
}
