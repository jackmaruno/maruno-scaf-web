import { Component, OnInit, Input } from '@angular/core'; 
 
import { LancamentoAgendadoModal } from '../../lancamentos/modals/lancamento-agendado/lancamento-agendado.modal';
import { DialogService } from 'primeng/api';
import { AlertaService } from '../../../services/alerta.service';
import { Funcoes } from '../../../util/funcoes';
/***********************************
*  CHART
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'proximas-atividades',
  template:`  

  <div class="card sombreado"> 
      <div class="card-header">
        <i class="icon-calendar"></i> <span style="font-size: 22px;">Próximas Atividades</span>
        <div class="card-header-actions" style="height: 41px;" >
          <ul class="pagination pagination-sm inline" >
              <li><span class="pagination-link" (click)="nextPage(1)">&laquo;</span></li> 
              <li *ngFor="let i of paginas">
                <span (click)="nextPage(i)" class="pagination-link" [ngClass]="{'pagination-link-large': i == pagina, 'pagination-link-small': i != pagina}" >{{i}}</span>
              </li> 
              <li><span class="pagination-link" (click)="nextPage(paginas.length)">&raquo;</span></li>
          </ul> 
        </div>
      </div>

      <div class="card-body painel" >
          <ul class="todo-list">
              <li *ngFor="let atividade of list" class="pagination-link" (click)="abrirTelaLancamento(atividade)">
                  <span class="handle">
                    <i class="{{getIcone(atividade)}} {{atividade.dias < 0? 'text-danger': atividade.dias >= 0  && atividade.dias < 3 ? 'text-warning': atividade.dias >= 3 ? 'text-success': '' }}"></i> 
                  </span>  
                             
                  <span class="text">{{atividade.dataPrevista}} - {{atividade.nomeCategoria}} -  {{atividade.valorPrevisto | currency:'R$':'symbol':'1.2-2':'pt'}}</span>
                  <span class="label label-small" [ngClass]="{'label-danger': atividade.dias < 0, 'label-warning': atividade.dias >= 0 && atividade.dias < 3, 'label-success': atividade.dias >= 3 }">  
                      <i class="{{getIcone(atividade)}}" style="font-size: 14px"></i> {{getTempo(atividade)}}
                  </span>
              </li>
          </ul> 
      </div>
  </div>
                      
  `, 
  styles:[`
  
  
  `]
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
  constructor( public dialogService: DialogService
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
      return 'fa fa-warning';
    }else if(atividade.dias >= 0 && atividade.dias < 3){
      return 'fa info-circle';
    }else {
      return 'fa fa-clock-o'; 
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
    this.dialogService.open(LancamentoAgendadoModal, {
      data:  {atividade:atividade},
      header: 'Visualizar Lançamentos',
      closeOnEscape: true,
      width: '80%',
      baseZIndex: 10000,
    });
  } 
}
