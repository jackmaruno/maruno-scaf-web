import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentosPage } from './pages/lancamentos/lancamentos';

const routes: Routes = [
  {
    path: '',
    component: LancamentosPage,
    data: {
      title: 'Lançamentos'
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
 