import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosPage } from './pages/usuarios/usuarios';
 
const routes: Routes = [
  {
    path: '',
    component: UsuariosPage,
    data: {
      title: 'Usuários'
    }
  }
]; 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
 