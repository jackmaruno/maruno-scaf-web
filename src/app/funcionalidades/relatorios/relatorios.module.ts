import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableModule } from "angular-6-datatable";
import { NgSelectModule } from '@ng-select/ng-select';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
// import {TreeTableModule} from "ng-treetable";
import {TreeTableModule} from 'primeng/treetable';



import { ComponentModule } from 'src/app/core/components/component.module';
import { ModalsModule } from 'src/app/modals/modals.module';
import { ActionbarModule } from 'src/app/core/components/actionbar'; 

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatoriosPage } from './pages/relatorios/relatorios';
defineLocale('pt-br', ptBrLocale); 

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,  
    FormsModule,
    TreeTableModule,
    ActionbarModule, 
    ComponentModule,
    ModalsModule,
    RelatoriosRoutingModule
  ],
  declarations: [RelatoriosPage] 
})
export class RelatoriosModule { } 
 