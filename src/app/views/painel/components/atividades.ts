import { Component, OnInit, Input } from '@angular/core';
import { RelacaoLancamentosModal } from '../modals/relacao-lancamentos/relacao-lancamentos.modal';
import { DialogService } from 'primeng/api';
 
/***********************************
*  CHART
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'atividades',
  template:`
<div class="row"> 
  <div class="col-sm-6 col-md-2 " *ngFor="let atividade of lista" >
    <div class="card text-white sombreado" [ngClass]="{'bg-primary': atividade.codTipo == 1
                                                      ,'bg-danger': atividade.codTipo == 3
                                                      ,'bg-info': atividade.codTipo == 5
                                                      ,'bg-warning': atividade.codTipo == 2
                                                      ,'bg-success': atividade.codTipo == 4}" >
      <div class="card-body" (click)="visualizarLancamentos(atividade)">
        <div class="h1 text-muted text-right mb-4">
          <i class="{{getSmallboxIcon(atividade)}}"></i>
        </div>
        <div class="h4 mb-0">{{atividade.valorPago | currency:'R$':'symbol':'1.2-2':'pt'}}</div>
        <small class="text-muted text-uppercase font-weight-bold">{{atividade.descricao}}</small>
        <!--
        <div class="progress progress-white progress-xs mt-3">
          <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div> 
        -->
      </div>
    </div>
  </div>
</div>
  `, 
  styles:[``]
})
export class Atividades implements OnInit {
   /**
    * 

<!--
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
-->    * 
    */
  @Input() public lista: any[]; 
 
  public chart:any;
  public chartTotal:any;

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor( public dialogService: DialogService) {
  } 

  /***************************************************************************************************
   * Inicializa o componente   
   ***************************************************************************************************/
  ngOnInit() {     
  }     
   
  /***************************************************************************************************
   * abre a tela
   ***************************************************************************************************/
  public visualizarLancamentos(atividade: any) {
    if(atividade && atividade.codTipo > 0){
      this.dialogService.open(RelacaoLancamentosModal, {
        data: atividade,
        header: 'Visualizar Lançamentos',
        closeOnEscape: true,
        width: '80%',
        baseZIndex: 10000,
      });

    }
  } 

  public getSmallboxIcon(atividade:any) { // icon-basket-loaded
    if (atividade.codTipo == 1) {
      return 'icon-calendar';
    } else if (atividade.codTipo == 2) {
      return 'icon-calculator';
    } else if (atividade.codTipo == 3) {
      return 'icon-star';
    } else if (atividade.codTipo == 4) {
      return 'icon-cursor';
    } else if (atividade.codTipo == 5) {
      return 'icon-credit-card';
    } else {
      return '';
    }
  }
}
