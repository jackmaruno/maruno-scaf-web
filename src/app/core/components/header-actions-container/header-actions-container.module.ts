import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PortalModule } from '@angular/cdk/portal';
import { HeaderActionsContainerComponent } from './header-actions-container.component';
import { HeaderActionsContainerService } from './header-actions-container.service';


@NgModule({
  imports: [ CommonModule, PortalModule ],
  declarations: [ HeaderActionsContainerComponent ],
  exports: [ HeaderActionsContainerComponent ],
  providers: [ HeaderActionsContainerService ]
})
export class HeaderActionsContainerModule { }
