import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-modal-content',
  template: `
    <div class="ss-modal-body">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class ModalContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
