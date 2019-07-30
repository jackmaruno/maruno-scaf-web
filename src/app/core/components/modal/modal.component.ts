import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { ModalRef } from './modal-ref';

@Component({
  selector: 'sc-modal',
  template: `
  <div id="modal" 
       class="ss-modal" 
       style="display: block">
    <div class="ss-modal-content">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  close() {
    this.actionBarRef.close();
  }

  constructor(private actionBarRef: ModalRef) {
    
  }

}
