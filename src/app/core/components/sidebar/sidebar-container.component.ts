import { Component, OnInit } from '@angular/core';
import { SidebarContainerService } from './sidebar-container.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sc-sidebar-container',
  template: `
    <aside class="app-sidebar" *ngIf="sidebarService.sidebarOptionsPortal$ | async as portal">
      <ng-container [cdkPortalOutlet]="portal"></ng-container>
    </aside>
  `
})
export class SidebarContainerComponent {

  constructor(public sidebarService: SidebarContainerService) {}

  get isClosed$(): Observable<boolean> {
    return this.sidebarService.isClosed$;
  }

}
