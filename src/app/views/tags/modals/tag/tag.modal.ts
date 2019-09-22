import { Component } from '@angular/core'; 
import { TagsService } from '../../../../services/tags.service';
import { AlertaService } from '../../../../services/alerta.service';
import { Constantes } from '../../../../util/constantes';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
 
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
    constructor(public ref: DynamicDialogRef
              , public config: DynamicDialogConfig
              , public tagsService:TagsService
              , private alertaService:AlertaService ) {
        if(config.data.tag){
            this.tag = Object.assign({}, JSON.parse(JSON.stringify(config.data.tag)));  
        }else{
            this.tag = {nome:''};  
        } 
    }

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.ref.close({valor: valor}); 
    } 
 
    /***************************************************************************************************
     * salva
     ***************************************************************************************************/
    public salvar(){ 
        let mensagem = `Tag salva com sucesso!`;
        this.tagsService.saveTag(this.tag).subscribe(
            () => {  
                this.config.data.tag = this.tag; 
                this.alertaService.sucesso(mensagem);
                this.fechar(Constantes.SUCESSO);
            }  
        ); 
    }
 
}
