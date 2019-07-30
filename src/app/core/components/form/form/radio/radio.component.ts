import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sco-radio',
  template: `
  <label class="ss-radiobutton">One
    <input type="radio" checked="checked" name="radio">
    <span class="ss-checkmark"></span>
  </label>
  <label class="ss-radiobutton">Four
    <input type="radio" name="radio">
    <span class="ss-checkmark"></span>
  </label>
  `,
  styles: []
})
export class RadioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
