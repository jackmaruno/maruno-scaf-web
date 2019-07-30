import { Component, OnInit, Input } from '@angular/core';
import { PaginaEnum } from '../util/constantes';
import { ActionBarService } from './actionbar';
import { LancamentoModal } from 'src/app/funcionalidades/lancamentos/modals/lancamento/lancamento.modal';
import { ParametrosService } from 'src/app/services/parametros.service';
import { TagsService } from 'src/app/services/tags.service';
import { CartaoService } from 'src/app/services/cartao.service';

/***************************************************************************************************
*  Componente de Cabeçalho
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
@Component({
  selector: 'app-header', 
  template: `
  <div class="row" style="width: 100% !important;"> 
      <div class="col-sm-11">
          <h6>{{pagina?pagina.funcionalidade:''}}</h6>
          <div class="ss-breadcrumb"> 
              <span class="ss-breadcrumb-item"  >In\u00EDcio</span> 
              <span class="ss-breadcrumb-item"  *ngFor="let p of pagina.caminho; let i = index">{{p}}</span> 
              <span class="ss-breadcrumb-item ss-breadcrumb-link" >{{pagina.funcionalidade}}</span>
          </div>
      </div>
      <button type="button" class="col-sm-1 ss-btn ss-btn-format-success ss-btn-success" (click)="novo()" >
        <i class="material-icons">add_circle_outline</i>&nbsp; &nbsp; &nbsp;Novo Lançamento
      </button> 
  </div> 


  `, styles:[` 

.ss-breadcrumb{padding:4px 14px;padding-left:initial;margin:0}

.ss-breadcrumb .ss-breadcrumb-item{color:#34495E;margin:0;text-decoration:none}

.ss-breadcrumb .ss-breadcrumb-item+.ss-breadcrumb-item:before{padding:0 8px;font-size:16px;font-weight:400;content:"›"}

.ss-breadcrumb .ss-breadcrumb-item:hover{color:#00C9B8}

.ss-breadcrumb .ss-breadcrumb-link{color:#34495E;font-weight:bolder;cursor:pointer}

  `]
})
export class HeaderComponent implements OnInit {

  public pagina: PaginaEnum;
  
  public listGrupos: any[];
  public listCartoes: any[];
  public listTags: any[];

  /***************************************************************************************************
   *          Construtor de pobre 
   ***************************************************************************************************/
  constructor(private actionBarService: ActionBarService
            , public parametrosService: ParametrosService
            , public tagsService:TagsService
            , public cartaoService: CartaoService ) {
    this.setPath();
  }

  ngOnInit() {
    this.parametrosService.findGrupos().subscribe((listGrupos) => {
      this.listGrupos = listGrupos;
    }); 
    this.tagsService.findTags().subscribe((listTags) => {
      this.listTags = listTags;
    });
    this.cartaoService.findAtivos().subscribe((listCartoes) => {
      this.listCartoes = listCartoes;
    });
  }

  /***************************************************************************************************
  *  atualiza o caminho no cabeçalho
  ***************************************************************************************************/
  public setPath() {
    this.pagina = PaginaEnum.get(window.location.pathname);
    document.title = this.pagina.funcionalidade;
  }



  /***************************************************************************************************
   * abre a tela de cadastro
   ***************************************************************************************************/
  public novo() {
    let data = { lancamento: {}, listGrupos: this.listGrupos, listCartoes: this.listCartoes, listTags:this.listTags };
    this.actionBarService.open(LancamentoModal, { data: data });
  } 
}
