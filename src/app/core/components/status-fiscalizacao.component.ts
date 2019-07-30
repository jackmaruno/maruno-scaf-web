import { Component, Input } from '@angular/core';

/***************************************************************************************************
*  Componente de Status da fiscalização
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Component({
  selector: 'status-fiscalizacao',
  template: ` 
    <div class="fiscalizacao-prazo {{getClass()}}"  >
     {{getLabel()}}
    </div>
`
})
export class StatusFiscalizacaoComponent  {  

  @Input() public diasEmAndamento: number = 1;
  @Input() public prazo: number = 10;  

  /***************************************************************************************************
   *          Construtor de pobre 
   ***************************************************************************************************/
  constructor() { 
  }
 
  public getLabel(){
    if(this.prazo - this.diasEmAndamento > 0){
      return 'em dia';
    }else if(this.prazo - this.diasEmAndamento == 0){
      return 'no limite';
    }else{
      return 'atrazado';
    }
  }

  public getClass(){
    if(this.prazo - this.diasEmAndamento > 0){
      return 'fiscalizacao-prazo-em-dia';
    }else if(this.prazo - this.diasEmAndamento == 0){
      return 'fiscalizacao-prazo-no-limite';
    }else{
      return 'fiscalizacao-prazo-em-atrazo';
    }
  }

}
