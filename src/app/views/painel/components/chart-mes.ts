import { Component, OnInit, Input } from '@angular/core';

var RECEITAS_COR = '#00a65a';
var DESPESAS_COR = '#f56954';
/***********************************
*  CHART
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'chart-mes',
  template:` 
<div class="card sombreado"> 
  <div class="card-header">
    <i class="icon-calendar"></i> <span style="font-size: 22px;">Atividades do Mês</span>
  </div>

  <div class="card-body painel" >
    <canvas baseChart class="chart"
    [datasets]="barChartData"
    [labels]="['']"
    [options]="chartOptions"
    [legend]="true"
    [chartType]="'bar'"  >
    </canvas>
  </div>
</div>  
  `,
  styles:[``]
})
export class ChartMes implements OnInit {
  
  @Input() public lista: any[]; 
 

  public barChartData: any[] = null;
 
  public chartOptions = {
    scaleShowVerticalLines: true
  , responsive: true
  , animation: false
  , scales: {yAxes: [{ticks: {beginAtZero: true}}]}
};

  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor() {
  } 

  /***************************************************************************************************
   * Inicializa o componente   
   ***************************************************************************************************/
  ngOnInit() { 
    this.barChartData  = new Array();
    for(let o of this.lista){
      if(o.codTipo != 4 ){
        this.barChartData.push({data: [o.valorPago], label: o.descricao, backgroundColor: this.getColor(o), borderColor: this.getColor(o)});
      }
    }
  }     
     

  private getColor(resumo:any) {          
    if(resumo.codTipo == 1){
      return '#20a8d8' ;
    }else if(resumo.codTipo == 2){
      return '#ffc107' ;
    }else if(resumo.codTipo == 3){
      return '#f86c6b' ;
    }else if(resumo.codTipo == 4){
      return '#4dbd74' ;
    }else if(resumo.codTipo == 5){
      return '#63c2de' ;
    }else {
    return '' ;
    }      
  }
}
