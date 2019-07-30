import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-button',
  templateUrl: './button.component.html',
  //styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  title = 'app';

  @Input() text: string;
  @Input() inline = false;
  @Input() disabled = false;
  @Input() type: 'default';


}
