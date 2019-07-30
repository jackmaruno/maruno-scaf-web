import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarContainerService } from './sidebar-container.service';
import { SidebarContainerComponent } from './sidebar-container.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [ CommonModule, PortalModule ],
  declarations: [ SidebarContainerComponent ],
  exports: [ SidebarContainerComponent ],
  providers: [ SidebarContainerService ]
})
export class SidebarContainerModule { }
