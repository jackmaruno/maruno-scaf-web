import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartoesPage } from './pages/cartoes/cartoes';
 
const routes: Routes = [
  {
    path: '',
    component: CartoesPage,
    data: {
      title: 'Cartões de Crédito'
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartoesRoutingModule { }
 