import { Component, OnInit, Input } from '@angular/core'; 

import { Funcoes } from 'src/app/core/util/funcoes';
import { ActionBarService } from 'src/app/core/components/actionbar';
import { AlertaService } from 'src/app/services/alerta.service';
import { LancamentoAgendadoModal } from '../../lancamentos/modals/lancamento-agendado/lancamento-agendado.modal';
/***********************************
*  CHART
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'proximas-atividades',
  template:`  
  <div class="box box-primary sombreado">
      <div class="box-header">
          <i class="ion ion-clipboard"></i>
          <h3 class="box-title" ><i class="material-icons">insert_invitation</i> Próximas Atividades</h3>  
          <div class="box-tools pull-right">
              <ul class="pagination pagination-sm inline" >
                  <li><span class="pagination-link" (click)="nextPage(1)">&laquo;</span></li> 
                  <li *ngFor="let i of paginas">
                    <span (click)="nextPage(i)" class="pagination-link" [ngClass]="{'pagination-link-large': i == pagina, 'pagination-link-small': i != pagina}" >{{i}}</span>
                  </li> 
                  <li><span class="pagination-link" (click)="nextPage(paginas.length)">&raquo;</span></li>
              </ul> 
              <BR> 
          </div>
      </div> 
      <div class="box-body" > 
          <ul class="todo-list">
              <li class="linkAtividade" *ngFor="let atividade of list"  class="pagination-link" (click)="abrirTelaLancamento(atividade)"> 
                  <span class="handle">
                    <i class="material-icons" [ngClass]="{'text-danger': atividade.dias < 0, 'text-warning': atividade.dias >= 0 && atividade.dias < 3, 'text-success': atividade.dias >= 3 }">{{getIcone(atividade)}}</i> 
                  </span>  
                                                      
                  <span class="text">{{atividade.dataPrevista}} - {{atividade.nomeCategoria}} -  {{atividade.valorPrevisto | currency:'R$':'symbol':'1.2-2':'pt'}}</span>
                  <span class="label" [ngClass]="{'label-danger': atividade.dias < 0, 'label-warning': atividade.dias >= 0 && atividade.dias < 3, 'label-success': atividade.dias >= 3 }">  
                      <i class="material-icons" style="font-size: 14px">{{getIcone(atividade)}}</i> {{getTempo(atividade)}}
                  </span>
              </li>
          </ul>
      </div>  
  </div> 
  `,
  styles:[``]
})
export class ProximasAtividades implements OnInit {
   
  @Input() public lista: any[]; 
  public rows:number = 6;
	public pagina:number = 1;
	public list:any[] = new Array();
	public paginas:any[] = new Array();

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor(private actionBarService: ActionBarService
            , private alertaService: AlertaService) {
  } 

  /***************************************************************************************************
   * Inicializa o componente   
   ***************************************************************************************************/
  ngOnInit() { 
    this.setList(this.lista);    
  }    
    
  public getTempo(atividade:any) { 
    if(atividade.dias > 0){
      return atividade.dias + ' dia(s)';
    }else if(atividade.dias < 0){
      return (atividade.dias * -1) + ' dia(s) Atrasado';
    }else{
      return ' hoje';
    }
  }
     
  public getIcone(atividade:any) { 
    if(atividade.dias < 0){
      return 'warning';
    }else if(atividade.dias >= 0 && atividade.dias < 3){
      return 'adjust';
    }else {
      return 'av_timer'; 
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
   * abre a tela de lançamento 
   ***************************************************************************************************/
  public abrirTelaLancamento(atividade: any) { 
   this.actionBarService.open(LancamentoAgendadoModal, { data: {atividade:atividade} });
  } 
}
