import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
// import {TreeTableModule} from "ng-treetable";
import {TreeTableModule} from 'primeng/treetable';


 

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatoriosPage } from './pages/relatorios/relatorios';
import { ActionbarModule } from '../../components/actionbar';
import { ModalsModule } from '../../modals/modals.module';
defineLocale('pt-br', ptBrLocale); 

@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,  
    FormsModule,
    TreeTableModule,
    ActionbarModule, 
    ModalsModule,
    RelatoriosRoutingModule
  ],
  declarations: [RelatoriosPage] 
})
export class RelatoriosModule { } 
 