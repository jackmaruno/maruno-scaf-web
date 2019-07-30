import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[scIcon]'
})
export class IconDirective {

  @Input('scIcon') icon: string;
  @Input('iconPosition') iconPosition = 'left';
  @Input('hasAddon') hasAddon = false; 

  constructor() { }


}
