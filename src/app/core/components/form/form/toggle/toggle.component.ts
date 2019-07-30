import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sco-toggle',
  template: `
  <label class="ss-switch">
  <input type="checkbox">
  <span class="ss-point"></span>
</label>

  `,
  styles: []
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
