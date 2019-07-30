/* import { Component, OnInit, forwardRef, EventEmitter, Output, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorBase } from 'projects/ui/src/commons/value-acessor-base';




const SC_INPUT_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

@Component({
  selector: 'sc-input',
  template: `
    <input
      type="{{type}}"
      class="ss-form-control"
      autocomplete="off"
      [id]="id"
      [pattern]="mask"
      [textMask]="{mask: mask}"
      placeholder="{{placeholder}}"
      [disabled]="disabled"
      [required]="required"
      [ngModel]="value"
      (ngModelChange)="notifyChanges($event)"
      (blur)="blurEvt($event)">
  `,
  providers: [SC_INPUT_PROVIDER]
})
export class InputComponent extends ValueAccessorBase<string> {

  @Input() type: 'text';
  @Input() id: string;
  @Input() placeholder: '';
  @Input() mask: string;

  @Input() required: boolean;
  @Input() disabled: boolean;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value;
  }

  public blurEvt(event): void {
    console.log('event', event);
    this.blur.emit(event);
  }

}
 */
