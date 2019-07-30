import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

/***************************************************************************************************
*  Componente de Aba
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Component({
  selector: 'app-tab',
  template: ` 
  <div class="ss-tab-content" *ngIf="selected" >
    <ng-content></ng-content>
  </div>
`
})
export class AppTabComponent implements OnInit{

    @Input()
    public title: string;

    @Input()
    public selected = false;

    @Output() selecionar = new EventEmitter<any>();

    ngOnInit(){} 
  
}
 