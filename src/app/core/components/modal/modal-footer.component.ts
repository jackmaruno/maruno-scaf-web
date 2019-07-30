import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-modal-footer',
  template: `
  <div class="ss-modal-footer">
    <ng-content></ng-content>
  </div>
  `,
  styles: []
})
export class ModalFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
