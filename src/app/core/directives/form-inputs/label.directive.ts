import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[scLabel]'
})
export class LabelDirective  {

  private _value: string;

  @Input('scLabel')
  set label(value: string) {
    if (this._value === value) {
      return;
    }
    this._value = value;
  }

  get label() {
    return this._value;
  }

  constructor() { }

}
