import { Component, OnInit, ContentChildren, QueryList, Input, TemplateRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { AppTabComponent } from './tab.component';

/***************************************************************************************************
*  Componente de Abas
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Component({
  selector: 'app-tab-panel',
  template: `
<ng-template #defaultTabsHeader>
  <div class="ss-tab">
    <button *ngFor="let tab of tabs" class="ss-tab-links" [ngClass]="{active: tab.selected}" (click)="selectTab(tab)" >
      {{tab.title}}
    </button>
  </div>
</ng-template>

<ng-container *ngIf="headerTemplate else defaultTabsHeader">
  <ng-container *ngTemplateOutlet="headerTemplate; context: tabsContext;"></ng-container>
</ng-container>

<ng-content></ng-content>
  
  ` ,
  styles:[` 

.ss-tab {
  overflow: auto;
  display: flex;
  border: 1px solid #DADFE6;
  border-radius: 4px 4px 0 0;
  background-color:  #FEFEFE ;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.16);
}

.ss-tab-links {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  height: 52px;
  padding: 4px 14px;
  transition: 0.3s;
  padding: 4px 16px;
  transition: 0.3s;
  color: #7C8E9E ;
  word-wrap: initial;
  overflow: hidden;
  flex-shrink: 0;  
}

.ss-tab-links :hover {
  background-color: #F5F7F8;
}

.ss-tab-links.active {
  border-bottom: 2px solid #00A091;
  color: #34495E;
}

.ss-tab-content {
  display: none;
  width: 100%;
}

.ss-card>.ss-tab {
  border: none;
  border-bottom: 1px solid #DADFE6;
  border-radius: initial;
  background-color: transparent;
  box-shadow: none;
}

@media screen and (min-width: 768px) {
  .ss-tab {
      .ss-tab-links {
          width: auto;
      }
  }
}
  `]
})
export class AppTabPanelComponent implements AfterContentInit {

  @ContentChildren(AppTabComponent)
  public tabs: QueryList<any>;

  @Input()
  public headerTemplate: TemplateRef<any>;

 
  ngAfterContentInit() {
    const selectedTab = this.tabs.find(tab => tab.selected);
    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  /***************************************************************************************************
  *  seleciona a aba
  ***************************************************************************************************/
  public selectTab(tab: AppTabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
    if (tab.selecionar) {
      tab.selecionar.emit();
    }
  }

  /***************************************************************************************************
  *  seleciona a aba pelo titulo
  ***************************************************************************************************/
  public selecionar(title: string) {
    this.tabs.forEach((tab: AppTabComponent, i) => {
      tab.selected = false;
      if (tab.title === title) {
        tab.selected = true;
      }
    });
  } 

  /***************************************************************************************************
  *  retorna as abas
  ***************************************************************************************************/
  public tabsContext = () => {
    return {
      tabs: this.tabs
    }
  }

}
