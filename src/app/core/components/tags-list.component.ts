import { Component, Input } from '@angular/core';

/***************************************************************************************************
*  Componente de Tags
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Component({
  selector: 'tags-list',
  template: `<button type="button" class="ss-btn ss-btn-format-inline ss-btn-outline-success" *ngFor="let t of getList()" >{{t}}</button>`
})
export class TagsListComponent  {  

  @Input() public tags: string = ''; 

  /***************************************************************************************************
   *          Construtor de pobre 
   ***************************************************************************************************/
  constructor() {}
 
  public getList():any{ 
    let lista = [];
    if(this.tags){
      for(let t of this.tags.split(';')){
        if(t && t != ''){
          lista.push(t);
        }
      } 
    }
    return lista;
  }
}
