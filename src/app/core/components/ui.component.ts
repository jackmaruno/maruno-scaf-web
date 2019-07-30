import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-ui',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
