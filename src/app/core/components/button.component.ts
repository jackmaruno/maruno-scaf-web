import { Component, EventEmitter,  Input, Output } from '@angular/core';

/***************************************************************************************************
*  Componente de Botão
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Component({
  selector: 'botao',
  template: `
    <button type="button" [disabled]="disabled"  class="ss-btn ss-btn-format-{{formato}} ss-btn-{{tipo}}" value="{{label}}">
        <i class="material-icons">{{icon}}</i>{{label?'&nbsp;'+label+'&nbsp;':''}}
    </button>
  `
})
export class ButtonComponent  {  

  @Input() public label: string;
  @Input() public icon: string;
  @Input() public inline = false;
  @Input() public disabled = false;
  @Input() public tipo: string = 'default'; 
  @Input() public formato: string = 'default'; 
  
  @Output() click = new EventEmitter<string>();
  

  /***************************************************************************************************
   *          Construtor de pobre 
   ***************************************************************************************************/
  constructor() { 
  }
 

}
