import { Directive, forwardRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[scMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScMaskDirective),
      multi: true
    }
  ]
})
export class ScMaskDirective implements ControlValueAccessor {

  _onChanged = (_: any): void => {};
  _onTouched = () => {};

  constructor(private renderer2: Renderer2) { }


  writeValue(obj: any): void {

    console.log('alteracao', obj);
    this.renderer2.setValue(obj, 'teste');

  }

  registerOnChange(fn: any): void {
    this._onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

}
