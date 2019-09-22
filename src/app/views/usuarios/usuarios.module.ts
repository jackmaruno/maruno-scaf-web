import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
  
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosPage } from './pages/usuarios/usuarios';
import { UsuarioModal } from './modals/usuario/usuario.modal';
import { NgSelectModule } from '@ng-select/ng-select';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker'; 
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
    UsuariosRoutingModule
  ],
  declarations: [UsuariosPage, UsuarioModal ], 
  entryComponents:[ UsuarioModal ]
})
export class UsuariosModule { } 
 