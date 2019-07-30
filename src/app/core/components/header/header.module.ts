import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { RouterModule } from '@angular/router';
import { HeaderActionsContainerModule } from '../header-actions-container/header-actions-container.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    HeaderActionsContainerModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
