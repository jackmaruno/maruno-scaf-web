import { Component, OnInit } from '@angular/core';
import { SidebarContainerService } from './sidebar-container.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar-container',
  template: `
    <div class="app-sidebar" *ngIf="sidebarService.sidebarOptionsPortal$ | async as portal">
      <ng-container [cdkPortalOutlet]="portal"></ng-container>
    </div>
  `
})
export class SidebarContainerComponent {

  constructor(public sidebarService: SidebarContainerService) {}

  public get isClosed$(): Observable<boolean> {
    return this.sidebarService.isClosed$;
  }

}
