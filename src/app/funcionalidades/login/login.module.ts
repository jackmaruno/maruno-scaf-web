import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableModule } from "angular-6-datatable";

import { ComponentModule } from 'src/app/core/components/component.module';
import { ModalsModule } from 'src/app/modals/modals.module';
import { LoginPage } from './pages/login/login';
import { LoginRoutingModule } from './login-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    ComponentModule,
    ModalsModule,
    LoginRoutingModule
  ],
  declarations: [LoginPage] 
})
export class LoginModule { } 
 