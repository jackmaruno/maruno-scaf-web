import { Component, Input } from '@angular/core'; 
import { HeaderComponent } from '../header.component';

/***************************************************************************************************
*  Componente de Cabeçalho
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Component({
  selector: 'app-toolbar',
  template: `
  <aside class="ss-toolbar">  
      <div *ngFor="let item of itens">
        <a [routerLink]="item.route" class="ss-toolbar-item" (click)="click(item)">
          <i class="material-icons">{{item.iconName}}</i>{{item.displayName}}
        </a>
      </div> 
  </aside>
`,styles:[`
.ss-toolbar {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 80px;
  text-align: center;
  background-color: #FEFEFE;
  position: relative;
}

.ss-toolbar-item {
  width: auto;
  min-width: 80px;
  min-height: 80px;
  padding: 8px;
  border-bottom: 1px solid #DADFE6;
  border-right: 1px solid #DADFE6;
  color: #34495E;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;  
}

.ss-toolbar-item:hover {
  background-color: #94E1D6;
  color: #003641;
  .ss-toolbar-menu {
      display: block;
  }
}

.ss-toolbar-item span {
  margin-top: 4px;
  line-height: 0.9rem;
  display: block;
  word-wrap: break-word;
}

.ss-toolbar-item.active {
  color: #00A091;
  position: relative; 
}

.ss-toolbar-item.active:after {
  content: "";
  display: block;
  width: 60%;
  height: 2px;
  background-color: #00A091;
  position: absolute;
  bottom: 0;
}


@media screen and (min-width:768px) {
  .ss-toolbar {
      grid-auto-flow: row;
  }
  .ss-toolbar-item {
      border-right: unset;
      width: 80px;
  }
}


/* Toolbar menu */

.ss-toolbar-menu {
  display: none;
  position: fixed;
  background: #FEFEFE;
  // z-index: 1;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.36);
  padding: 4px 16px;
  bottom: 81px;
  left: 0;
  width: 100%;
  overflow-y: auto;
  max-height: 60vh;
  text-align: left;
}

.ss-toolbar-menu.active {
  background: #F5F7F8;
}

.ss-toolbar-menu.ss-divider {
  border-bottom: 1px solid #DADFE6;
}

.ss-toolbar-menu-title {
  color: #00A091;
}
.ss-toolbar-menu-group {
  // font-weight: bolder;
  text-transform: uppercase;
  color: #7C8E9E;
}
.ss-toolbar-menu-item {
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  padding-top: 8px;
  background: #FEFEFE;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: -16px;
  margin-right: -16px;
  color: #34495E;  
}
.ss-toolbar-menu-item::before {
  content: "";
  width: 20px;
  height: 20px;
  background: #DADFE6;
  display: block;
  border-radius: 50%;
  margin-right: 16px;
}

.ss-toolbar-menu-item:hover {
  background: #94E1D6; 
}

.ss-toolbar-menu-item:hover::before {
  background: #00A091;
}

@media screen and (min-width: 992px) {
  .ss-toolbar-menu {
      min-width: 20%;
      height: 100%;
      max-height: initial;
      left: 80px;
      top: 68px;
      bottom: initial;
      box-shadow: 2px 0 2px rgba(0, 0, 0, 0.36);
      // padding-top: 88px;
      bottom: initial;
      width: auto;
  }
}


`]
})
export class ToolbarComponent {

  @Input() itens: any;
  @Input() header: HeaderComponent;
 
  /***************************************************************************************************
   *          Construtor de pobre 
   ***************************************************************************************************/
  constructor() { }

  /***************************************************************************************************
   * atualiza o cabeçalho
   ***************************************************************************************************/
  public click(item) {
    if (this.header) {
      this.header.setPath();
    }
  }
}
 