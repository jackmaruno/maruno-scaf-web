import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: 'select[scSelect]',
  exportAs: 'scSelect'
})
export class SelectDirective implements OnInit {

  @Input() scInput: string;

  @Input() readonly: boolean;

  // @Input() errorStateMatcher: ErrorStateMatcher;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    //this.renderer2.addClass(this.el.nativeElement, 'ss-select');
    this.renderer2.addClass(this.el.nativeElement, 'ss-validation-field');
  }

}
