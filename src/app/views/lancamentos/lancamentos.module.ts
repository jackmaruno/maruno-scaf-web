import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
  
import { NgSelectModule } from '@ng-select/ng-select';
import { PortalModule } from '@angular/cdk/portal';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';

import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';



import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosPage } from './pages/lancamentos/lancamentos';
import { LancamentoModal } from './modals/lancamento/lancamento.modal';
import { VisualizarLancamentoModal } from './modals/visualizar-lancamento/visualizar-lancamento.modal';
import { LancamentoAgendadoModal } from './modals/lancamento-agendado/lancamento-agendado.modal';
import { ActionbarModule } from '../../components/actionbar';
import { ModalsModule } from '../../modals/modals.module';
import { ComponentModule } from '../../components/component.module';
import { DirectivesModule } from '../../directives/directives.module';
defineLocale('pt-br', ptBrLocale); 

@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,  
    ActionbarModule, 
    PortalModule,
    FormsModule,
    DataViewModule,
    TableModule,
    DropdownModule,
    PaginatorModule,
    ModalsModule,
    ComponentModule,
    DirectivesModule,
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
 