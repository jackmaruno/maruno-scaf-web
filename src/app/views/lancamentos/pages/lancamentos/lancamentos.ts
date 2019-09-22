import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';   
import { TemplatePortal } from '@angular/cdk/portal';
 
import { VisualizarLancamentoModal } from '../../modals/visualizar-lancamento/visualizar-lancamento.modal';
import { TipoPagamentoEnum, Constantes } from '../../../../util/constantes';
import { LancamentoService } from '../../../../services/lancamento.service';
import { CartaoService } from '../../../../services/cartao.service';
import { ParametrosService } from '../../../../services/parametros.service';
import { TagsService } from '../../../../services/tags.service';
import { AlertaService } from '../../../../services/alerta.service';
import { SidebarContainerService } from '../../../../components/sidebar/sidebar-container.service';
import { Funcoes } from '../../../../util/funcoes';
import { LancamentoModal } from '../../modals/lancamento/lancamento.modal';
import { DialogService } from 'primeng/api';
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

  @ViewChild('filtrosSidebar', {static:true}) filtrosSidebar: TemplateRef<any>;
  
  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(public dialogService: DialogService
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

    this.parametrosService.findGrupos((listGrupos: any[]) => {
      this.listGrupos = listGrupos;
    }); 
    this.tagsService.findTags((listTags: any) => {
      this.listTags = listTags;
    });
    this.cartaoService.findCartoesAtivos((listCartoes: any) => {
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
      this.dialogService.open(LancamentoModal, {
        data: { lancamento: lancamento, listGrupos: this.listGrupos, listCartoes: this.listCartoes, listTags:this.listTags },
        header: 'Cadastro de Lançamento', 
        closeOnEscape: true,
        width: '75%',
        baseZIndex: 10000,
    }).onClose.subscribe((result?: any) => {
        if (result && result.valor === Constantes.SUCESSO) {
          this.pesquisar();
        }
    }); 
  } 

  /***************************************************************************************************
   * abre a tela de visualizacao
   ***************************************************************************************************/
  public visualizar(lancamento: any) {
      this.dialogService.open(VisualizarLancamentoModal, {
        data: {codigo: lancamento.codigo},
        header: 'Visualizar Lançamento', 
        closeOnEscape: true,
        width: '80%',
        baseZIndex: 10000,
    });  
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
