import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsPage } from './pages/tags/tags';
 
const routes: Routes = [
  {
    path: '',
    component: TagsPage,
    data: {
      title: 'Etiquetas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
