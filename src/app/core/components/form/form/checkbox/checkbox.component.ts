import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sco-checkbox',
  template: `
  <label class="ss-checkbox">One
    <input type="checkbox" checked="checked">
    <span class="ss-checkmark"></span>
  </label>
  <label class="ss-checkbox">Four
    <input type="checkbox">
    <span class="ss-checkmark"></span>
  </label>
  `,
  styles: []
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
