import { NgModule } from '@angular/core'; 
import { ButtonComponent } from './button.component';
import { TagsListComponent } from './tags-list.component';
import { CommonModule } from '@angular/common'; 
  
/***************************************************************************************************
*  Módulo de componentes
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***************************************************************************************************/
@NgModule({
    imports: [CommonModule],
    declarations: [
          ButtonComponent
        , TagsListComponent 
    ],
    exports: [ButtonComponent, TagsListComponent]
}) 
export class ComponentModule {  } 