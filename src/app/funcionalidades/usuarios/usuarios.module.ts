import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableModule } from "angular-6-datatable";
 
import { ComponentModule } from 'src/app/core/components/component.module';
import { ModalsModule } from 'src/app/modals/modals.module';
import { ActionbarModule } from 'src/app/core/components/actionbar';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosPage } from './pages/usuarios/usuarios';
import { UsuarioModal } from './modals/usuario/usuario.modal';
import { NgSelectModule } from '@ng-select/ng-select';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { CpfModule, TelefoneModule } from '@nbfontana/ngx-br';
import { PipeModule } from 'src/app/core/pipes/pipe.module';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
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
    CpfModule,
    TelefoneModule,
    PipeModule,
    DirectivesModule,
    ModalsModule,
    UsuariosRoutingModule
  ],
  declarations: [UsuariosPage, UsuarioModal ], 
  entryComponents:[ UsuarioModal ]
})
export class UsuariosModule { } 
 