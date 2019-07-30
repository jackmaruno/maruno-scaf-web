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
import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosPage } from './pages/lancamentos/lancamentos';
import { LancamentoModal } from './modals/lancamento/lancamento.modal';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { PortalModule } from '@angular/cdk/portal';
import { PipeModule } from 'src/app/core/pipes/pipe.module';
import { NgxBrModule } from '@nbfontana/ngx-br';
import { VisualizarLancamentoModal } from './modals/visualizar-lancamento/visualizar-lancamento.modal';
import { LancamentoAgendadoModal } from './modals/lancamento-agendado/lancamento-agendado.modal';
defineLocale('pt-br', ptBrLocale); 

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    NgxBrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgSelectModule,  
    ActionbarModule, 
    PortalModule,
    FormsModule,
    ComponentModule,
    DirectivesModule,
    ModalsModule,
    PipeModule,
    LancamentosRoutingModule
  ],
  declarations: [LancamentosPage, LancamentoModal, VisualizarLancamentoModal, LancamentoAgendadoModal ], 
  entryComponents:[ LancamentoModal, VisualizarLancamentoModal, LancamentoAgendadoModal ]
})
export class LancamentosModule { 

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private localeService: BsLocaleService) {
    this.localeService.use('pt-br');
  }   
} 
 