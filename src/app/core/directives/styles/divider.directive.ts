import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scDivider]'
})
export class DividerDirective implements OnInit {

  @Input('scDivider') scDivider: boolean;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    console.log('divider', this.el.nativeElement);
    this.renderer2.addClass(this.el.nativeElement, 'ss-divider');
  }

}
