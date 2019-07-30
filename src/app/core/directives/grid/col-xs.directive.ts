import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[colXs]'
})
export class ColXsDirective implements OnInit {


  @Input('colXs') col?: string;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    const xsClass = this.col ? `col-xs-${this.col}` : 'col-xs-12';
    this.renderer2.addClass(this.el.nativeElement, xsClass);
  }


}
