import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelPage } from './pages/painel/painel-page';

const routes: Routes = [
  {
    path: '',
    component: PainelPage,
    data: {
      title: 'Painel Gerencial'
    }
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
