import { Component, OnInit } from '@angular/core';
import { ActionBarService } from './actionbar.service';
import { ActionBarRef } from './actionbar-ref';

@Component({
  selector: 'sc-actionbar',
  template: `
  <div id="actionbar" class="app-actionbar app-actionbar-slide">
    <a class="material-icons app-actionbar-btnclose" (click)="close()">clear</a>
      <div class="app-actionbar-content">
        <ng-content></ng-content>
      </div>
  </div>
  `
})
export class ActionBarComponent {

  close() {
    this.actionBarRef.close();
  }

  constructor(private actionBarRef: ActionBarRef) { }

}
