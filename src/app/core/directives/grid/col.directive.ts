import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[col]'
})
export class ColDirective implements OnInit {

  @Input('col') col: string;

  @Input() xs?: string;

  @Input() md?: string;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    const colClass = this.col ? `col-${this.col}` : 'col-12';
    this.renderer2.addClass(this.el.nativeElement, colClass);

    if (this.xs) {
      const xsClass = `col-${this.xs}-p`;
      this.renderer2.addClass(this.el.nativeElement, xsClass);
    }

    if (this.md) {
      const mdClass = `col-${this.md}-m`;
      this.renderer2.addClass(this.el.nativeElement, mdClass);
    }
  }

}
