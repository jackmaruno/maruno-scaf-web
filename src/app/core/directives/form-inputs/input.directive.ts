import { Directive, Input, ElementRef, OnInit, Renderer2,  ContentChild } from '@angular/core';
import { IconDirective } from './icon.directive';


@Directive({
  selector: 'input[scInput], textarea[scInput]',
  exportAs: 'scInput'
})
export class InputDirective implements OnInit {

  @Input() scInput: string;

  @Input() readonly: boolean;

  @ContentChild(IconDirective) scIcon: IconDirective;

  // @Input() errorStateMatcher: ErrorStateMatcher;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {

    this.renderer2.removeClass(this.el.nativeElement, 'form-control');
    this.renderer2.setAttribute(this.el.nativeElement, 'autocomplete', 'off');
    this.renderer2.addClass(this.el.nativeElement, 'ss-form-control');
    this.renderer2.addClass(this.el.nativeElement, 'ss-validation-field');
    
    if (this.scIcon) {
      this.renderer2.addClass(this.el.nativeElement, 'ss-input-container');
    }
    
  }

}
