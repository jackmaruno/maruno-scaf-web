import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page.component';
import { AuthGuardService } from './services/seguranca/auth-guard.service';
import { DashboardModule } from './funcionalidades/dashboard/dashboard.module';
import { LancamentosModule } from './funcionalidades/lancamentos/lancamentos.module';
import { RelatoriosModule } from './funcionalidades/relatorios/relatorios.module';
import { UsuariosModule } from './funcionalidades/usuarios/usuarios.module';
import { ContatosModule } from './funcionalidades/contatos/contatos.module';
import { CartoesModule } from './funcionalidades/cartoes/cartoes.module';
import { AgendamentosModule } from './funcionalidades/agendamentos/agendamentos.module';
import { TagsModule } from './funcionalidades/tags/tags.module';
import { LoginModule } from './funcionalidades/login/login.module';

export function getLoginModule(){return LoginModule;}

export function getDashboardModule(){return DashboardModule;}

export function getTagsModule(){return TagsModule;}
export function getAgendamentosModule(){return AgendamentosModule;}
export function getCartoesModule(){return CartoesModule;}
export function getContatosModule(){return ContatosModule;}
export function getUsuariosModule(){return UsuariosModule;}
export function getRelatoriosModule(){return RelatoriosModule;}

export function getLancamentosModule(){return LancamentosModule;}

const routes: Routes = [ 
  {
      path: 'autenticar'
    , loadChildren: './funcionalidades/login/login.module#LoginModule'
    // , loadChildren: getLoginModule
  },
  {
      path: 'dashboard'
    // , loadChildren: './funcionalidades/dashboard/dashboard.module#DashboardModule'
    , loadChildren: getDashboardModule
    , canActivate: [AuthGuardService]
  },
  {
      path: 'tags'
      , loadChildren: getTagsModule
    // , loadChildren: './funcionalidades/tags/tags.module#TagsModule'
    , canActivate: [AuthGuardService]
  },
  {
      path: 'agendamentos'
      , loadChildren: getAgendamentosModule
    // , loadChildren: './funcionalidades/agendamentos/agendamentos.module#AgendamentosModule'
    , canActivate: [AuthGuardService]
  },
  {
      path: 'cartoes'
      , loadChildren: getCartoesModule
    // , loadChildren: './funcionalidades/cartoes/cartoes.module#CartoesModule'
    , canActivate: [AuthGuardService]
  } ,
  {
      path: 'contatos'
      , loadChildren: getContatosModule
    // , loadChildren: './funcionalidades/contatos/contatos.module#ContatosModule'
    , canActivate: [AuthGuardService]
  } ,
  {
      path: 'usuarios'
      , loadChildren: getUsuariosModule
    // , loadChildren: './funcionalidades/usuarios/usuarios.module#UsuariosModule'
    , canActivate: [AuthGuardService]
  },
  {
      path: 'lancamentos'
    , loadChildren: getLancamentosModule
    // , loadChildren: './funcionalidades/lancamentos/lancamentos.module#LancamentosModule'
    , canActivate: [AuthGuardService]
  }, 
  {
      path: 'relatorios'
    , loadChildren: getRelatoriosModule
    // , loadChildren: './funcionalidades/relatorios/relatorios.module#RelatoriosModule'
    , canActivate: [AuthGuardService]
  }, 
  {
    path: '**', component: NotFoundPageComponent, canActivate: [AuthGuardService]
  },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true, enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
