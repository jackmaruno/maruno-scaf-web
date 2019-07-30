import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableModule } from "angular-6-datatable";
 
import { ComponentModule } from 'src/app/core/components/component.module';
import { ModalsModule } from 'src/app/modals/modals.module';
import { ActionbarModule } from 'src/app/core/components/actionbar'; 
import { NgSelectModule } from '@ng-select/ng-select';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ContatosPage } from './pages/contatos/contatos';
import { ContatosRoutingModule } from './contatos-routing.module';
defineLocale('pt-br', ptBrLocale); 

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,  
    ActionbarModule, 
    FormsModule,
    ComponentModule,
    ModalsModule,
    ContatosRoutingModule
  ],
  declarations: [ContatosPage] 
})
export class ContatosModule { } 
 