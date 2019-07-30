import { Component, OnInit, Input } from '@angular/core';
import { Funcoes } from 'src/app/core/util/funcoes';
import { ActionBarService } from 'src/app/core/components/actionbar';
import { RelacaoLancamentosModal } from '../modals/relacao-lancamentos/relacao-lancamentos.modal';
 
/***********************************
*  CHART
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'atividades',
  template:`

<div class="row">
  <div class="col-lg-2" *ngFor="let atividade of lista">
      <div class="small-box sombreado" [ngClass]="{'bg-orange': atividade.codTipo == 1
                                                  ,'bg-red': atividade.codTipo == 3
                                                  ,'bg-blue': atividade.codTipo == 5
                                                  ,'bg-yellow': atividade.codTipo == 2
                                                  ,'bg-green': atividade.codTipo == 4}">  
          <div class="small-box-inner" >  
              <h2> 
                  {{atividade.valorPago | currency:'R$':'symbol':'1.2-2':'pt'}}
              </h2> 
              <p style="font-size: 20px">{{atividade.descricao}}</p>
            </div>
          <div class="small-box-icon">
              <i class="material-icons" style="font-size: 90px !important;">{{getSmallboxIcon(atividade)}}</i>  
          </div>
          <div class="small-box-footer pagination-link" (click)="visualizarLancamentos(atividade)">  
              Mais Informações <i class="fa fa-arrow-circle-right"></i>  
          </div> 
      </div>
  </div>   
</div>
  `,
  styles:[``]
})
export class Atividades implements OnInit {
   
  @Input() public lista: any[]; 
 
  public chart:any;
  public chartTotal:any;

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor( private actionBarService: ActionBarService) {
  } 

  /***************************************************************************************************
   * Inicializa o componente   
   ***************************************************************************************************/
  ngOnInit() {     
  }     
   
  /***************************************************************************************************
   * abre a tela de 
   ***************************************************************************************************/
  public visualizarLancamentos(atividade: any) {
    if(atividade && atividade.codTipo > 0){
      this.actionBarService.open(RelacaoLancamentosModal, { data: atividade });
    }
  } 

  public getSmallboxIcon(atividade:any) {
    if (atividade.codTipo == 1) {
      return 'av_timer';
    } else if (atividade.codTipo == 2) {
      return 'format_list_numbered';
    } else if (atividade.codTipo == 3) {
      return 'reorder';
    } else if (atividade.codTipo == 4) {
      return 'attach_money';
    } else if (atividade.codTipo == 5) {
      return 'credit_card';
    } else {
      return '';
    }
  }
}
