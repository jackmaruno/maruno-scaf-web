import { Component, OnInit } from '@angular/core'; 
import { Constantes } from '../../util/constantes';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
 

/***********************************
*  @Aplicativo SCAF
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-tags-modal',
  templateUrl:'tags.modal.html' ,
  styleUrls: ['tags.modal.scss'] 
}) 
export class TagsModal implements OnInit {
    
    public tags: any;  
    public listTags: any[];  

    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    constructor(public ref: DynamicDialogRef
        , public config: DynamicDialogConfig) {
        this.tags = config.data.tags;  
        this.listTags = config.data.listTags;  
    }

    /***************************************************************************************************
     * inicia os componentes
     ***************************************************************************************************/
    ngOnInit() { 
        if(!this.tags){
            this.tags = '';
        } 
        for (let tag of this.listTags) {
            tag.check = false;
            for (let t of this.tags.split(';')) {
                if(tag.nome.toUpperCase().trim() === t.toUpperCase().trim()){
                    tag.check = true;
                }
            }
        }
    } 

    /***************************************************************************************************
     * atualiza as tags
     ***************************************************************************************************/
    public set(tag:any){   
        if(tag.check){
            tag.check = false;
            this.tags = this.tags.replace(`${tag.nome};`, '');
        }else{
            this.tags += `${tag.nome};`;
            tag.check = true;
        }
    }

    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    public fechar(valor = 'Fechado') {
        this.ref.close({tags:this.tags, valor: valor }); 
    } 

    /***************************************************************************************************
     * salva 
     ***************************************************************************************************/
    public salvar(){  
        this.fechar(Constantes.SUCESSO);
    }
}
