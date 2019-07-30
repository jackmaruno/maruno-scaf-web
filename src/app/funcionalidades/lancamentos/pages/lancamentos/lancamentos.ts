import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';   

import { Constantes, TipoPagamentoEnum } from 'src/app/core/util/constantes';
import { ActionBarService } from 'src/app/core/components/actionbar'; 
import { AlertaService } from 'src/app/services/alerta.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { TagsService } from 'src/app/services/tags.service';
import { LancamentoModal } from '../../modals/lancamento/lancamento.modal';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { CartaoService } from 'src/app/services/cartao.service';
import { Funcoes } from 'src/app/core/util/funcoes';
import { SidebarContainerService } from 'src/app/core/components/sidebar/sidebar-container.service';
import { TemplatePortal } from '@angular/cdk/portal';
import { VisualizarLancamentoModal } from '../../modals/visualizar-lancamento/visualizar-lancamento.modal';
/***********************************
*  Tela Cadastro de Lançamentos
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-lancamentos', 
  templateUrl: './lancamentos.html',
  styleUrls: ['./lancamentos.scss']
})
export class LancamentosPage implements OnInit{ 

  public periodo:any;
  public filtro:any = {};
  public grupo:any = {listCategorias:[]};
  public TipoPagamentoEnum = TipoPagamentoEnum;

  public lista$: Observable<any[]>;
  public listGrupos: any[];
  public listCartoes: any[];
  public listTags: any[];

  @ViewChild('filtrosSidebar') filtrosSidebar: TemplateRef<any>;
  
  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private actionBarService: ActionBarService
            , public lancamentoService: LancamentoService
            , public cartaoService: CartaoService
            , public parametrosService: ParametrosService
            , public tagsService:TagsService 
            , private alertaService: AlertaService
            , private sidebarService: SidebarContainerService) {
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() { 
    this.periodo = Funcoes.getPeriodoMesAtual();

    this.sidebarService.open(new TemplatePortal(this.filtrosSidebar, undefined, {})); 
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
   *  realiza a pesquisa 
   ***************************************************************************************************/
  public pesquisar() {
    // console.log('this.periodo', this.periodo);

    Funcoes.setDataInicioFim(this.periodo, this.filtro); 

    delete this.filtro.codGrupo ;
    if(this.grupo.codigo > 0){
      this.filtro.codGrupo = this.grupo.codigo;
    }

    this.lista$ = this.lancamentoService.find(this.filtro);
  }

  /***************************************************************************************************
   *  limpa a pesquisa
   ***************************************************************************************************/
  public limpar() {
    this.filtro = {}; 
    this.periodo = Funcoes.getPeriodoMesAtual(); 
    this.grupo = {listCategorias:[]};
    this.lista$ = null;
  }

 /***************************************************************************************************
   *  realiza a pesquisa 
  ***************************************************************************************************/ 
  public onKey(event: any) {
    if (event.key === "Enter") {
      this.pesquisar();
    }
  }

  /***************************************************************************************************
   * abre a tela de cadastro
   ***************************************************************************************************/
  public editar(lancamento: any) {
    let data = { lancamento: lancamento, listGrupos: this.listGrupos, listCartoes: this.listCartoes, listTags:this.listTags };
    this.actionBarService.open(LancamentoModal, { data: data }).afterClosed().subscribe((result?: any) => {
      if (result && result.valor === Constantes.SUCESSO) {
        this.pesquisar();
      }
    });
  } 

  /***************************************************************************************************
   * abre a tela de visualizacao
   ***************************************************************************************************/
  public visualizar(lancamento: any) {
    this.actionBarService.open(VisualizarLancamentoModal, { data: {codigo: lancamento.codigo} });
  } 

  /***************************************************************************************************
   *  remove
   ***************************************************************************************************/
  public remover(lancamento: any) {
    let msg = `Deseja mesmo excluir o Lançamento nº "${lancamento.codigo}"`;
    this.alertaService.confirmar("Exclusão de Lançamento", msg).subscribe((data?: any) => {
      console.log(data);
      if (data && data.resultado && data.resultado == Constantes.CONFIRMADO) {
        this.lancamentoService.remove(lancamento.codigo).subscribe((r?) => {
          this.alertaService.sucesso(`Lançamento nº "${lancamento.codigo}" excluído com sucesso!`);
          this.pesquisar();
        });
      }
    }); 
  }
}
