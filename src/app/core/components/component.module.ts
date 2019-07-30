import { NgModule } from '@angular/core'; 
import { ButtonComponent } from './button.component';
import { StatusFiscalizacaoComponent } from './status-fiscalizacao.component';
import { TagsListComponent } from './tags-list.component';
import { CommonModule } from '@angular/common';
import { AppTabComponent } from './tab.component';
import { AppTabPanelComponent } from './tab-panel.component';
  
/***************************************************************************************************
*  Módulo de componentes
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@NgModule({
    imports: [CommonModule],
    declarations: [
          ButtonComponent
        , StatusFiscalizacaoComponent 
        , TagsListComponent
        , AppTabComponent
        , AppTabPanelComponent
    ],
    exports: [ButtonComponent, StatusFiscalizacaoComponent, TagsListComponent, AppTabComponent, AppTabPanelComponent]
}) 
export class ComponentModule {  } 