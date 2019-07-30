import { Component } from '@angular/core';
import { HeaderActionsContainerService } from './header-actions-container.service';


@Component({
  selector: 'sc-header-actions-container',
  template: `
  <div class="app-header-action ss-group-inline" *ngIf="headerActionsContainerService.optionsPortal$ | async as portal">
    <ng-container [cdkPortalOutlet]="portal"></ng-container>
  </div>
  `
})
export class HeaderActionsContainerComponent {

  constructor(public headerActionsContainerService: HeaderActionsContainerService) {}


}
