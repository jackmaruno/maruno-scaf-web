import { Component, OnInit, Inject } from '@angular/core'; 

import { Constantes } from '../../core/util/constantes';
import { ActionBarRef, ACTIONBAR_DATA } from 'src/app/core/components/actionbar';

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
    constructor(public actionBarRef: ActionBarRef, @Inject(ACTIONBAR_DATA) public data: any  ) {
        this.tags = data.tags;  
        this.listTags = data.listTags;  
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
        this.actionBarRef.close({ ...{}, tags:this.tags, valor: valor });
    } 

    /***************************************************************************************************
     * salva 
     ***************************************************************************************************/
    public salvar(){  
        this.fechar(Constantes.SUCESSO);
    }
}
