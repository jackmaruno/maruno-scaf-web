import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'painel-gerencial',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [ 
      {
        path: 'painel-gerencial',
        loadChildren: () => import('./views/painel/painel.module').then(m => m.PainelModule)
      },
      {
        path: 'lancamentos',
        loadChildren: () => import('./views/lancamentos/lancamentos.module').then(m => m.LancamentosModule)
      },
      {
        path: 'agendamentos',
        loadChildren: () => import('./views/agendamentos/agendamentos.module').then(m => m.AgendamentosModule)
      },
      {
        path: 'tags',
        loadChildren: () => import('./views/tags/tags.module').then(m => m.TagsModule)
      },
      {
        path: 'cartoes',
        loadChildren: () => import('./views/cartoes/cartoes.module').then(m => m.CartoesModule)
      },
      {
        path: 'contatos',
        loadChildren: () => import('./views/contatos/contatos.module').then(m => m.ContatosModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./views/usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path: 'relatorio',
        loadChildren: () => import('./views/relatorios/relatorios.module').then(m => m.RelatoriosModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
