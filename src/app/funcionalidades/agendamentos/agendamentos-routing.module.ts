import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamentosPage } from './pages/agendamentos/agendamentos';

const routes: Routes = [{
  path: '', component: AgendamentosPage
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentosRoutingModule { }
 