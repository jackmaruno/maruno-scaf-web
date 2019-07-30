import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';   
 

import { Constantes } from 'src/app/core/util/constantes';
import { ActionBarService } from 'src/app/core/components/actionbar';
import { TagsService } from 'src/app/services/tags.service';
import { TagModal } from '../../modals/tag/tag.modal';
import { AlertaService } from 'src/app/services/alerta.service';

/***********************************
*  Tela Cadastro de Tags
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-tags', 
  templateUrl: './tags.html',
  styleUrls: ['./tags.scss']
})
export class TagsPage implements OnInit{ 

  public lista$:Observable<any[]>; 

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private actionBarService:ActionBarService
            , public tagsService:TagsService 
            , private alertaService:AlertaService) { 
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() {
    this.pesquisar(); 
  } 

 /***************************************************************************************************
  *  realiza a pesquisa de novas fiscalizações
  ***************************************************************************************************/ 
  public pesquisar() { 
    this.lista$ = this.tagsService.findTags();
  }

 /***************************************************************************************************
  * abre a tela de ações
  ***************************************************************************************************/ 
  public editar(tag:any){   
    this.actionBarService.open(TagModal, {data: {tag: tag}}).afterClosed().subscribe((result?:any) => {
      if(result && result.valor === Constantes.SUCESSO){
        this.pesquisar();
      }
    });
  }  

  /***************************************************************************************************
   *  realiza a pesquisa de novas fiscalizações
   ***************************************************************************************************/
  public remover(tag:any) {


   let msg = `Deseja mesmo excluir a Etiqueta "${tag.nome}"`;
   this.alertaService.confirmar("Exclusão de Etiqueta", msg).subscribe((data?:any)=>{
     console.log(data);
     if(data && data.resultado && data.resultado == Constantes.CONFIRMADO){
       this.tagsService.removeTag(tag.codigo).subscribe((r?)=>{
        this.alertaService.sucesso(`Etiqueta "${tag.nome}" excluída com sucesso!`);
        this.pesquisar();
       }); 
     }
   });

  }
}
