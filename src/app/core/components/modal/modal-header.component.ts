import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-modal-header',
  template: `
  <div class="ss-modal-header">
    <span *ngIf="showClose" class="ss-modal-btnclose" (click)="close()">
      &times;
    </span>
    <ng-content></ng-content>
  </div>
  `,
  styles: []
})
export class ModalHeaderComponent {

  @Input() showClose = false;

  constructor() { }


}
