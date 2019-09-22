import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
import { NgSelectModule } from '@ng-select/ng-select';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CartoesRoutingModule } from './cartoes-routing.module';
import { CartoesPage } from './pages/cartoes/cartoes';
import { CartaoModal } from './modals/cartao/cartao.modal';
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
    CartoesRoutingModule
  ],
  declarations: [CartoesPage, CartaoModal ], 
  entryComponents:[ CartaoModal ]
})
export class CartoesModule {} 
 