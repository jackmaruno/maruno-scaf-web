import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
  
import { NgSelectModule } from '@ng-select/ng-select';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ContatosPage } from './pages/contatos/contatos';
import { ContatosRoutingModule } from './contatos-routing.module';
import { ActionbarModule } from '../../components/actionbar';
import { ModalsModule } from '../../modals/modals.module';
defineLocale('pt-br', ptBrLocale); 

@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,  
    ActionbarModule, 
    FormsModule,
    ModalsModule,
    ContatosRoutingModule
  ],
  declarations: [ContatosPage] 
})
export class ContatosModule { } 
 