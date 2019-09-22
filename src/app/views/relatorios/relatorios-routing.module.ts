import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatoriosPage } from './pages/relatorios/relatorios';
 
const routes: Routes = [
  {
    path: '',
    component: RelatoriosPage,
    data: {
      title: 'Relatório'
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
 