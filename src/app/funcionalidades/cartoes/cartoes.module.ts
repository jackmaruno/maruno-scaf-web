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
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CartoesRoutingModule } from './cartoes-routing.module';
import { CartoesPage } from './pages/cartoes/cartoes';
import { CartaoModal } from './modals/cartao/cartao.modal';
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
    CartoesRoutingModule
  ],
  declarations: [CartoesPage, CartaoModal ], 
  entryComponents:[ CartaoModal ]
})
export class CartoesModule { } 
 