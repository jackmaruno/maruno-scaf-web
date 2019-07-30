import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorBase } from '@nbfontana/ngx-br';

const CPF_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CpfComponent),
  multi: true,
};

@Component({
  selector: 'sc-input-cpf',
  template: `
  <input
  cpfMask
  type="text"
  scInput
  scCpf
  maxlength="14"
  [id]="id"
  [placeholder]="placeholder"
  [disabled]="disabled"
  [(ngModel)]="value"
  (ngModelChange)="notifyChanges($event)"
  (blur)="blurEvt($event)">
  `,
  styles: []
})
export class CpfComponent extends ValueAccessorBase<string> {
  cpfPattern = '999.999.999-99';
  cpfPlaceholder = '000.000.000-00';

  public pattern: string = this.cpfPattern;

  @Input() placeholder: string = this.cpfPlaceholder;
  @Input() id: string;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value ? value.replace(/[^\d]/g, '').trim().slice(0, 11) : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
