import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DropdownModule} from 'primeng/dropdown';

  
import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosPage } from './pages/agendamentos/agendamentos';
import { AgendamentoModal } from './modals/agendamento/agendamento.modal';
import { ModalsModule } from '../../modals/modals.module';
defineLocale('pt-br', ptBrLocale); 

@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,  
    FormsModule,
    DynamicDialogModule,
    DropdownModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    
    AgendamentosRoutingModule,
    ModalsModule
  ],
  declarations: [AgendamentosPage, AgendamentoModal ],  
  entryComponents:[ AgendamentoModal ]
})
export class AgendamentosModule { } 
 