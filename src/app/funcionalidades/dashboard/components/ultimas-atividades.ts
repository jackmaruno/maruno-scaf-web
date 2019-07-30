import { Component, OnInit, Input } from '@angular/core'; 

import { Funcoes } from 'src/app/core/util/funcoes';
import { ActionBarService } from 'src/app/core/components/actionbar';
import { VisualizarLancamentoModal } from '../../lancamentos/modals/visualizar-lancamento/visualizar-lancamento.modal';
/***********************************
*  CHART
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'ultimas-atividades',
  template:` 
  <div class="box box-primary sombreado">
      <div class="box-header">
          <h3 class="box-title" ><i class="material-icons">insert_invitation</i> Últimas Atividades</h3> 
          <div class="box-tools pull-right">
              <ul class="pagination pagination-sm inline" >
                  <li><span class="pagination-link" (click)="nextPage(1)">&laquo;</span></li> 
                  <li *ngFor="let i of paginas">
                    <span (click)="nextPage(i)" class="pagination-link" [ngClass]="{'pagination-link-large': i == pagina, 'pagination-link-small': i != pagina}" >{{i}}</span>
                  </li> 
                  <li><span class="pagination-link" (click)="nextPage(paginas.length)">&raquo;</span></li>
              </ul> 
              <br> 
          </div>
      </div>   
      <div class="box-body" >
          <ul class="todo-list">
              <li *ngFor="let atividade of list" class="pagination-link" (click)="visualizar(atividade.codLancamento)">
                  <span class="handle">
                    <i class="material-icons" style="color: green">check_circle</i>
                  </span>  
                  <span class="text">{{atividade.data}} - {{atividade.nomeCategoria}} -  {{atividade.valor | currency:'R$':'symbol':'1.2-2':'pt'}}</span>
                  <span class="label label-success"><i class="material-icons" style="font-size: 14px">access_time</i> {{getTempo(atividade)}}</span>
              </li>
          </ul> 
      </div>
  </div>
  `,
  styles:[``]
})
export class UltimasAtividades implements OnInit {
   
  @Input() public lista: any[]; 
  public rows:number = 6;
	public pagina:number = 1;
	public list:any[] = new Array();
	public paginas:any[] = new Array();

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private actionBarService: ActionBarService) {
  } 

  /***************************************************************************************************
   * Inicializa o componente   
   ***************************************************************************************************/
  ngOnInit() { 
    this.setList(this.lista);    
  }    
   
  public getTempo(atividade:any) { 
    if(atividade.minutos <= 60 && atividade.minutos >= 0){
      return atividade.minutos + ' minuto(s)';
    }else if(atividade.horas <= 24){
      return atividade.horas + ' hora(s)';
    }else{
      return atividade.dias + ' dia(s)';
    }
  }
     
  public setList(data:any) {    
    this.pagina = 1;
    this.paginas = Funcoes.newArray(data.length, this.rows);
    this.list = Funcoes.nextPage(this.rows, this.pagina, this.lista);  
  }

  public nextPage(pagina: any) {
    this.pagina = pagina;
    this.list = Funcoes.nextPage(this.rows, pagina, this.lista);  
  }   

  /***************************************************************************************************
   * abre a tela de visualizacao
   ***************************************************************************************************/
  public visualizar(codigo: any) {
    this.actionBarService.open(VisualizarLancamentoModal, { data: {codigo: codigo} });
  } 
}
