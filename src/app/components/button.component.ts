import { Component, EventEmitter,  Input, Output } from '@angular/core';

/***************************************************************************************************
*  Componente de Botão
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Component({
  selector: 'botao',
  template: `
    <button type="button" [disabled]="disabled"  class="btn btn-{{tipo}}" value="{{label}}">
        <i class="{{icon}}"></i>{{label?'&nbsp;'+label+'&nbsp;':''}}
    </button>
  `
})
export class ButtonComponent  {  

  @Input() public label: string;
  @Input() public icon: string;
  @Input() public inline = false;
  @Input() public disabled = false;
  @Input() public tipo: string = 'default'; 
  
  @Output() click = new EventEmitter<string>();
  

  /***************************************************************************************************
   *          Construtor de pobre 
   ***************************************************************************************************/
  constructor() { 
  }
 

}
