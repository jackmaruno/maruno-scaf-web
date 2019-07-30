import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableModule } from "angular-6-datatable";
 
import { ComponentModule } from 'src/app/core/components/component.module';
import { ModalsModule } from 'src/app/modals/modals.module';
import { ActionbarModule } from 'src/app/core/components/actionbar';
import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosPage } from './pages/agendamentos/agendamentos';
import { AgendamentoModal } from './modals/agendamento/agendamento.modal';
import { NgSelectModule } from '@ng-select/ng-select';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
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
    AgendamentosRoutingModule
  ],
  declarations: [AgendamentosPage, AgendamentoModal ], 
  entryComponents:[ AgendamentoModal ]
})
export class AgendamentosModule { } 
 