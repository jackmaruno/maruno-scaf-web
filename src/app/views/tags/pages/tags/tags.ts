import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';   
 
 
import { TagModal } from '../../modals/tag/tag.modal'; 
import { ActionBarService } from '../../../../components/actionbar';
import { TagsService } from '../../../../services/tags.service';
import { AlertaService } from '../../../../services/alerta.service';
import { Constantes } from '../../../../util/constantes';
import { SidebarContainerService } from '../../../../components/sidebar/sidebar-container.service';
import { DialogService } from 'primeng/api';
import { Funcoes } from '../../../../util/funcoes';

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

  public lista: any[];

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private sidebarService: SidebarContainerService
            , public dialogService: DialogService
            , public tagsService:TagsService
            , private alertaService:AlertaService) { 
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() {
    this.sidebarService.close();
    this.pesquisar(); 
  } 
 
 /***************************************************************************************************
  *  realiza a pesquisa 
  ***************************************************************************************************/ 
  public pesquisar() { 
    Funcoes.setItem(Constantes.LIST_TAGS, []);
    this.tagsService.findTags(
      (lista: any)=>{
        this.lista = lista;
      }
    );
  }

 /***************************************************************************************************
  * abre a tela de ações
  ***************************************************************************************************/ 
  public editar(tag: any) {
    this.dialogService.open(TagModal, {
      data: { tag: tag },
      header: 'Cadastro de Marcador/Tag',
      closeOnEscape: true,
      baseZIndex: 10000,
    }).onClose.subscribe((result?: any) => {
      if (result && result.valor === Constantes.SUCESSO) {
        this.pesquisar();
      }
    });
  }  

  /***************************************************************************************************
   *  remove
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
