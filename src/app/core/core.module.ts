import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay'; 
import { PortalModule } from '@angular/cdk/portal';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// import {
//   UiModule,
//   AlertModule,
//   ButtonModule,
//   NavbarModule,
//   SubnavbarModule,
//   ToolbarModule,
//   HeaderModule,
//   ActionbarModule,
//   FormModule,
//   SidebarContainerModule,
// } from '@/ui';

import { LayoutComponent } from './components/layout.component';
import { AppComponent } from './containers/app.component'; 
import { NotFoundPageComponent } from './containers/not-found-page.component';
import { HeaderComponent } from './components/header.component';
import { PipeModule } from './pipes/pipe.module'; 
import { AlertModule } from './components/alert';
import { SidebarContainerModule } from './components/sidebar/sidebar-container.module';
import { ActionbarModule } from './components/actionbar';
import { UiModule } from './components/ui.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

export const COMPONENTS = [
    LayoutComponent
  , ToolbarComponent
  , NavbarComponent
  , NotFoundPageComponent
  , AppComponent
  , HeaderComponent
];

@NgModule({
  imports: [ 
      CommonModule
    , RouterModule
    , OverlayModule
    , PortalModule
    , UiModule
    , AlertModule
    , FormsModule
    // , FormModule
    , LoadingBarHttpClientModule
    // , ButtonModule
    // , NavbarModule
    , ActionbarModule
    // , SubnavbarModule
    // , ToolbarModule
    // , HeaderModule 
    , PipeModule
    , SidebarContainerModule
  ],
  declarations: [COMPONENTS],
  exports: [AppComponent, PipeModule]
})
export class CoreModule { }