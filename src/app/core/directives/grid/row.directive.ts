import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[row]'
})
export class RowDirective implements OnInit {

  @Input('row') row?: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add(this.row ? `row-${this.row}` : 'row');
  }

}
