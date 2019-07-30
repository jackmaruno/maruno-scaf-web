import { Component, Inject } from '@angular/core'; 

import { Constantes } from 'src/app/core/util/constantes';
import { AlertaService } from 'src/app/services/alerta.service';
import { ActionBarRef, ACTIONBAR_DATA } from 'src/app/core/components/actionbar';
import { TagsService } from 'src/app/services/tags.service';
 
@Component({
  selector: 'app-tag-modal',
  templateUrl:'tag.modal.html' ,
  styleUrls: ['tag.modal.scss']
})
export class TagModal {

    public tag: any;

    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    constructor(public actionBarRef: ActionBarRef
              , @Inject(ACTIONBAR_DATA) public data: any
              , public tagsService:TagsService
              , private alertaService:AlertaService ) {
        if(data.tag){
            this.tag = Object.assign({}, JSON.parse(JSON.stringify(data.tag)));  
        }else{
            this.tag = {nome:''};  
        }
    }

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.actionBarRef.close({ ...this.data, valor: valor });
    } 
 
    /***************************************************************************************************
     * salva o laudo da fiscalização
     ***************************************************************************************************/
    public salvar(){ 
        let mensagem = `Tag salva com sucesso!`;
        this.tagsService.saveTag(this.tag).subscribe(
            () => {  
                this.data.tag = this.tag; 
                this.alertaService.sucesso(mensagem);
                this.fechar(Constantes.SUCESSO);
            }  
        ); 
    }
 
}
